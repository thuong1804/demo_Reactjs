import React, { useState } from "react";
import './sidebarprofileEvaluateYourself.scss';
import { Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBandage, faMagic, faSmile, faUserCheck, faUserGroup} from "@fortawesome/free-solid-svg-icons";
import SideBarEvaluateItem from "./sidebarevaluateitem/sidebarevaluateitem";

function SidebarEvaluateYourself(){

    const [sideBarEvaluaTe, setSideBarEvaluaTe] = useState ([
        {
            font:faSmile,
            title:'Sociability',
            text:'10/10'
        },
        {
            font:faBandage,
            title:'Work Pressure',
            text:'9/10'
        },
        {
            font:faUserCheck,
            title:'Attendance',
            text:'8.5/10'
        },
        {
            font:faUserGroup,
            title:'Teamwork',
            text:'9/10'
        }

    ])
        
    
    return(
            <div className="navbarEY">
                <div className="rowEY">
                    <Container>
                 <Row>
                    {sideBarEvaluaTe.map((item,index)=>(<SideBarEvaluateItem key ={index} data ={item} title={item} text={item} ></SideBarEvaluateItem>))}
                   
                </Row>
                  
                </Container>
                </div>
                
               
                
            </div>
    )
}

export default SidebarEvaluateYourself;