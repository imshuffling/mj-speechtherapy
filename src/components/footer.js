import React from "react"
import Link from 'gatsby-link'

const year = new Date().getFullYear();

const Footer = () => (
  <footer id="Footer">
    <div className="Footer-inner">
      <div><p>Mary Jane Iles © {year}</p></div>
      <div><p><Link to='/privacy-policy'>Privacy policy</Link></p></div>
    </div>
  </footer>
)

export default Footer
