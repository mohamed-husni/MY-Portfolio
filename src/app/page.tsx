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
          <div className="lg:col-span-2 text-center lg:text-left">
            {/* Name */}
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">
              Mohamed Husni
            </h1>

            {/* Job Title */}
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-300 tracking-wide">
              SOFTWARE ENGINEER <span className="text-indigo-400">|</span> DEVOPS ENTHUSIAST
            </h2>

            {/* Summary */}
            <p className="mt-6 text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Motivated Software Engineer with a strong foundation in full-stack development and a growing specialization in DevOps practices.
              Experienced in building scalable web applications, fine-tuning AI models, and deploying systems on cloud platforms.
              Skilled in bridging the gap between development and infrastructure automation, capable of delivering projects from design to deployment.
              Seeking a Software Engineer Internship to apply technical expertise, collaborate with teams, and contribute to real-world solutions.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/Husni_DevOps_Intern.pdf"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                📄 Download Resume
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                🚀 See Projects
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
              github: "https://github.com/mohamed-husni/DevOps-project01.git",
            },
            {
              name: "SmartAdMaker – AI Poster Generator",
              desc: "Fine-tuned Stable Diffusion with LoRA to generate advertisements. Built a React + Tailwind web app for input, display, and editing.",
              img: "/projects/Screenshot 2024-10-16 121538.png",
              github: "https://github.com/mohamed-husni/SmartAdMaker.git",
              live: "https://smart-ad-maker.vercel.app/",
            },
            {
              name: "MongoDB App – Lanka Milk Foods",
              desc: "Full-stack app with Node.js & React to manage employee, product, and distribution data using MongoDB.",
              img: "/projects/Screenshot 2024-10-07 201114.png",
              github: "https://github.com/mohamed-husni/MongoDB-App-Lanka-Milk-Foods.git",
            },
            {
              name: "Power BI Dashboard",
              desc: "Built dashboards for a global bicycle spare parts distributor, transforming raw data into KPIs for decision-making.",
              img: "/projects/Screenshot 2024-02-12 133507.png",
              github: null, // no repo link
            },
            {
              name: "Alfie Pet Shop Web App",
              desc: "E-commerce platform built with Vue.js & Tailwind, later migrated to WordPress with shopping cart & authentication.",
              img: "/projects/Screenshot 2024-10-04 105908.png",
              github: null,
            },
          ].map((p) => (
            <div
              key={p.name}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition flex flex-col"
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
              <p className="mt-2 text-sm text-slate-300 flex-grow">{p.desc}</p>

              {/* Buttons Section */}
              <div className="mt-4 flex gap-3">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg shadow transition"
                  >
                    Live Demo
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-gray-800 hover:bg-gray-900 text-white text-sm rounded-lg shadow transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* Contact */}
      <section id="contact" className="py-12 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-slate-400 mb-8">
            Feel free to reach out via email or connect with me on GitHub and LinkedIn.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {/* Email */}
            <a
              href="mailto:husnishafeer@gmail.com"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.25 6.75v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75zM4.5 6.75L12 12l7.5-5.25" />
              </svg>
              <span>Email Me</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/mohamed-husni"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.486 2 12.021c0 4.428 2.867 8.184 6.839 9.504.5.092.682-.217.682-.482 
          0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.465-1.11-1.465-.907-.62.069-.608.069-.608 
          1.002.071 1.529 1.03 1.529 1.03.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.112-4.555-4.944 
          0-1.091.39-1.984 1.029-2.682-.103-.254-.446-1.274.098-2.655 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.851.004 
          1.707.115 2.504.338 1.909-1.296 2.747-1.026 2.747-1.026.545 1.381.202 2.401.1 2.655.64.698 
          1.027 1.591 1.027 2.682 0 3.841-2.338 4.687-4.566 4.935.359.309.678.92.678 1.855 
          0 1.338-.012 2.418-.012 2.744 0 .268.18.578.688.48A10.021 10.021 0 0022 12.021C22 6.486 17.523 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mohamed-husni-15089522a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14C2.243 0 0 2.243 0 5v14c0 
          2.757 2.243 5 5 5h14c2.757 0 5-2.243 
          5-5V5c0-2.757-2.243-5-5-5zM7.25 20.452h-3.5V9h3.5v11.452zM5.5 
          7.432a2.032 2.032 0 110-4.064 2.032 2.032 0 010 4.064zM20.452 
          20.452h-3.5v-5.569c0-1.327-.027-3.037-1.852-3.037-1.853 
          0-2.137 1.445-2.137 2.939v5.667h-3.5V9h3.361v1.561h.048c.468-.888 
          1.611-1.823 3.317-1.823 3.547 0 4.212 2.335 4.212 5.368v6.346z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
