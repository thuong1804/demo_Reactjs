import React, { Component, useState } from "react";
import Slider from "react-slick";
import "./sidebarprofileselfgoals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import anhnen1 from"../../../assets/images/anhnen1.jpg";
import anhnen2 from"../../../assets/images/anhnen2.jpg";
import anhnen3 from"../../../assets/images/anhnen3.jpg";
import imgslider from "../../../assets/images/imgslider.png";
import imgslider2 from "../../../assets/images/imgslider2.png";
import adam from "../../../assets/images/adam.jpg";
import SildebarItem from "./sidebarItem";


const SidebarSelfGoals = () =>{
  const settings_3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    
    arrows: false,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }]
  };

  const [sidebarData, setsidebarData] = useState([
    {
      image: adam,
      text: ' You ll want to set a goal big enough that,in the process of achieving it, you become the person you deserve to be',
      author:'Jim Rohn'
    },
    {
      image: imgslider2,
      text:'When you really have a purpose, people, resources, and opportunities will naturally gravitate toward you.',
      author:'Brian Tracy'
    },
    {
      image: imgslider,
      text:'The future is not better by hope,  it is better by planning. And to plan for the future, we need goals',
      author:'Jack Canfield'
    }
  ])

  return(

    <div>
      <div className="sidebarSelfGoals">
      <Slider {...settings_3}>
        {sidebarData.map((item,index)=>(<SildebarItem key ={index} data ={item} text ={item} author={item}></SildebarItem>))}
      </Slider>
      </div>
    </div>
  )
}
export default SidebarSelfGoals;