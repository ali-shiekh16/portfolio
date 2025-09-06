import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
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
- Developed activity marketplace platforms connecting service providers with customers.
- Created professional business websites with modern designs and responsive layouts.
- Designed and developed creative and 3D websites for immersive user experiences.
- Built interactive product configurators allowing real-time customization and visualization.
- Created particle animation systems with interactive elements and physics-based behaviors.
- Developed ORB systems that react to AI voice input with dynamic visual feedback.
- Implemented interactive real-time graph visualizations for data analytics dashboards.
- Ensured mobile responsiveness and cross-browser compatibility across all projects.`,
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
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
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
        description: `- Taught Object Oriented Programming covering concepts like inheritance, polymorphism, encapsulation, and abstraction.
- Instructed Database Management Systems including SQL, database design, normalization, and RDBMS concepts.
- Delivered Web Application Development courses covering HTML, CSS, JavaScript, and modern web frameworks.
- Taught Fundamentals of Programming introducing students to programming logic, algorithms, and problem-solving techniques.
- Developed comprehensive curriculum and course materials for technical subjects.
- Mentored students in practical projects and assignments to enhance their technical skills.
- Conducted laboratory sessions and hands-on programming exercises.
- Evaluated student performance through assignments, projects, and examinations.`,
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
        isExpanded: true,
      },
    ],
  },
];
