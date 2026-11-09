# Jesus Rosario Personal Portfolio

Portfolio for Jesus Rosario, Lead Software Engineer focused on backend systems, databases, and cloud infrastructure, with hands-on frontend experience.

Public site: [jessusdev.com](https://jessusdev.com). Local changes appear there after deployment.

## Development

Built with Next.js 16, React 19, Tailwind CSS, and shadcn/ui components. Use Node.js 20.9 or newer and pnpm.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed by Next.js. The homepage links to the GovQuest engineering case study at `/work/govquest`. A separate open-source area features [StructFlow](https://github.com/jessur2030/structflow) and a compact [Aura Noir](https://github.com/jessur2030/aura-noir-theme) entry. The StructFlow preview uses the project's annotated JSON viewer store image (`store-assets/annotated/inpage-json-03-annotated.png`), copied to `public/projects/structflow-json-annotated.png`. The full image retains its original aspect ratio; it contains sample JSON data. All project links lead to the verified public source or store listing, without adoption counters.

## Validation

```bash
pnpm typecheck
pnpm test:contact
pnpm build
```

The contact tests use mock responses and send no email. They cover confirmed success, HTTP errors, service rejection, malformed responses, and network failures. Live email delivery needs a separate authorized check. No ESLint configuration is installed in this repository; the legacy `next lint` command does not work with Next.js 16.

## Career content and resume

- `lib/profile.ts`: shared identity, links, role, and supplied product reach.
- `content/resume.md`: editable source for the downloadable resume, using career facts maintained in the private `career-ops/resume/resume.md` master. Update confirmed facts in career-ops before adapting the public version.
- `scripts/build_resume.py`: generates a one-page PDF with embedded fonts and selectable text.
- `scripts/build_resume_docx.py`: generates an editable Word companion from the same public resume source; pass `--output` to choose its destination.
- `public/jesus-rosario-resume.pdf`: the resume served by every download link.
- `app/work/govquest/page.tsx`: professional case study based on confirmed contributions.

To rebuild the resume with [uv](https://docs.astral.sh/uv/):

```bash
uv run --with reportlab==5.0.1 python scripts/build_resume.py
```

To rebuild the Word companion in a sibling career-ops checkout:

```bash
uv run --with python-docx==1.2.0 python scripts/build_resume_docx.py --output ../career-ops/resume/jesus-rosario-resume.docx
```

Render and visually check the Word document after rebuilding. The PDF and DOCX share `content/resume.md` for wording; the detailed private master remains the source of career facts.

One current resume is used for applications and the portfolio download. The matching source and exports in career-ops are `resume/jesus-rosario-resume.md`, `.pdf`, and `.docx`. Keep `content/resume.md` in sync with that concise source; the detailed `career-ops/resume/resume.md` remains the authority for career facts. The shared resume includes the approved 77% file-storage cost reduction and about 50% developer onboarding-time reduction. Previous public/application variants are archived in career-ops rather than maintained separately.

Both builders also accept `--source` and `--output`. To export the matching career-ops PDF:

```bash
uv run --with reportlab==5.0.1 python scripts/build_resume.py --output ../career-ops/resume/jesus-rosario-resume.pdf
```

Render and visually inspect the PDF after editing; also check text extraction, links, and the file served by the site. The original materials in the ignored `jesus-temp-folder` remain reference inputs.

Keep the resume template in `scripts/build_resume.py` to one column with standard section headings, ordinary text bullets, and contact details in the document body. Avoid layout tables, sidebars, text boxes, skill charts, and image-based text. Both body text and bullets use embedded fonts with Unicode mappings. After exporting, verify that plain-text extraction preserves all source content in reading order and contains no unexpected control characters. The generator also enforces the one-page limit. These checks support parsing compatibility; they do not certify behavior in every ATS.

The current resume uses Summary, Technical Skills, Experience, and Education and Training in that order. The summary foregrounds the GovQuest modernization and technical leadership; the experience bullets provide the supporting details and selected metrics.

Current public positioning is **Lead Software Engineer | Backend Systems & Cloud Infrastructure**. Keep employment titles and dates consistent across the site and resume. The public site and downloadable resume emphasize personal ownership, technical decisions, and team leadership. Geographic reach is described as agencies across more than 30 U.S. states, as approved by Jesus. Exact team size, customer counts, operational and compliance milestones, external compliance partners, and internal financial reporting stay out of public materials. The two approved resume percentages are an exception: 77% lower file-storage costs and about 50% less developer onboarding time. Other private metrics are not automatically approved for publication. Keep fuller evidence in private career-ops and review it before adapting an application or interview answer. Public payment copy covers request payments, refunds, and custom PDF invoicing. Describe implemented event and relative-time automation without implying calendar-based recurrence has shipped.

## Contact

Direct email and LinkedIn links are available alongside the existing FormSubmit integration. JavaScript submissions use its AJAX endpoint and show delivery confirmation or an error that preserves entered text. The native form action remains available when JavaScript is disabled.

## License

[Apache License 2.0](LICENSE).
