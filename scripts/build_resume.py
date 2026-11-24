"""Build a resume PDF from Markdown; defaults to the shared resume source.

Run with: uv run --with reportlab==5.0.1 python scripts/build_resume.py
"""
from html import escape
from pathlib import Path
import argparse
import re

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
import reportlab
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description="Build a one-page resume PDF from Markdown.")
parser.add_argument("--source", type=Path, default=ROOT / "content" / "resume.md")
parser.add_argument("--output", type=Path, default=ROOT / "public" / "jesus-rosario-resume.pdf")
args = parser.parse_args()
SOURCE = args.source.expanduser().resolve()
OUTPUT = args.output.expanduser().resolve()


def inline(text):
    text = escape(text)
    text = re.sub(r"\[([^\]]+)\]\(((?:https?://|mailto:|tel:)[^)]+)\)", r'<link href="\2" color="#1e40af">\1</link>', text)
    return re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", text)


# Arial matches the Word companion. Fall back to ReportLab's bundled Vera Sans
# where the macOS Arial files are unavailable; Vera is wider, so recheck the layout.
arial_dir = Path("/System/Library/Fonts/Supplemental")
font_files = (arial_dir / "Arial.ttf", arial_dir / "Arial Bold.ttf")
font_label = "Arial"
if not all(path.exists() for path in font_files):
    vera_dir = Path(reportlab.__file__).parent / "fonts"
    font_files = (vera_dir / "Vera.ttf", vera_dir / "VeraBd.ttf")
    font_label = "Bitstream Vera Sans (Arial not found)"
pdfmetrics.registerFont(TTFont("Resume", str(font_files[0])))
pdfmetrics.registerFont(TTFont("Resume-Bold", str(font_files[1])))
pdfmetrics.registerFontFamily("Resume", normal="Resume", bold="Resume-Bold")
base = dict(fontName="Resume", fontSize=10, leading=12.4, textColor=colors.black, alignment=TA_LEFT)
styles = {
    "body": ParagraphStyle("Body", **base, spaceAfter=3.5),
    "title": ParagraphStyle("Title", fontName="Resume-Bold", fontSize=20, leading=23, spaceAfter=4),
    "heading": ParagraphStyle("Heading", fontName="Resume-Bold", fontSize=11.5, leading=14, spaceBefore=9, spaceAfter=4, keepWithNext=True),
    "company": ParagraphStyle("Company", fontName="Resume-Bold", fontSize=10, leading=12.4, spaceBefore=6, spaceAfter=3, keepWithNext=True),
    "role": ParagraphStyle("Role", **base, spaceBefore=3, spaceAfter=3, keepWithNext=True),
    "focus": ParagraphStyle("Focus", **base, spaceAfter=3, keepWithNext=True),
    "bullet": ParagraphStyle("Bullet", **base, bulletFontName="Resume", bulletFontSize=10, leftIndent=11, firstLineIndent=0, bulletIndent=1, spaceAfter=3.5),
    "contact": ParagraphStyle("Contact", fontName="Resume", fontSize=9, leading=11.5, spaceAfter=3),
}

story = []
section = ""
for line in SOURCE.read_text().splitlines():
    line = line.strip()
    if not line:
        continue
    if line.startswith("# "):
        story.append(Paragraph(inline(line[2:]), styles["title"]))
    elif line.startswith("## "):
        section = line[3:]
        story.append(Paragraph(inline(section), styles["heading"]))
    elif line.startswith("### "):
        story.append(Paragraph(inline(line[4:]), styles["company"]))
    elif line.startswith("- "):
        story.append(Paragraph(inline(line[2:]), styles["bullet"], bulletText="•"))
    else:
        style = "body"
        if not section:
            if line.startswith("**"):
                style = "role"
            elif "|" not in line and "[" not in line and "@" not in line:
                style = "focus"
            else:
                style = "contact"
        elif section == "Experience" and line.startswith("**"):
            style = "role"
        story.append(Paragraph(inline(line), styles[style]))

page_count = []

def count_page(canvas, doc):
    page_count.append(doc.page)

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
doc = SimpleDocTemplate(str(OUTPUT), pagesize=(8.5 * inch, 11 * inch), rightMargin=38, leftMargin=38,
                        topMargin=30, bottomMargin=30, title="Jesus Rosario Resume", author="Jesus Rosario")
doc.build(story, onFirstPage=count_page, onLaterPages=count_page)
if len(page_count) != 1:
    raise RuntimeError(f"Resume must fit one page; generated {len(page_count)}. Revise content or spacing and render again.")
print(f"Built one-page resume in {font_label}: {OUTPUT}")
