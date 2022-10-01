import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../sidebarslider/sidebarsilde.scss"
import html from "../../../../assets/images/html.png";
import css from "../../../../assets/images/css.png";
import js from "../../../../assets/images/js.png";
import boot from "../../../../assets/images/boot.jpg";
import scss from "../../../../assets/images/scss.png";
import git from "../../../../assets/images/git.png";
import reactjs from "../../../../assets/images/React-icon.svg.png";
import { Container } from "reactstrap";

  
  const Sidebarslider = ()=>{
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6
    };
    const [slides] = useState([
      html,css,boot,js,reactjs,git,scss
    ])
    // useEffect( ()=>{
    //     const initslide = 
    //     setSlides(initslide)
    //     console.log(slides);
    // },[])

    return (
      <div>
       
        <div className="slide-img">
         <Container>
        <Slider {...settings}>
          {slides.map(
            (img,index)=>{
              return(
                <div className="img-sl"key={index}>
                <img src={img}></img>
                </div>
              )
            }
          )}
          
        </Slider>
        </Container>
        </div>
      </div>
    );
  }
  export default Sidebarslider;
