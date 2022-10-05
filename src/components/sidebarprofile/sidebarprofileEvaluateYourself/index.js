import React from "react";
import './sidebarprofileEvaluateYourself.scss';
import { Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBandage, faMagic, faSmile, faUserCheck, faUserGroup} from "@fortawesome/free-solid-svg-icons";

function SidebarEvaluateYourself(){

    return(
            <div className="navbarEY">
                <div className="rowEY">
                    <Container>
                <Row>
                    <Col className="colEY">
                        <FontAwesomeIcon icon={faSmile} className="fontEY"></FontAwesomeIcon>
                       <p className="titleEY">Sociability</p>
                       <p className="numberEY">10/10</p>
                        </Col>
                    <Col className="colEY">
                    <FontAwesomeIcon icon={faBandage} className="fontEY"></FontAwesomeIcon>
                    <p className="titleEY"> Work Pressure</p>
                    <p className="numberEY">9/10</p>
                    </Col>
                    
                    <Col className="colEY">
                    <FontAwesomeIcon icon={faUserCheck} className="fontEY"></FontAwesomeIcon>
                    <p className="titleEY">Attendance</p>
                    <p className="numberEY">8.5/10</p>
                    </Col>
                    <Col className="colEY">
                    <FontAwesomeIcon icon={faUserGroup} className="fontEY"></FontAwesomeIcon>
                    <p className="titleEY">Teamwork</p>
                    <p className="numberEY">9/10</p>
                    </Col>
                </Row>
                </Container>
                </div>
                
               
                
            </div>
    )
}

export default SidebarEvaluateYourself;