import React, { useState } from "react";
import "./navbarAboutMySelf.scss";
import Header from "../../header";

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
       <Header/>
    <section className="MenuNavbar">
      {navbars.map(
        (item,index)=>( <a key={index} href={item.href} className="navbarItem">
        {item.title}
      </a>)
      )}
    </section>
    </div>
   
  );
}
export default Navbar;
