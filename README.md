# Jesus Rosario Personal Portfolio

A modern, responsive personal portfolio website built with Next.js.

Live Demo: [https://jessusdev.com](https://jessusdev.com)

## Features

- **Responsive Design**: Optimized for all devices
- **Dark/Light Theme**: Toggle between themes
- **Interactive Sections**: Hero, About, Skills, Projects, Experience, Education, Contact
- **Contact Form**: Integrated contact form for inquiries
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel/Netlify

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jessur2030/personal-portfolio.git
   cd personal-portfolio
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
# or
npm run build
npm start
```

## Customization

To use this portfolio for yourself:

1. Update the content in the components (e.g., `hero-section.tsx`, `projects-section.tsx`)
2. Replace personal information, images, and links
3. Customize the theme colors in `globals.css` or Tailwind config
4. Update the resume PDF in `public/`

## Project Structure

```
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── ...             # Section components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets
└── styles/             # Global styles
```

## Contributing

Feel free to fork this repository and customize it for your own use. If you find any issues or have suggestions, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).