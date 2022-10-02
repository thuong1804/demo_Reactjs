import React from "react";
import './sidebarProfileFunfact.scss';
import { Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBandage, faMagic, faSmile, faUserCheck, faUserGroup} from "@fortawesome/free-solid-svg-icons";

function Sidebarfunfact(){

    return(
            <div className="narbar_funfact">
                <div className="row-funfact">
                    <Container>
                <Row>
                    <Col className="col-funfact">
                        <FontAwesomeIcon icon={faSmile} className="font-funfact"></FontAwesomeIcon>
                       <p className="title-funfact">Sociability</p>
                       <p className="number-funfact">10/10</p>
                        </Col>
                    <Col className="col-funfact">
                    <FontAwesomeIcon icon={faBandage} className="font-funfact"></FontAwesomeIcon>
                    <p className="title-funfact"> Work Pressure</p>
                    <p className="number-funfact">9/10</p>
                    </Col>
                    
                    <Col className="col-funfact">
                    <FontAwesomeIcon icon={faUserCheck} className="font-funfact"></FontAwesomeIcon>
                    <p className="title-funfact">Attendance</p>
                    <p className="number-funfact">8.5/10</p>
                    </Col>
                    <Col className="col-funfact">
                    <FontAwesomeIcon icon={faUserGroup} className="font-funfact"></FontAwesomeIcon>
                    <p className="title-funfact">Teamwork</p>
                    <p className="number-funfact">9/10</p>
                    </Col>
                </Row>
                </Container>
                </div>
                
               
                
            </div>
    )
}

export default Sidebarfunfact;