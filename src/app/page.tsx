// app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Husni Shafeer | Portfolio",
  description: "Personal portfolio of Husni Shafeer - Software Engineer & DevOps Enthusiast.",
  keywords: "husni, shafeer, portfolio, AI, developer, sri lanka, software engineer, DevOps engineer",
  authors: [{ name: "Husni Shafeer" }],
  openGraph: {
    title: "Husni Shafeer | Portfolio",
    description: "Showcasing projects and skills of Husni Shafeer.",
    url: "https://husnishafeer.netlify.app",
    siteName: "Husni Shafeer",
    images: [
      {
        url: "https://husnishafeer.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Husni Shafeer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};



export default function HomePage() {
  return (
    
    <div className="space-y-16">
      {/* Hero */}
      

      <section className="pt-6">
  <div className="grid gap-6 lg:grid-cols-3 items-center">
    {/* Left side: text */}
    <div className="lg:col-span-2">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
        Aspiring DevOps Engineer
      </h1>
      <p className="mt-4 text-slate-300 leading-relaxed">
        I design CI/CD pipelines, automate infrastructure, and improve developer workflows.
        Currently seeking an internship where I can ship reliable systems and learn from a great team.
      </p>
      <div className="mt-6 flex gap-3">
        <a
          href="/Husni_DevOps_Intern.pdf"
          className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/15 transition"
        >
          Download Resume
        </a>
        <a
          href="#projects"
          className="px-4 py-2 rounded-lg bg-indigo-500/90 hover:bg-indigo-500 transition"
        >
          See Projects
        </a>
      </div>
    </div>

    {/* Right side: image */}
    <div className="flex justify-center lg:justify-end">
      <img
        src="/profile.jpeg"
        alt="Husni Shafeer"
        className="rounded-full w-50 h-50 border-4 border-indigo-500/50 shadow-lg"
      />
    </div>
  </div>
</section>


      {/* Skills */}
      <section id="skills">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "CI/CD", items: ["GitHub Actions", "Netlify", "Caching", "Preview deploys"] },
            { title: "Containers", items: ["Dockerfiles", "Compose", "Image scanning"] },
            { title: "Cloud", items: ["AWS basics", "S3/CloudFront", "IAM least-privilege"] },
            { title: "IaC", items: ["Terraform init/plan/apply", "Remote state"] },
            { title: "Observability", items: ["Logging", "Metrics", "Alerts"] },
            { title: "Scripting", items: ["Bash", "Node scripts", "YAML fluency"] },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="font-semibold">{card.title}</div>
              <ul className="mt-3 text-sm text-slate-300 space-y-1">
                {card.items.map((it) => <li key={it}>• {it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Portfolio CI/CD",
              desc: "Next.js + Tailwind deployed to Netlify with preview PRs and protected main.",
              link: "https://your-netlify-site.netlify.app",
            },
            {
              name: "Dockerized App",
              desc: "Containerized React app, multi-stage build, pushed to GHCR.",
              link: "https://github.com/you/dockerized-app",
            },
            {
              name: "Terraform Demo",
              desc: "Static site on S3 + CloudFront, remote state, least-privilege IAM.",
              link: "https://github.com/you/terraform-s3-cf",
            },
          ].map((p) => (
            <a
              key={p.name}
              href={p.link}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition block"
            >
              <div className="flex items-center justify-between">
                <div className="font-semibold">{p.name}</div>
                <span className="text-xs opacity-70 group-hover:opacity-100">View →</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-slate-300">
            Email: <a className="underline" href="mailto:husnishafeer@gmail.com">husnishafeer@gmail.com</a> ·
            GitHub: <a className="underline" href="https://github.com/mohamed-husni">github.com/mohamed-husni</a> ·
            LinkedIn: <a className="underline" href="https://www.linkedin.com/in/mohamed-husni-15089522a/">Mohamed Husni</a>
          </p>
        </div>
      </section>
    </div>
  );
}
