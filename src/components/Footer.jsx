import { pageLinks } from "../constants/links";
import { socialLinks } from "../constants/socialLinks";
const Footer = () => {
  return (

      <footer className="section footer" id="footer">
          <ul className="footer-links">
              {
                  pageLinks && pageLinks.length > 0 && (
                      pageLinks.map((link) => {
                          return (
                              <li key={link.id}>
                                  <a href={link.url} className="footer-link"> {link.text} </a>
                              </li>
                          )
                      })
                  )
              }
          </ul>
          <ul className="footer-icons">
              {
                  socialLinks && socialLinks.length > 0 && (
                      socialLinks.map((link) => {
                          return (
                              <li key={link.id}>
                                  <a href={link.url} target="_blank" className="nav-icon"
                                  ><i className={link.icon}></i>{link.text}</a>
                              </li>
                          )
                      })
                  )}
          </ul>
          <p className="copyright">
              copyright &copy; Backroads travel tours company
              <span id="date"></span> all rights reserved
          </p>
      </footer>
  )
}
export default Footer;