import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
 return (
   <div className={container}>
<StaticImage src="../images/icon.png" width={100}/>
     <nav>
       <ul className={navLinks}>
         <li className={navLinkItem}><Link className={navLinkText} to="/">Home</Link></li>
         <li className={navLinkItem}><Link className={navLinkText}to="/sobremi">Sobre Mí</Link></li>
         <li className={navLinkItem}><Link className={navLinkText} to="/blog">Blog</Link></li>
         <li className={navLinkItem}><a className={navLinkText} href="https://github.com/canodelacuadra">Github</a></li>
       </ul>
     </nav>
     <main>
       <h1 className={heading}>{pageTitle}</h1>
       {children}
       <footer>
        <p className="footer"> &copy; canodelacuadra {new Date().getFullYear()}</p>
       
        </footer>
     </main>
   </div>
 )
}
export default Layout