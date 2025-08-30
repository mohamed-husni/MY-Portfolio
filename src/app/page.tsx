// app/page.tsx
import type { Metadata } from "next";
 import Image from "next/image";

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
            {
              title: "CI/CD",
              items: [
                "GitHub Actions",
                "Netlify Deployments",
                "Caching & Build Optimization",
                "Preview Deploys",
              ],
            },
            {
              title: "Containers",
              items: [
                "Dockerfiles",
                "Docker Compose",
                "Image Scanning",
                "Container Security",
              ],
            },
            {
              title: "Cloud",
              items: [
                "AWS (EC2, S3, IAM, CodePipeline)",
                "CloudFront & CDN Setup",
                "Basic Cost Optimization",
              ],
            },
            {
              title: "Infrastructure as Code (IaC)",
              items: [
                "Terraform (init/plan/apply)",
                "Remote State Management",
                "Least-Privilege IAM Policies",
              ],
            },
            {
              title: "Frontend / Frameworks",
              items: [
                "Next.js (App Router)",
                "React + Tailwind",
                "TypeScript",
                "Netlify Hosting",
              ],
            },
            {
              title: "Version Control & Scripting",
              items: [
                "Git & GitHub",
                "Branching / PR Workflow",
                "Bash Scripting",
                "YAML Fluency",
              ],
            },
            {
              title: "Observability",
              items: [
                "Logging & Monitoring",
                "Metrics & Alerts",
                "Basic Troubleshooting",
              ],
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="font-semibold">{card.title}</div>
              <ul className="mt-3 text-sm text-slate-300 space-y-1">
                {card.items.map((it) => (
                  <li key={it}>• {it}</li>
                ))}
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
        name: "AWS CI/CD Pipeline",
        desc: "Designed a CI/CD pipeline on AWS for a Java Maven web app using GitHub, CodeBuild, CodeDeploy, and CodePipeline.",
        img: "/projects/aws-color.webp",
        link: "https://github.com/mohamed-husni/DevOps-project01.git", // replace with repo link
      },
      {
        name: "SmartAdMaker – AI Poster Generator",
        desc: "Fine-tuned Stable Diffusion with LoRA to generate advertisements. Built a React + Tailwind web app for input, display, and editing.",
        img: "/projects/Screenshot 2024-10-16 121538.png",
        link: "https://github.com/mohamed-husni/SmartAdMaker.git",
      },
      {
        name: "MongoDB App – Lanka Milk Foods",
        desc: "Full-stack app with Node.js & React to manage employee, product, and distribution data using MongoDB.",
        img: "/projects/Screenshot 2024-10-07 201114.png",
        link: "https://github.com/mohamed-husni/MongoDB-App-Lanka-Milk-Foods.git",
      },
      {
        name: "Power BI Dashboard",
        desc: "Built dashboards for a global bicycle spare parts distributor, transforming raw data into KPIs for decision-making.",
        img: "/projects/Screenshot 2024-02-12 133507.png",
        
      },
      {
        name: "Alfie Pet Shop Web App",
        desc: "E-commerce platform built with Vue.js & Tailwind, later migrated to WordPress with shopping cart & authentication.",
        img: "/projects/Screenshot 2024-10-04 105908.png",
        link: "https://github.com/mohamed-husni",
      },
    ].map((p) => (
      <a
        key={p.name}
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition block"
      >
        <div className="relative w-full h-40 rounded-lg overflow-hidden">
          <Image
            src={p.img}
            alt={p.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="mt-4 font-semibold">{p.name}</div>
        <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
      </a>
    ))}
  </div>
</section>


      {/* Contact */}
      <section id="contact">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-slate-500">
            Email: <a className="underline" href="mailto:husnishafeer@gmail.com">husnishafeer@gmail.com</a> ·
            GitHub: <a className="underline" href="https://github.com/mohamed-husni">github.com/mohamed-husni</a> ·
            LinkedIn: <a className="underline" href="https://www.linkedin.com/in/mohamed-husni-15089522a/">Mohamed Husni</a>
          </p>
        </div>
      </section>
    </div>
  );
}
