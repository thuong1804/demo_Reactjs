import React, { useState } from "react";
import "../narbar_Testimonials/navbar_testimonials.scss";
import {Header} from "../../header";

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
    <Header>
    <div className="nar">
    <section className="menu-navbar">
      {navbars.map(
        (item,index)=>( <a key={index} href={item.href} className="navbar-item">
        {" "}
        {item.title}
      </a>)
      )}
    </section>
    </div>
    </Header>
  );
}
export default Navbar;
