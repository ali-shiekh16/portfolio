import type { Education } from "../types/education";

export const EDUCATION: Education = [
  {
    id: "fast-nuces-bs",
    institutionName: "FAST NUCES, Karachi, Pakistan",
    degree: "Bachelor of Science in Computer Science",
    fieldOfStudy: "Computer Science",
    period: {
      start: "08.2022",
      end: "06.2026",
    },
    icon: "graduation",
    description: `Pursuing BSc in Computer Science with a strong focus on systems, algorithms, and software engineering. Relevant coursework includes Data Structures & Algorithms, Operating Systems, Databases, Computer Networks, Software Engineering, Machine Learning, and Cloud Computing.
- Designed and delivered team projects building APIs, data pipelines, and cloud-deployed services.
- Focused on backend architecture, scalable services, and production readiness: testing, CI/CD, and monitoring.
- Active in programming competitions and departmental tech initiatives.`,
    achievements: [
      "Dean's List student",
      "Programming Competition Participant",
      "Capstone & Team Projects in Web/ML systems",
      "Active Member of Computer Science Society",
    ],
    isExpanded: true,
    isCurrent: false,
  },
];
