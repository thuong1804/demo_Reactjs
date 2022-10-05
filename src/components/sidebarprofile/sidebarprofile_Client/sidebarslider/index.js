import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../sidebarslider/sidebarsilde.scss"
import html from "../../../../assets/images/html.png";
import css from "../../../../assets/images/css.png";
import js from "../../../../assets/images/js.png";
import bootstrap from "../../../../assets/images/bootstrap.png";
import scss from "../../../../assets/images/scss.png";
import github from "../../../../assets/images/github.webp";
import reactjs from "../../../../assets/images/React-icon.svg.png";
import { Container } from "reactstrap";

  
  const Sidebarslider = ()=>{
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      arrows:false
    };
    const [slides] = useState([
      html,css,bootstrap,js,reactjs,github,scss
    ])
   

    return (
      <div>
       
        <div className="slideImg">
         <Container>
        <Slider {...settings}>
          {slides.map(
            (img,index)=>{
              return(
                <div className="imgSl"key={index}>
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
