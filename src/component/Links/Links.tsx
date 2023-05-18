import { links } from '../../data/constant'
import './Links.css';

const Links = () => {
  return (
    <ul className='links_list'>
      {links.map((link: any) => (
      <li key={link.name}>
          <a href={link.url}>
            <link.icon width="40" height="40" fill="#ECC86C"/>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Links;
