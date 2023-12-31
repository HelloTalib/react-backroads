import logo from "../assets/images/logo.svg";
import { pageLinks } from "../constants/links";
import { socialLinks } from "../constants/socialLinks";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {
            pageLinks && pageLinks.length > 0 && (
              pageLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={link.url} className="nav-link"> {link.text} </a>
                  </li>
                )
              })
            )
          }
        </ul>

        <ul className="nav-icons">
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
      </div>
    </nav>
  )
}

export default Navbar;