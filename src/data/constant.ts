import { Gmail, GitHub, LinkedIn, astek, adeo, enedis, orange, temp, Home } from "../assets";

export const titles = [
  { text: 'home', icon: Home },
  { text: 'about', icon: Home},
  { text: 'works', icon: Home},
  { text: 'projects', icon: Home},
  { text: 'skills', icon: Home},
  { text: 'contact', icon: Home}
];

export const links = [
  { name: 'LinkedIn', icon: LinkedIn, url: 'https://www.linkedin.com/in/aristide-pichereau-b44745180/'},
  { name: 'GitHub', icon: GitHub,  url: 'https://github.com/APichPro'},
  { name: 'Gmail', icon: Gmail,  url: 'aristide.pichereau@gmail.com'}
];

export const projects = [
  { id: 0, name: 'Diet Addict', image: temp, context: 'Learning', type: 'WebSite'  },
  { id: 1, name: 'KeyCoffee', image: temp, context: 'Learning', type: 'WebSite' },
  { id: 2, name: 'TechToc', image: temp, context: 'Learning', type: 'WebSite' },
  { id: 3, name: 'TestApp', image: temp, context: 'Learning', type: 'WebSite' },
  { id: 4, name: 'TestAppv2', image: temp, context: 'Learning', type: 'WebSite' }
];

export const works = [
  { id: 0, company: 'astek', logo: astek, position: 'fonctional consultant'},
  { id: 1, company: 'orange', logo: orange, position: 'data engineer' },
  { id: 2, company: 'adeo', logo: adeo, position: 'front developer' },
  { id: 3, company: 'enedis', logo: enedis, position: 'developer' },
];