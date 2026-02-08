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
    isCurrent: true,
  },
  {
    id: "aisha-bawany-hsc",
    institutionName: "Aisha Bawany College",
    degree: "Higher Secondary Certificate (HSC)",
    fieldOfStudy: "Science General (Computer Science)",
    period: {
      start: "2020",
      end: "2022",
    },
    grade: "A1+ Grade",
    icon: "education",
    description: `Completed intermediate education with specialization in Computer Science. Built a strong foundation in mathematics, problem solving, and core programming fundamentals relevant to software engineering.`,
    achievements: [
      "A1+ Grade Achievement",
      "Ranked among top 20 ",
      "Academic Excellence Award",
    ],
    isExpanded: false,
  },
  {
    id: "aptech-diploma",
    institutionName: "Aptech Pakistan",
    degree: "Diploma in Software Engineering",
    fieldOfStudy: "Software Engineering",
    period: {
      start: "08.2017",
      end: "08.2020",
    },
    icon: "certificate",
    description: `Diploma focused on practical software engineering fundamentals and applied development.
- Core skills: Java, C#, JavaScript, HTML/CSS, and SQL.
- Covered web and desktop application development, DB design, testing, and software lifecycle practices.
- Completed hands-on projects that emphasized deliverable quality and engineering discipline.`,
    achievements: [
      "Outstanding Performance Certificate",
      "Best Project Award",
      "Industry-Ready Certification",
    ],
    isExpanded: false,
  },
  {
    id: "falcon-school-ssc",
    institutionName: "Falcon School, Karachi, Pakistan",
    degree: "Secondary School Certificate (SSC)",
    fieldOfStudy: "Computer Science",
    period: {
      start: "2018",
      end: "2020",
    },
    grade: "A1 Grade",
    icon: "education",
    description: `Completed secondary education with focus on Computer Science fundamentals.
- Strong foundation in mathematics and science subjects
- Introduction to computer programming and basic concepts
- Developed logical thinking and problem-solving skills
- Participated in various academic competitions and activities`,
    achievements: [
      "A1 Grade Achievement",
      "Computer Science Excellence",
      "Academic Merit Award",
      "Outstanding Student Recognition",
    ],
  },
];
