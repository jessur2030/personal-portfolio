import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { profile } from "@/lib/profile";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: {
    default: `${profile.name} | ${profile.title} — ${profile.focus}`,
    template: `%s | ${profile.name}`,
  },
  description: "Lead Software Engineer focused on backend systems, databases, and AWS infrastructure, with hands-on React and Next.js experience. Explore my work on GovQuest 2.0.",
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: "Backend systems, databases, and cloud infrastructure. Architecture and technical leadership on GovQuest 2.0.",
    url: profile.site,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main-content" className="sr-only fixed left-4 top-4 z-[100] rounded-md bg-background px-4 py-3 font-medium shadow-lg focus:not-sr-only">Skip to content</a>
          <Header />
          <main id="main-content" tabIndex={-1} className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
