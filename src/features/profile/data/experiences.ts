import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "ai-first-partners",
    companyName: "AI First Partners",
    positions: [
      {
        id: "software-engineer",
        title: "Software Engineer",
        employmentPeriod: {
          start: "2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Building and maintaining full-stack systems using FastAPI and Next.js.
- Architected and maintained production-grade full‑stack systems with FastAPI backends and Next.js frontends, improving delivery velocity and reliability.
- Designed, developed, and deployed AI-powered voice agents using Pipecat and Groq for real‑time conversational experiences.
- Created a fully autonomous content agent with LangChain and LangGraph that generates SEO‑optimized blog content and automates daily publishing workflows.
- Built scalable, cost‑aware infrastructure on Google Cloud (GCP), leveraging Cloud Run, Cloud Build, Artifact Registry, and regional storage to support growth.
- Implemented automated CI/CD pipelines using Cloud Build, Docker images, build triggers, and Artifact Registry to accelerate safe releases.
- Established robust data and asset management with Google Cloud Storage (GCS), including lifecycle policies and secure access controls.`,
        skills: [
          "Autonomous AI Agents",
          "Real-time Voice Agents",
          "Pipecat",
          "Google Cloud Platform (GCP)",
          "Langchain",
          "Langgraph",
          "Python",
          "RAG",
          "Human-in-the-loop Systems",
          "FastAPI",
          "Pinecone",
          "TypeScript",
          "Next.js",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },

  {
    id: "freelance",
    companyName: "Freelance Developer",
    positions: [
      {
        id: "freelance-web-dev",
        title: "Full-stack Web Developer",
        employmentPeriod: {
          start: "2023",
        },
        employmentType: "Freelance",
        icon: "code",
        description: `- Built multiple web applications including e-commerce platforms with payment integration and inventory management.
- Delivered 10+ production web applications for clients, including e-commerce (Stripe/PayPal) and marketplace platforms, focusing on conversion and reliability.
- Built scalable backends and APIs with Node.js/Express and FastAPI, and modern frontends with React/Next.js and Tailwind for high-performance UX.
- Implemented real-time functionality (Socket.IO) and data visualizations to support analytics and interactive dashboards.
- Integrated secure payment flows, inventory management, and third-party services to meet business requirements.
- Developed immersive 3D experiences and product configurators using Three.js/WebGL to increase engagement and demos-to-sales.
- Optimized cross-device performance, accessibility, and SEO; provided ongoing maintenance, CI/CD, and client handoffs with documentation.`,
        skills: [
          "React",
          "Next.js",
          "Node.js",
          "TypeScript",
          "JavaScript",
          "Three.js",
          "WebGL",
          "Express.js",
          "MongoDB",
          "PostgreSQL",
          "Firebase",
          "Stripe",
          "PayPal",
          "Socket.IO",
          "Tailwind CSS",
          "CSS3",
          "HTML5",
          "AI Integration",
          "3D Graphics",
          "Animation",
          "E-commerce",
          "Problem-solving",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "govt-polytechnic",
    companyName: "Government Polytechnic Institute",
    positions: [
      {
        id: "polytechnic-instructor",
        title: "Instructor",
        employmentPeriod: {
          start: "2022",
          end: "2024",
        },
        employmentType: "Full-time",
        icon: "education",
        description: `- Designed and delivered applied curricula in Object-Oriented Programming, Database Systems, and Web Development to align with industry expectations.
- Created hands-on lab exercises, assessments, and capstone projects that emphasized practical skills using Java, C++, and Python.
- Mentored student teams on real-world projects, improving technical problem-solving and project delivery.
- Collaborated with faculty to update course materials, introduce modern web frameworks, and incorporate industry best practices.
- Assessed and reported on student performance, providing targeted feedback to boost learning outcomes and employability.`,
        skills: [
          "Teaching",
          "Curriculum Development",
          "Object Oriented Programming",
          "Database Management",
          "Web Development",
          "Programming Fundamentals",
          "SQL",
          "Java",
          "C++",
          "Python",
          "HTML",
          "CSS",
          "JavaScript",
          "Student Mentoring",
          "Technical Training",
          "Communication",
          "Leadership",
        ],
        isExpanded: false,
      },
    ],
  },
];
