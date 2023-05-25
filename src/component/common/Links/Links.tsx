
import { links } from '../../../data/constant';
import LocalChange from '../LocalChange/LocalChange';
import './Links.css';

const Links = ({locale, setLocale}: any) => {
  return (
    <ul className='links_list'>
        {locale ? <li>
          <LocalChange locale={locale} setLocale={setLocale}/>
        </li> : null}
      {links.map((link: any) => (
      <li key={link.name}>
          <a href={link.url}>
            <link.icon width="52" height="52" fill="#ECC86C"/>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Links;
