import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Muhammed",
  lastName: "Ali",
  displayName: "Muhammed Ali",
  username: "aleee",
  gender: "male",
  pronouns: "he/him",
  bio: "Software & AI Engineer — building production APIs, ML infra, and scalable cloud systems.",
  flipSentences: [
    "Backend Engineer · API & ML Infra",
    "AI Engineer · FastAPI, LangChain",
    "Systems & Cloud (GCP)",
  ],
  address: "Karachi, Pakistan",
  phoneNumber: "KzkyMzE3MjI3NTY5OA==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "YWxpLnNoaWVraDE2QG91dGxvb2suY29t", // base64 encoded
  website: "https://aleee.tech",
  jobTitle: "Software & AI Engineer ",
  jobs: [
    {
      title: "Software Engineer",
      company: "AI First Partners",
      website: "https://aifirstpartners.com",
    },
  ],
  about: `
I build backend systems and ML-enabled services that power production applications. My work focuses on API design, scalable microservices, data pipelines, and reliable inference/serving layers that meet business SLAs.

Core strengths include designing resilient FastAPI and Node.js services, integrating vector search (Pinecone) and retrieval-augmented generation (RAG) pipelines with LangChain/LangGraph, and deploying inference and API workloads on Google Cloud (Cloud Run, Cloud Build, Artifact Registry, GCS).

I prioritize observability, security, and automation: automated CI/CD, containerized deployments, structured logging, monitoring, and rigorous testing to reduce downtime and accelerate safe releases. I collaborate closely with product and data teams to translate ML prototypes into production-ready systems.

Technical highlights:
- Backend: FastAPI, Nest.js, TypeScript, Python
- ML / AI infra: LangChain, LangGraph, RAG, Pinecone, embeddings, inference orchestration
- Cloud & infra: Google Cloud Platform (VMs, Cloud Run, GCS, Cloud Build, Triggers), Docker, Kubernetes, Terraform, AWS (S3, EC2, Lambda, VPC) 
- DevOps & quality: CI/CD (Github Actions), automated testing, observability (logs/metrics/tracing), secure access controls

I enjoy mentoring engineers, improving engineering processes, and delivering measurable improvements in reliability and performance.
`,
  avatar: "/images/dp.png",
  ogImage: "",
  // "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1755355653",
  namePronunciationUrl: "/audio/name.mp3",
  keywords: [
    "muhammedali",
    "backend engineer",
    "ai engineer",
    "ml infra",
    "fastapi",
    "langchain",
    "pinecone",
    "gcp",
    "cloud run",
    "ci/cd",
    "python",
    "typescript",
    "next.js",
  ],

  dateCreated: "2026-02-08", // YYYY-MM-DD
};
