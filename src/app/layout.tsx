
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Husni's Portfolio",
  description: "Junior DevOps engineer portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 antialiased">
        <header className="sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
            <a href="/" className="font-semibold tracking-tight">Mohamed husni</a>
            <nav className="text-sm">
              <a href="#skills" className="opacity-90 hover:opacity-100 mr-6">Skills</a>
              <a href="#projects" className="opacity-90 hover:opacity-100 mr-6">Projects</a>
              <a href="#contact" className="opacity-90 hover:opacity-100">Contact</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">{children}</main>
        <footer className="mt-16 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm opacity-70">
            © {new Date().getFullYear()} Mohamed Husni
          </div>
        </footer>
      </body>
    </html>
  );
}
