import { Gmail, GitHub, LinkedIn, astek, adeo, enedis, orange, temp, Home, Contact, Works, Projects, Skills, About, React, Next, Git, Flutter, Angular, Dart, Docker, Java, Kafka, Symfony, Autoit, Typescript, Mongodb, Mysql } from "../assets";


export const titles = [
  { id: 'home', icon: Home },
  { id: 'about', icon: About},
  { id: 'works', icon: Works},
  { id: 'projects', icon: Projects},
  { id: 'skills', icon: Skills},
  { id: 'contact', icon: Contact}
];

export const links = [
  { name: 'LinkedIn', icon: LinkedIn, url: 'https://www.linkedin.com/in/aristide-pichereau-b44745180/'},
  { name: 'GitHub', icon: GitHub,  url: 'https://github.com/APichPro'},
  { name: 'Gmail', icon: Gmail,  url: 'aristide.pichereau@gmail.com'}
];

export const projects = [
  { 
    id: 0,
    name: 'DietAddict',
    image: temp,
    context: 'life',
    type: 'android_application',
    main_technologie: ['Flutter']
  },
  {
    id: 1,
    name: 'KeyCoffee',
    image: temp,
    context: 'scholar',
    type: 'web_application',
    main_technologie: ['Angular', 'Symfony']
  },
  {
    id: 2, name: 'TechToc',
    image: temp,
    context: 'learning',
    type: 'web_application',
    main_technologie: ['Next', 'React'],
  },
  {
    id: 3,
    name: 'Youtube',
    image: temp,
    context: 'learning',
    type: 'web_application',
    main_technologie: ['React'],
  },
  {
    id: 4,
    name: 'Portfolio',
    image: temp,
    context: 'professional',
    type: 'web_site',
    main_technologie: ['React'],
  }
];

export const works = [
	{
		id: 0,
		job: "astek_job",
		company: "astek",
    company_desc: "astek_desc",
    start : new Date(2022, 11),
    end : new Date(2023, 3),
    city : "brest",
    type : "astek_type",
    logo : astek,
    missions:[
        "astek_mission_1",
        "astek_mission_2",
        "astek_mission_3",
        "astek_mission_4"
    ],
    job_desc:"astek_job_desc",
    technologie: ["JIRA", "Excel"] ,
    methodologie:["Agile"]
	},
	{
		id: 1,
		job: "orange_job",
		company: "orange",
    company_desc: "orange_desc",
    start : new Date(2021, 10),
    end : new Date(2022, 9),
    city : "lannion",
    type : "orange_type",
    logo : orange,
    missions: [
      "orange_mission_1",
      "orange_mission_2",
      "orange_mission_3",
      "orange_mission_4",
      "orange_mission_5",
      "orange_mission_6",
      "orange_mission_7",
    ],
    job_desc: "orange_job_desc",
    technologie:["Git", "Kubernetes", "Docker", "Kafka", "Pinot"],
    methodologie:["Agile", "Conteneurisation","CI/CD"]
	},
	{
		id: 2,
		job: "adeo_job",
    company: "adeo",
    company_desc: "adeo_desc",
    start : new Date(2021, 5),
    end : new Date(2021, 9),
    city : "ronchin",
    type : "adeo_type",
    logo : adeo,
    missions:[
      "adeo_mission_1",
      "adeo_mission_2",
      "adeo_mission_3",
      "adeo_mission_4"
    ],
    job_desc: "adeo_job_desc",
    technologie: ["Git", "Flutter" ],
    methodologie:["Agile", "Composant web", "CI/CD"]
	}, 
	{
		id: 3,
		job: "developer",
		company: "enedis",
    company_desc: "enedis_desc",
    start : new Date(2021, 5),
    end : new Date(2019, 7),
    city : "brest",
    type : "enedis_type",
    logo : enedis,
    missions:[
      "enedis_mission_1",
      "enedis_mission_2",
    ],
    job_desc: "enedis_job_desc",
    technologie:["AutoIt"],
    methodologie:[]
	},
];

export const skills = [
  {name: 'React', icon: React, score: 3, context: 'professional'},
  {name: 'Next', icon: Next, score: 1, context: 'learning'},
  {name: 'Git', icon: Git, score: 4, context: 'professional'},
  {name: 'Flutter', icon: Flutter, score: 3, context: 'professional'},
  {name: 'Kubernetes', icon: Flutter, score: 2, context: 'professional'},
  {name: 'Docker', icon: Docker, score: 4, context: 'professional'},
  {name: 'Kafka', icon: Kafka, score: 2, context: 'professional'},
  {name: 'Angular', icon: Angular, score: 1, context: 'scholar'},
  {name: 'Symfony', icon: Symfony, score: 1, context: 'scholar'},
  {name: 'AutoIt', icon: Autoit, score: 2, context: 'professional'},

  {name: 'JAVA', icon: Java, score: 2, context: 'professional'},
  {name: 'Dart', icon: Dart, score: 3, context: 'professional'},
  {name: 'TypeScript', icon: Typescript, score: 4, context: 'professional'},

  {name: 'MySQL', icon: Mysql, score: 2, context: 'scholar'},
  {name: 'MongoDB', icon: Mongodb, score: 3, context: 'learning'},
];