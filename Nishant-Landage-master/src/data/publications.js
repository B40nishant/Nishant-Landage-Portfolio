const IMAGES = `assets/images/publications`;

let publications = [
  {
    title:
      "How I started careers and got a developing experience in 10 months, a true story",
    subtitle:
      "This is how I started career in front-end development at my second year, starting with no relevant experience . Using only self-directed study from youtube like platform and spending nothing.",
    image: {
      src: `${IMAGES}/how-i-got.jpeg`,
      alt: "A warm Light bulb and a notepad",
    },
    web_link: `https://www.blogger.com/u/0/blog/post/edit/preview/6578026824616972259/3139239778207117967?pli=1`,
  },
  {
    title: "The tools and resources that landed me a front-end developer job",
    subtitle:
      "Learning front-end development can be a bit overwhelming at times. There are so many resources and tools, and so little time. What should you pick? And what should you focus on?",
    image: {
      src: `${IMAGES}/tools-resources.jpeg`,
      alt: "An open book",
    },
    web_link: `https://medium.com/free-code-camp/the-tools-and-resources-that-landed-me-a-front-end-developer-job-1314c6f1fa7f`,
  }
  
];

export default publications;
