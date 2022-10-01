import React, { Component } from "react";
import Slider from "react-slick";
import "../sidebarprofile_Testinonials/sidebarprofile.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import anhnen1 from"../../../assets/images/anhnen1.jpg";
import anhnen2 from"../../../assets/images/anhnen2.jpg";
import anhnen3 from"../../../assets/images/anhnen3.jpg";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    return (
      <div>
        <div className="sidebar-Testimonials">
           
          <Slider {...settings}>
            <div className="img-sidebar">
                <div className="img_testimonial_1">
                <img src={anhnen1}></img>
                </div>
              <div className="border-text">
              <p>
              You'll want to set a goal big enough that,
               in the process of achieving it, you become the person you deserve to be.
              </p>
              <h5 className="text-name">Jim Rohn</h5>
              
              </div>
            </div>
            <div className="img-sidebar">
                <div className="img_testimonial_1">
                <img src={anhnen2}></img>
                </div>
              <div className="border-text">
              <p>
              The future is not better by hope, 
              it is better by planning. And to plan for the future, we need goals.
              </p>
              <h5 className="text-name">Brian Tracy</h5>
              
              </div>
            </div>
            <div className="img-sidebar">
                <div className="img_testimonial_1">
                <img src={anhnen3}></img>
                </div>
              <div className="border-text">
              <p>
              When you really have a purpose, people, resources, and opportunities will naturally gravitate toward you.
              </p>
              <h5 className="text-name">Jack Canfield</h5>
              
              </div>
            </div>
            
          </Slider>
         
        </div>
      </div>
    );
  }
}
