import React, { useState } from "react";
import Header from "../../header";
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
    <div className="nar">
     <Header />
    <section className="menu-navbar">
      {navbars.map(
        (item,index)=>( <a key={index} href={item.href} className="navbar-item">
        {" "}
        {item.title}
      </a>)
      )}
    </section>
    </div>
  );
}
export default Navbar;
