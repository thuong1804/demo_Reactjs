import React, { useState } from "react";
import "../narbar_Testimonials/navbar_testimonials.scss";

function Navbar() {
    const [navbars] = useState([
        {
            title: 'About me',
            href: '/about'
        },      
        {
            title: 'Contact',
            href: '/contact'
        },
        {
            title: 'Skill',
            href: '/skill'
        },
        {
          title: 'Link Information',
          href: '/link Information'
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
