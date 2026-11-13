"""Build an editable resume from Markdown; defaults to the shared resume source.

Run with: uv run --with python-docx==1.2.0 python scripts/build_resume_docx.py --output /path/to/resume.docx
"""
from pathlib import Path
import argparse
import re
from datetime import datetime, timezone

from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.style import WD_STYLE_TYPE
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_LINE_SPACING
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.opc.constants import RELATIONSHIP_TYPE as RT

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description='Build an editable resume Word companion.')
parser.add_argument('--source', type=Path, default=ROOT / 'content' / 'resume.md', help='Resume Markdown source; defaults to the shared resume source')
parser.add_argument('--output', type=Path, required=True, help='Destination DOCX path')
args = parser.parse_args()
SOURCE = args.source.expanduser().resolve()
OUTPUT = args.output.expanduser().resolve()
doc = Document()
section = doc.sections[0]
section.page_width = Inches(8.5)
section.page_height = Inches(11)
section.left_margin = Pt(38)
section.right_margin = Pt(38)
section.top_margin = Pt(30)
section.bottom_margin = Pt(30)

def configure_font(style, size, bold=False):
    style.font.name = 'Arial'
    style.font.size = Pt(size)
    style.font.bold = bold
    style.font.color.rgb = RGBColor(0, 0, 0)
    fonts = style.element.get_or_add_rPr().get_or_add_rFonts()
    for attr in ('ascii', 'hAnsi', 'eastAsia', 'cs'):
        fonts.set(qn('w:' + attr), 'Arial')
    for attr in ('asciiTheme', 'hAnsiTheme', 'eastAsiaTheme', 'cstheme'):
        fonts.attrib.pop(qn('w:' + attr), None)

def configure_style(name, size=10.5, leading=12.4, before=0, after=3.5, bold=False, keep=False):
    style = doc.styles[name] if name in doc.styles else doc.styles.add_style(name, WD_STYLE_TYPE.PARAGRAPH)
    configure_font(style, size, bold)
    fmt = style.paragraph_format
    fmt.alignment = WD_ALIGN_PARAGRAPH.LEFT
    fmt.space_before = Pt(before)
    fmt.space_after = Pt(after)
    fmt.line_spacing_rule = WD_LINE_SPACING.EXACTLY
    fmt.line_spacing = Pt(leading)
    fmt.keep_with_next = keep
    fmt.widow_control = True
    return style

configure_style('Normal')
configure_style('Title', size=20, leading=23, after=4, bold=True, keep=True)
configure_style('Heading 1', size=11.5, leading=14, before=9, after=4, bold=True, keep=True)
configure_style('Heading 2', size=10.5, leading=12.4, before=6, after=3, bold=True, keep=True)
configure_style('Resume Role', before=3, after=3, bold=True, keep=True)
configure_style('Resume Focus', after=3, keep=True)
configure_style('Resume Contact', size=9.5, leading=11.5, after=3, keep=True)
bullet_style = configure_style('Resume Bullet')
bullet_style.paragraph_format.left_indent = Pt(10)
bullet_style.paragraph_format.first_line_indent = Pt(-10)
bullet_style.paragraph_format.keep_together = True

# Native Word numbering keeps bullets editable and avoids layout tables/text boxes.
numbering = doc.part.numbering_part.element
abstract_id = max([int(n.get(qn('w:abstractNumId'))) for n in numbering.findall(qn('w:abstractNum'))] + [-1]) + 1
abstract = OxmlElement('w:abstractNum')
abstract.set(qn('w:abstractNumId'), str(abstract_id))
multi = OxmlElement('w:multiLevelType')
multi.set(qn('w:val'), 'singleLevel')
abstract.append(multi)
level = OxmlElement('w:lvl')
level.set(qn('w:ilvl'), '0')
for tag, value in [('start', '1'), ('numFmt', 'bullet'), ('lvlText', '•'), ('lvlJc', 'left')]:
    item = OxmlElement('w:' + tag)
    item.set(qn('w:val'), value)
    level.append(item)
