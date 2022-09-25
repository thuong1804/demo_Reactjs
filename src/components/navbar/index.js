import React, { useState } from "react";
import "./navbar.scss";

function Navbar() {
    const [navbars] = useState([
        {
            title: 'About me',
            href: '/about'
        },
        {
            title: 'Resume',
            href: '/resume'
        },
        {
            title: 'Portfolio',
            href: '/portfolio'
        },
        {
            title: 'Blog',
            href: '/blog'
        },
        {
            title: 'Contact',
            href: '/contact'
        },
        {
            title: 'Extra',
            href: '/extra'
        },
        {
          title: 'Get it Now',
          href: '/get it now'
      }
    ])
  return (
    <section className="menu-navbar">
      {navbars.map(
        (item,index)=>( <a key={index} href={item.href} className="navbar-item">
        {" "}
        {item.title}
      </a>)
      )}
    </section>
  );
}
export default Navbar;
