import React from "react"
import { Link } from "gatsby"
import logo from '../logo.png';

class Header extends React.Component {
  render(props) {
  const data = this.props.nav.contentfulNavigation.menuItem

  return (
    <header id='Header'>
      <div className="Header-inner">
        <Link id="logo"to='/'><img src={logo} alt="Mary Jane - Speech Therapy" /></Link>
        <div className="contact-details">
          <div id="phone"><h2>01892 723309</h2></div>
          <div id="email"><h5><a href="mailto:maryjane@madpoplars.co.uk">maryjane@madpoplars.co.uk</a></h5></div>
        </div>
      </div>
      <div className="navigation-wrapper">
        <ul id="navigation">
          {data.map((item, i) =>
            <li key={i}><Link activeClassName="active" to={item.slug}>{item.menuTitle}</Link></li>
          )}
        </ul>
      </div>
    </header>
    )
  }
}

export default Header
