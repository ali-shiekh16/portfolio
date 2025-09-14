import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Muhammed",
  lastName: "Ali",
  displayName: "Muhammed Ali",
  username: "aleee",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Senior @ FAST NUCES       ",
    "Freelancer           ",
    "Full-stack Developer            ",
  ],
  address: "Karachi, Pakistan",
  phoneNumber: "KzkyMzE3MjI3NTY5OA==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "YWxpLnNoaWVraDE2QG91dGxvb2suY29t", // base64 encoded
  website: "https://aleee.tech",
  jobTitle: "Full Stack Developer",
  jobs: [
    {
      // title: "Senior Frontend Developer & UI Design Lead",
      title: "Freelance Full Stack Developer",
      company: "Freelance",
      // website: "https://simplamo.com?ref=IN-926722",
    },
    // {
    //   title: "Founder",
    //   company: "Quaric",
    //   website: "https://quaric.com",
    // },
  ],
  about: `
Hello world! I’m Ali — a Full-Stack Web Developer passionate about building scalable, high-performance applications and pushing the boundaries of interactive web experiences.  

I specialize in **Next.js, NestJS, Express.js, and TypeScript**, with experience delivering end-to-end solutions across a variety of industries. My work includes full-stack applications such as e-commerce platforms, marketplaces, and business-critical web systems.  

Alongside traditional development, I also explore the creative side of the web using **React Three Fiber, WebGL, and interactive front-end technologies**, building projects such as:  
- Particle animations and advanced visual effects  
- Real-time product configurators  
- 3D interactive graphs and data visualizations  
- and more

My focus is on writing clean, maintainable code and delivering reliable, scalable solutions that create real impact. I’m always learning, experimenting, and expanding my expertise to stay at the forefront of modern web development.  
`,
  avatar: "/images/dp.png",
  ogImage: "",
  // "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1755355653",
  namePronunciationUrl: "/audio/name.mp3",
  keywords: [
    "muhammedali",
    "muhammed ali",
    "ali muhammed",
    "alee",
    "alee.live",
    "iamalee",
    "muhammedalee",
    "ali.dev",
    "full stack developer",
    "muhammed ali developer",
    "muhammed ali portfolio",
    "muhammed ali web developer",
  ],

  dateCreated: "2025-09-10", // YYYY-MM-DD
};
