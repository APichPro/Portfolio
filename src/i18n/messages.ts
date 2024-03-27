import { LOCALES } from "./locales";

export const messages = {
  [LOCALES.ENGLISH]: {
    home_job: "Data engineer",

    // NavBar titles
    home: "home",
    about: "about",
    works: "works",
    projects: "projects",
    skills: "skills",
    contact: "contact",
    resume: "resume",

    // About
    about_hi: "Hi, I'm Aristide !",
    about_me: "Welcome to my website ! Passionate by design, I espress my creativity through web development.",
    about_studies: "With an engineering degree from ISEN, my studies and experience enable me to understand and solve the problems facing companies.",
    about_projects: "My academic background and my interest in web development have led me to work on a number of projects detailed in the project section.",
    about_discover: "Don't hesitate to contact me for more information !",

    // Works
    missions: "missions",

    astek_job:"Functional consultant",
    astek_desc: "Astek is a digital services company (ESN) specializing in technology consulting and innovation.",
    astek_type:"Permanent employment",
    astek_mission_1: "Agile transition of projects",
    astek_mission_2:"Deployment and maintenance of solutions",
    astek_mission_3:"JIRA project configuration",
    astek_mission_4:"Processing of business requirements",
    astek_job_desc: "Deployment and maintenance of GED solution and JIRA project configuration.",
  
    orange_job:"Data engineer",
    orange_desc: "Orange is a French telecommunications company that offers mobile, internet, and television services.",
    orange_type:"Apprenticeship",
    orange_mission_1: "Pipeline architecture (containerisation)",
    orange_mission_2: "Data architecture (JSON)",
    orange_mission_3: "Technology watch",
    orange_mission_4: "Deployment of containerised solutions",
    orange_mission_5: "Configuration of containerised solutions and APIs",
    orange_mission_6: "Maintenance of production",
    orange_mission_7: "Database management",
    orange_job_desc: "I did my last year of work-study engineering course within the Orange group (WIN/OINIS direction) at the LANNION site from 10/01/2021 to 09/30/2022. During this period, I joined the MLOPS Team managed by my tutor Jamil CHAWKI and responsible for developing and deploying an anomaly detection solution on the Orange network. I sported a Data Engineer role for the major duration of the project working on improving and fixing the Data pipelines routing data flows to the anomaly detection Machine Learning model. During my internship, I used and worked on many technologies related to data such as Docker, Kubernetes, Kafka, Thousand Eyes monitoring system, Pinot DB, mainly in JSON, Python and Java languages. I thus discovered many notions concerning data pipeline such as containerization, scaling, processing, etc. The main mission of the year was to contribute to the development, improvement and commissioning of a pipeline upstream of an anomaly detection model on the Orange network.",
  
    adeo_job:"Front-end developer",
    adeo_desc: "ADEO is an international retail group specializing in the home improvement sector. It owns several well-known brands such as Leroy Merlin, Brico Dépôt, and Castorama.",
    adeo_type:"Internship",
    adeo_mission_1: "Development of application modules",
    adeo_mission_2:  "Data (JSON), object and component architecture (Flutter/Dart)",
    adeo_mission_3: "Adaptability to business requirements",
    adeo_mission_4: "Maintenance of production",
    adeo_job_desc: "As part of phase 2 of the SAP deployment in Italy, the Bricoman Group is deploying the SAP EWM solution in a shop in Cerro, Italy, on the outskirts of Milan. In this context, ADEO is developing a new software solution that allows employees to manage shop logistics. For this purpose, it uses the EWM module of SAP (Enterprise Warehouse Management), an integrated management application software. In line with SAP, which plays a backend role, a Flutter application called Solex acts as a frontend. The Flutter application has the significant advantage of being usable on the move to follow business actions, and offers a more intuitive graphical interface than SAP. It is in this context that I joined the Flutter developers' team in order to contribute to the development and implementation of the various Solex modules that allow the management of stocks by Bricoman employees. I joined the solex project in its development phase, the global architecture of the application (core, solex and UI modules), as well as the blocking and internal movement modules were already developed. In addition, the mock-up of all the screens and the logic of the application had already been completed. The mock-up of the solex application was created by a UX designer in direct contact with the end-users of solex, the employees of Bricoman Italy.",
  
    enedis_job: "Developer",
    enedis_desc: "Enedis is a French electricity distribution company. It is responsible for the management, operation, and maintenance of the electricity distribution network in France.",
    enedis_type: "Internship",
    enedis_mission_1: "Business requirement specifications",
    enedis_mission_2: "Automation script for repetitive tasks",
    enedis_job_desc: "The mission I was given was to create, in pairs, a robot that would automate repetitive tasks carried out by the operators of the ENEDIS mapping department. These tasks consist in retrieving, for each work site carried out by the ENEDIS intervention services, relevant files for mapping purposes. The challenge was therefore to save time for the operators in charge of these tasks, and thus to optimise the operation of this service. To achieve this objective, we developed a dedicated script, using the AutoIt language with the specific editor AutoIt SciTe.",
  
    //Projects
  
    //Type
    web_site: "Web site",
    android_application:"Android application",
    web_application: "Web application",
    //Context
    professional: "professional",
    lifestyle: "lifestyle",
    learning: "learning",
    scholar: "scholar",
  },
  [LOCALES.FRENCH]: {
    home_job: "Ingénieur de données",

    // NavBar titles
    home: "acceuil",
    about: "a propos",
    works: "activités",
    projects: "projets",
    skills: "compétences",
    contact: "contact",
    resume: "CV",

    // About
    about_hi:"Bonjour, je suis Aristide !",
    about_me: "Bienvenue sur mon site ! Passionné par le design, j'exprime ma créativité à travers le développement web.",
    about_studies: "Diplomée ingénieur de l'ISEN, mes études et éxperiences me permettent de comprendres et résoudre les problèmatiques qui s'impose au entreprise.",
    about_projects: "Mon parcours scholaire ainsi que mon appétence pour le dévelopement web, m'on amené a travailler sur quelques projets détaillées dans la section projet.",
    about_discover: "N'hésitez pas à me découvrir ou me contacter pour de plus amples informations !",

    // Works
    missions: "missions",

    astek_job: "Consultant fonctionnel",
    astek_desc: "Astek est une entreprise de services du numérique (ESN) spécialisée dans le conseil en technologies et l'innovation.",
    astek_type: "Contrat à durée indéterminée",
    astek_mission_1: "Transition Agile des projets",
    astek_mission_2: "Déploiement et maintien de solutions",
    astek_mission_3: "Configuration de projet JIRA",
    astek_mission_4: "Traitement de besoin métier",
    astek_job_desc: "Déploiement et maintien de solution GED et configuration de projet JIRA.",
  
    orange_job:"Ingénieur de données",
    orange_desc: "Orange est une entreprise de télécommunications française qui propose des services de téléphonie mobile, d'internet et de télévision.",
    orange_type: "Alternance",
    orange_mission_1: "Architecture de pipelines (conteneurisation)",
    orange_mission_2: "Architecture de données (JSON)",
    orange_mission_3: "Veille technologique",
    orange_mission_4: "Déploiement de solutions containerisées",
    orange_mission_5: "Configuration de solutions containerisées et d'APIs",
    orange_mission_6: "Maintien de la production",
    orange_mission_7: "Gestion de base de données",
    orange_job_desc: "J’ai effectué ma dernière année de cursus d’ingénieur en alternance au sein du groupe Orange (direction OINIS) sur le site de Lannion du 01/10/2021 au 30/09/2022. Durant cette période, j’ai intégré l’équipe MLOPS Team managé par mon tuteur Jamil CHAWKI, chargé du déploiement d’une solution de détection d’anomalies mise en place sur le réseau d’Orange. J’ai pour cela endossé le rôle de data Engineer durant la majeure durée du projet en travaillant sur l’amélioration et la correction des pipelines acheminant les flux de données au modèle de Machine Learning de détection d’anomalies. J’ai durant mon alternance exploité et travaillé sur de nombreuses technologies en relation avec la data telle que, Docker, Kubernetes, Kafka, le système de supervision Thousand Eyes, Pinot DB, majoritairement dans les langages JSON, Python et Java. J’ai ainsi découvert de nombreuses notions concernant les data pipelines tels que la containerisation, le scaling, le processing, etc. La mission principale de l’année a été de contribuer au développement, à l’amélioration et à la mise en service d’un pipeline de données en amont d’un modèle de détection d’anomalies sur le réseau Orange.",
  
    adeo_job:"Développeur Front-end",
    adeo_desc: "ADEO est un groupe international de distribution spécialisé dans le secteur de l'aménagement de la maison. Il possède plusieurs enseignes connues telles que Leroy Merlin, Brico Dépôt et Castorama.",
    adeo_type:"Stage",
    adeo_mission_1: "Développement des modules de d’applications",
    adeo_mission_2: "Architecture de données (JSON), d’objets et de composants (Flutter/Dart)",
    adeo_mission_3: "Adaptabilité au besoin métier",
    adeo_mission_4: "Maintien de la production",
    adeo_job_desc: "Dans le cadre de la phase 2 du déploiement de SAP en Italie, le groupe Bricoman déploie la solution SAP EWM au sein d’un magasin à Cerro en Italie, dans la banlieue de Milan. Dans cette optique, ADEO développe une nouvelle solution logicielle permettant une gestion de la logistique magasin par les employés. Pour cela il utilise le module EWM de SAP (Enterprise Warehouse Management), un logiciel applicatif de gestion intégré. En adéquation avec SAP qui joue un rôle de Backend, une application Flutter appelé Solex fait office de Frontend. L’application Flutter a l’avantage non négligeable d’être utilisable en mobilité pour suivre les gestes métiers, et proposer une interface graphique plus intuitive que SAP. C’est dans ce contexte que j’ai intégré l’équipe de développeurs Flutter afin de contribuer au développement et à la mise en place des différents modules de Solex qui permettent la gestion des stocks par les employés de Bricoman. J’ai intégré le projet solex dans sa phase de développement, l’architecture globale de l’application (modules core, solex et UI), ainsi que les modules de blocage et de mouvement interne étaient déjà développées. De plus, la maquette de l’ensemble des écrans et de la logique de l’application étaient déjà réalisés. La maquette de l’application solex a été réalisée par un UX designer en relation directe avec les utilisateurs finaux de Solex, soit les employés de Bricoman Italie.",
  
    enedis_job:"Developper",
    enedis_desc: "Enedis est une entreprise française de distribution d'électricité. Elle est responsable de la gestion, de l'exploitation et de l'entretien du réseau de distribution d'électricité en France.",
    enedis_type:"Stage",
    enedis_mission_1: "Cahier des charges du besoin métier",
    enedis_mission_2: "Script d’automatisation de taches répétitives",
    enedis_job_desc: "La mission qui m’a été confiée était de créer, en binôme, un robot permettant d’automatiser des tâches répétitives effectuées par les opérateurs du pôle cartographie d’ENEDIS. Ces tâches consistent à rapatrier, pour chaque chantier effectué par les services d’intervention d’ENEDIS, des fichiers pertinents dans une optique de cartographie. L’enjeu était donc de faire gagner du temps aux opérateurs en charge de ces tâches, et donc d’optimiser le fonctionnement de ce service. Pour atteindre cet objectif, nous avons développé un script dédié, en utilisant le langage AutoIt avec l’éditeur spécifique AutoIt SciTe.",
  
    //Projects
  
    //Type
    web_site: "site Web",
    android_application:"application Android",
    web_application: "application Web",
    //Context
    professional: "professionnel",
    lifestyle: "mode de vie",
    learning: "apprentissage",
    scholar: "scolaire",
  }
};