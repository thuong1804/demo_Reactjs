import React from "react";

const SildebarItem = ({data}) =>{
    return(
        <div className="wrapSideBar">
         <div className="imgSidebar">
            
            <img src={data.image} className="imgSelfGoals"></img>
            </div>
          <div className="borderText">
          <p>
           {data.text}
          </p>
          <h5 className="textName">{data.author}</h5>
          
        
        </div>
        </div>
    );
};

export default SildebarItem;