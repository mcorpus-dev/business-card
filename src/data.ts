export default {
  name: "Marc Corpus",
  email: "mcorpus.dev@gmail.com",
  designation: "Software Engineer",
  socials: {
    github: "https://github.com/mcorpus-dev",
    linkedin: "https://www.linkedin.com",
    website: "https://www.google.com",
  },
  bio: "I'm a passionate software engineer dedicated to crafting innovative, high-quality solutions. With a focus on clean code, efficiency, and user experience, I design and build applications that solve real-world challenges.",
  projects: [
    { name: "Tomato", thumbnail: require("../assets/projects/project1.png") },
    {
      name: "Flickster",
      thumbnail: require("../assets/projects/project2.png"),
    },
    { name: "Noter", thumbnail: require("../assets/projects/project3.png") },
    { name: "WhatsApp", thumbnail: require("../assets/projects/project4.png") },
    { name: "Foodie", thumbnail: require("../assets/projects/project5.png") },
    { name: "Songvox", thumbnail: require("../assets/projects/project6.png") },
  ],
};
