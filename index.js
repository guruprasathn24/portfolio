const app = Vue.createApp({
  data() {
    return {
      skills: [
        { 
          name: "Java", 
          icon: "devicon-java-plain colored", 
          level: 85
        },
        { 
          name: "Python", 
          icon: "devicon-python-plain colored", 
          level: 90 
        },
        { 
          name: "HTML", 
          icon: "devicon-html5-plain colored", 
          level: 95 
        },
        { 
          name: "CSS", 
          icon: "devicon-css3-plain colored", 
          level: 90
        },
        { 
          name: "JavaScript", 
          icon: "devicon-javascript-plain colored", 
          level: 85
        },
        { 
          name: "Vue.js", 
          icon: "devicon-vuejs-plain colored", 
          level: 80
        },
        { 
          name: "Bootstrap", 
          icon: "devicon-bootstrap-plain colored", 
          level: 85 
        },
        {
          name: "React.js",
          icon: "devicon-react-original colored",
          level: 70 
        },
        {
          name: "Firebase",
          icon: "devicon-firebase-plain colored",
          level: 65 
        }
      ],
    

  projects: [
      {
        name: "Weather DashBoard",
        image: "weather.png",
        languages: [
          { name: "HTML", icon: "fab fa-html5 text-danger" },
          { name: "CSS", icon: "fab fa-css3-alt text-primary" },
          { name: "JavaScript", icon: "fab fa-js-square text-warning" }
        ],
        preview: "https://guruprasathn24.github.io/WeatherApp/"
      },
      {
        name: "E commerce",
        image: "commerce.png",
        languages: [
          { name: "HTML", icon: "fab fa-html5 text-danger" },
          { name: "CSS", icon: "fab fa-css3-alt text-primary" },
          { name: "Vue.js", icon: "fab fa-vuejs text-success" },
          { name: "Bootstrap", icon: "fab fa-bootstrap text-purple" }
        ],
        preview: "https://guruprasathn24.github.io/autospa/"
      },
            {
        name: "E commerce",
        image: "ecommerce.png",
        languages: [
          { name: "HTML", icon: "fab fa-html5 text-danger" },
          { name: "CSS", icon: "fab fa-css3-alt text-primary" },
          { name: "Vue.js", icon: "fab fa-vuejs text-success" },
          { name: "Bootstrap", icon: "fab fa-bootstrap text-purple" }
        ],
        preview: "https://guruprasathn24.github.io/ecommerce/#/"
      },
      {
      name: "Rock Paper Scissors",
      image: "Rock-Papper.png",
      languages: [
        { name: "HTML", icon: "fab fa-html5 text-danger" },
        { name: "CSS", icon: "fab fa-css3-alt text-primary" },
         { name: "Bootstrap", icon: "fab fa-bootstrap text-purple" }
      ],
         preview: "https://lnkd.in/d65FGr2A"
      },

    ],

           certifications: [
        { 
          name: "Java", 
          icon: "devicon-java-plain colored", 
          quote: "Write once, run anywhere.", 
          issuer: "GreatLearning",
          date: "Jan 2024",
          link: "https://olympus.mygreatlearning.com/courses/12385/certificate?pb_id=581"
        },
        { 
          name: "Python", 
          icon: "devicon-python-plain colored", 
          quote: "Simple is better than complex.", 
          issuer: "Great Learning",
          date: "June 2024",
          link: "https://olympus.mygreatlearning.com/courses/66447/certificate?pb_id=581"
        },
        { 
          name: "HTML", 
          icon: "devicon-html5-plain colored", 
          quote: "The structure of the web.", 
          issuer: "freeCodeCamp",
          date: "May 2024",
          link: "https://olympus.mygreatlearning.com/courses/47911/certificate?pb_id=581"
        },
        { 
          name: "CSS", 
          icon: "devicon-css3-plain colored", 
          quote: "Design is intelligence made visible.", 
          issuer: "HackerRank",
          date: "May 2024",
          link: "https://www.hackerrank.com/certificates/64cc07a77803"
        },
        { 
          name: "JavaScript", 
          icon: "devicon-javascript-plain colored", 
          quote: "Make the web come alive.", 
          issuer: "FreeCodeCamp",
          date: "Jun 2024",
          link: "https://www.freecodecamp.org/certification/fcc0a23179a-6177-482b-9cac-c4eb5386e75d/javascript-algorithms-and-data-structures-v8"
        },
        { 
          name: "Vue.js", 
          icon: "devicon-vuejs-plain colored", 
          quote: "The progressive JavaScript framework.", 
          issuer: "VueMastery",
          date: "Aug 2024",
          link: "#"
        },
        { 
          name: "Bootstrap", 
          icon: "devicon-bootstrap-plain colored", 
          quote: "Build responsive sites quickly.", 
          issuer:"Coursera",
          date: "Sep 2024",
          link: "#"
        },
        {
          name:"React.js",
          icon: "devicon-react-original colored",
          quote: "Build interactive UIs with components.",
          issuer:"Google Cloud",
          date:"Nov 2024",
          link:"#"
        },
        {
          name: "Firebase",
          icon: "devicon-firebase-plain colored",
          quote: "Build and scale apps with backend services.",
          issuer: "Google Cloud",
          date: "Dec 2024",
          link:"#"
        },
        
      ]
    }
  }
});

app.mount("#app");
