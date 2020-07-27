
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sebastjan mevlja",
  title: "Hi all, I'm Sebastjan",
  subTitle: emoji("A Computer Science student & passionate Software Developer 🚀 based in Slovenia."),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/mevljas",
  linkedin: "https://www.linkedin.com/in/sebastjan-mevlja-5563851b3/",
  facebook: "https://www.facebook.com/sebastjan.mevlja",
  instagram: "https://www.instagram.com/sebastjan_mevlja/",
  twitter: "https://twitter.com/sebastjan99",
  gmail: "sm9299@student.uni-lj.si"
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "I am an ambitious and energetic student, who commits a lot of his time, learning new upcoming technologies. I have studied in numerous fields of coding including web and android development, microcontroller hardware and game development. As a high school student, I was introduced to Mobile Game Development which grabbed my interest instantly and I've been dedicated to exploring this vast field ever since. In my free time, I like to learn new things, program, travel, read books and ride my motorcycle. Besides studying for the university, I'm learning to develop Web and Android games.",
  skills: [
    emoji("⚡ Develop web and mobile applications"),
    emoji("⚡ Desktop Java & Python applications"),
    emoji("⚡ Software testing & quality")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    }
    ,
    {
      skillName: "Arduino",
      fontAwesomeClassname: "fas fa-microchip"
    }
    ,
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    }
    ,
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    }
    ,
    {
      skillName: "Vagrant",
      fontAwesomeClassname: "fab fa-vuejs"
    }
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java & Python",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Web development",
      progressPercentage: "70%"
    },
    {
      Stack: "Android",
      progressPercentage: "60%"
    }
  ]
};


// Your education

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Faculty of Computer and Information Science Ljubljana",  
      company: "University",
      companylogo: require("./assets/images/fri.png"),
      date: "October 2018 – Present",
      desc: "Emphasis on superlative technical knowledge and acquisition of fundamental theoretical as well as practical knowledge in the field of computer and information science.",
      descBullets: [
        "Programing languages: Java, Javascript, Python, PHP, C & R",
        "HTML5 & CSS3",
        "MySQL",
        "Web development",
        "Android app development",
        "ARM microcontroller development",
        "Linux",
        "Vagrant",
        "Docker",
        "Kubernetes",
        "WebGL",
        "GTK",
        "Software testing & quality",
        "User interfaces",
        "Artificial intelligence",
        "Algorithms and data structures",
        "Computer communications",
        "Operating-Systems",
        "Graphic design",
        "Communication protocols and network security",
        "Computer graphics",
        "Statistics"  
      ]
    },
    {
      role: "Electrotechnical and Computer School Nova Gorica",   
      company: "High school",
      companylogo: require("./assets/images/ers.png"),
      date: "September 2014 – June 2018",
      desc: "A computer technician knows the basic elements of software, rules for writing programs and basic knowledge of syntax and semantics in writing programs, and is also qualified to manage information equipment.",
      descBullets: [
        "Programing languages: Java, Javascript & PHP",
        "HTML & CSS",
        "Oracle SQL & MySQL",
        "Oracle Forms",
        "Web development",
        "Android app development",
        "Hardware & Software management",
        "Motorola microcontroller development",
        "Linux & Windows server management",
        "Powershell",
        "Computer communications",
        "Electrical knowledge"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "mevljas", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "sm9299@student.uni-lj.si"
};


export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, contactInfo};
