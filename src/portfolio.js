/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Manojkumar Chandrasekar | Personal Portfolio ",
  description:
    "Founder of Fresh Spar Technologies. I'm a Full Stack Developer, Digital Marketer, Business Analyst",
  og: {
    title: "Manojkumar Chandrasekar | Personal Portfolio ",
    type: "website",
    url: "/",
  },
};

//Home Page
const greeting = {
  title: "Manojkumar C",
  logo_name: "ManojKumar",
  nickname: "manojkumar_c",
  subTitle: "Full Stack Developer , Digital Marketer, Cloud & DevOps Engr",
  resumeLink: "/resume/Manojkumar_C_Full_Stack_Dev.pdf",
  portfolio_repository: "https://github.com/Manoj-kumar-C",
  githubProfile: "https://github.com/Manoj-kumar-C",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/manoj-chandran",
  // linkedin: "https://www.linkedin.com/in/manoj--chandran/",
  // gmail: "contact.manojchandran@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Manoj-kumar-C",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/manojkumar--c/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@Manojkumar_C",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:contact.manojchandran@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/manoj_kumar__c",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/manojkumarcfb/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Linktree",
    link: "https://linktr.ee/manojkumar_c",
    fontAwesomeIcon: "fa-xing", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#42d000", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using ShadCn Ui",
        "⚡ Developing mobile applications using React Native Framework",
        "⚡ Creating application backend in Node, Express & Next Js",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "vscode-icons:file-type-node",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Next Js",
          fontAwesomeClassname: "logos:nextjs-icon",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "skill-icons:wordpress",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms, Mainly in the domain of AWS and  Firebase",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on AWS",
      ],
      softwareSkills: [
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Digital Marketing ",
      fileName: "DataScienceImg",
      skills: [
        "⚡ My first curiosity is to automate the social media . So I started learning Digital Marketing .",
        "⚡ My Learned Video Editing , Social Media Automation, SEO Automation, Email Marketing",
        "⚡ I have worked with two Main Startups such as Karma Developers and A2ZTechvalley .",
      ],
      softwareSkills: [
        {
          skillName: "Buffer",
          fontAwesomeClassname: "arcticons:buffer",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "MailChimp",
          fontAwesomeClassname: "logos:mailchimp-freddie",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Google Analytics",
          fontAwesomeClassname: "logos:google-analytics",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Google Ads",
          fontAwesomeClassname: "logos:google-ads",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Twilio",
          fontAwesomeClassname: "logos:twilio",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Sprout Social",
          fontAwesomeClassname: "mdi:leaf",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Hot Jar",
          fontAwesomeClassname: "logos:hotjar-icon",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Hubspot",
          fontAwesomeClassname: "mdi:hubspot",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ I have more intrest in the Field of Machine Learning and in Data Science ",
    //     "⚡ My Dream is to work in Computer Vision and NLP projects",
    //     "⚡ In Future I will work in Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "devicon:canva",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Premiere Pro",
          fontAwesomeClassname: "simple-icons:adobepremierepro",
          style: {
            color: "#00ff5b",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/manojkumar-c/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/manojkumarc",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/manojkumar003",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/Dev_Manojkuamr",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@manojkumar_c",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/manojkumar0803",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sri Krishna College Of Engineering and Technology",
      subtitle: "B.Tech. in Computer Science and Business System",
      logo_path: "ski_logo.png",
      alt_name: "SKCET Coimbatore",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Machine Learning, Cloud Computing and Full Stack Development.",
        "⚡ I have won many Hackathons with my friends such as Kavach, VOIS Finals, SVCE etc.. and also started Fresh Spar Technologies .",
      ],
      website_link: "http://skcet.ac.in",
    },
    // {
    //   title: "Indiana University Bloomington",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Cloud Computing",
      subtitle: "- Andrew Ng",
      logo_path: "nptel_logo.png",
      certificate_link: "",
      alt_name: "IIT Madras",
      color_code: "#FFBB0099",
    },
    {
      title: "Full Stack Development",
      subtitle: "- Stephen Grider ",
      logo_path: "udemy_logo.png",
      certificate_link: "",
      alt_name: "deeplearning.ai",
      color_code: "white",
    },
    {
      title: "Front End Web Development",
      subtitle: "- Learn Tech plus ",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://drive.google.com/drive/folders/1BKm_eUuHj4SiGuNqUiZ34OFVCCMFTMGr",
      alt_name: "frontenddevelopment",
      color_code: "white",
    },
    {
      title: "Ethical Hacking",
      subtitle: "- David Bombal ",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://drive.google.com/drive/folders/1BKm_eUuHj4SiGuNqUiZ34OFVCCMFTMGr",
      alt_name: "ethical hacking",
      color_code: "green",
    },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    {
      title: "Digital Marketing",
      subtitle: "- Anton Voroniuk, Vlad Bogutskiy ",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-f4281197-5b1e-4abc-9d84-0eb0e7354ad7/",
      alt_name: "Digital Marketing",
      color_code: "white",
    },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    {
      title: "Data Structures & Algorithms Essentials using C++ (2023)",
      subtitle: "-  Prateek Narang, Coding Minutes ",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-92488422-1322-4508-9a64-aa8f8c849e3f/",
      alt_name: "Udemy",
      color_code: "#FFBB0099",
    },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack Web Developer",
          company: "A2zTechvalley",
          company_url: "https://a2ztechvalley.com/",
          logo_path: "A2Z_logo.jpeg",
          duration: "June 2021 - Aug 2023",
          location: "Coimbatore, TamilNadu",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Backend Developer",
          company: "Fresh Spar Technologies",
          company_url:
            "https://in.linkedin.com/company/fresh-spar-technologies",
          logo_path: "fresh_logo.jpeg",
          duration: "May 2021 - Oct 2023",
          location: "Coimbatore, TamilNadu",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Front End Developer and Digital Marketer",
          company: "KarmaDev Pvt. Ltd.",
          company_url:
            "https://www.linkedin.com/company/karma-dev/?originalSubdomain=in",
          logo_path: "karma_logo.jpeg",
          duration: "Nov 2017 - Dec 2017",
          location: "Erode, TamilNadu",
          description:
            "KarmaDev is the Start up from Vellalar Institute Of Technology, TamilNadu. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People and Digital Marketing.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Flutter Mobile App Developer ",
          company: "Senchola University",
          company_url: "https://senchola.com/",
          logo_path: "senchola_logo.jpeg",
          duration: "Aug 2023 - Dec 2023",
          location: "Coimbatore",
          description:
            "Involved in the development of the Social Media Application for the Sechola Internship Students. I have developed about 3 mobile apps during the period of the internship. It helps alot to gain knowledge about the mobile app development",
          color: "#000000",
        },
        {
          title: "Front End Developer and Digital Marketer",
          company: "KarmaDev Pvt. Ltd.",
          company_url: "https://www.karmadev.in/",
          logo_path: "karma_logo.jpeg",
          duration: "May 2019 - Sept 2019",
          location: "Erode, TamilNadu",
          description:
            "My First Work in a Startup company called Karma Developers, I am Proud to be a part in the Company . Founder Name Called Sanjay . Really a Hard Working Person . I have done some front end development projects and digital marketing strategies in that startup company ",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#ffffff",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Other Crazy projects ",
  description:
    "There are some other funny and crazy repos available . Bcs I am  passion at coding (Hackathons , Practice etc ..)",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Spam Alert System Dashboard",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Dashboard system for the Spam Alert System (Kavach)",
      url: "https://github.com/Manoj-kumar-C/Dashboard-Spam-Alert-System",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Du Hacks",
      createdAt: "2020-03-06T16:26:54Z",
      description: "An Innovative Hackathon conducted by DU HACKS",
      url: "https://github.com/Manoj-kumar-C/DU-HACKS",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Learn Express Js Harder Way",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Practice to recap the react routing",
      url: "https://github.com/Manoj-kumar-C/React-Router-Course-",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Learn Data Analytics with Python ",
      createdAt: "2024-03-06T16:26:54Z",
      description: "My Data Analytics Projects",
      url: "https://github.com/Manoj-kumar-C/Learning-Next-Js-the-Hard-Way-TS-",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Algorithms Interview Preparations",
      createdAt: "2024-03-06T16:26:54Z",
      description: "PLearning the node and the express js Hands on practice . ",
      url: "https://github.com/Manoj-kumar-C/Learn-Express-Js-Harder-Way",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Defi Tracker",
      createdAt: "2020-03-06T16:26:54Z",
      description: "PLearning the node and the express js Hands on practice . ",
      url: "https://github.com/Manoj-kumar-C/Learn-Express-Js-Harder-Way",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://manojkumar-chandrasekar.beehiiv.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "BK Pudur, Kuniamuthur, Coimbatore ",
    locality: "Hindu",
    country: "IN",
    region: "India",
    postalCode: "641008",
    streetAddress: "Bk Pudur",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/qinnRJm7geQFssyK6",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "8637469722",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