level_ppr = OxmlElement('w:pPr')
tabs = OxmlElement('w:tabs')
tab = OxmlElement('w:tab')
tab.set(qn('w:val'), 'num')
tab.set(qn('w:pos'), '200')
tabs.append(tab)
level_ppr.append(tabs)
indent = OxmlElement('w:ind')
indent.set(qn('w:left'), '200')
indent.set(qn('w:hanging'), '200')
level_ppr.append(indent)
level.append(level_ppr)
rpr = OxmlElement('w:rPr')
fonts = OxmlElement('w:rFonts')
fonts.set(qn('w:ascii'), 'Arial')
fonts.set(qn('w:hAnsi'), 'Arial')
rpr.append(fonts)
level.append(rpr)
abstract.append(level)
numbering.append(abstract)
num_id = max([int(n.get(qn('w:numId'))) for n in numbering.findall(qn('w:num'))] + [0]) + 1
num = OxmlElement('w:num')
num.set(qn('w:numId'), str(num_id))
abstract_ref = OxmlElement('w:abstractNumId')
abstract_ref.set(qn('w:val'), str(abstract_id))
num.append(abstract_ref)
numbering.append(num)

def add_link(paragraph, label, url):
    link = OxmlElement('w:hyperlink')
    link.set(qn('r:id'), paragraph.part.relate_to(url, RT.HYPERLINK, is_external=True))
    run = OxmlElement('w:r')
    props = OxmlElement('w:rPr')
    color = OxmlElement('w:color')
    color.set(qn('w:val'), '1E40AF')
    props.append(color)
    run.append(props)
    value = OxmlElement('w:t')
    value.text = label
    run.append(value)
    link.append(run)
    paragraph._p.append(link)

def add_inline(paragraph, text):
    for token in re.split(r'(\*\*.*?\*\*|\[[^\]]+\]\([^)]+\))', text):
        if not token:
            continue
        match = re.fullmatch(r'\[([^\]]+)\]\(([^)]+)\)', token)
        if match:
            add_link(paragraph, *match.groups())
        elif token.startswith('**') and token.endswith('**'):
            paragraph.add_run(token[2:-2]).bold = True
        else:
            paragraph.add_run(token)

current_section = ''
for raw in SOURCE.read_text().splitlines():
    line = raw.strip()
    if not line:
        continue
    if line.startswith('# '):
        style, text = 'Title', line[2:]
    elif line.startswith('## '):
        current_section = line[3:]
        style, text = 'Heading 1', current_section
    elif line.startswith('### '):
        style, text = 'Heading 2', line[4:]
    elif line.startswith('- '):
        style, text = 'Resume Bullet', line[2:]
    elif not current_section:
        if line.startswith('**'):
            style = 'Resume Role'
        elif '|' not in line and '[' not in line and '@' not in line:
            style = 'Resume Focus'
        else:
            style = 'Resume Contact'
        text = line
    elif current_section == 'Experience' and line.startswith('**'):
        style, text = 'Resume Role', line
    else:
        style, text = 'Normal', line
    paragraph = doc.add_paragraph(style=style)
    add_inline(paragraph, text)
    if style == 'Resume Bullet':
        numpr = paragraph._p.get_or_add_pPr().get_or_add_numPr()
        numpr.get_or_add_ilvl().val = 0
        numpr.get_or_add_numId().val = num_id

props = doc.core_properties
props.title = 'Jesus Rosario Resume'
props.subject = 'Senior and Lead Software Engineer'
props.author = 'Jesus Rosario'
props.last_modified_by = 'Jesus Rosario'
props.comments = ''
props.created = datetime.now(timezone.utc)
props.modified = datetime.now(timezone.utc)
props.keywords = ''
# The bundled Word defaults can carry a decorative title border. Keep the
# resume's hierarchy typographic, matching the companion PDF.
for border in list(doc.styles.element.iter(qn('w:pBdr'))):
    border.getparent().remove(border)
for border in list(doc.element.iter(qn('w:pBdr'))):
    border.getparent().remove(border)
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
doc.save(OUTPUT)
print(OUTPUT)
