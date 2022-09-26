import React from "react";
import { Col, Row } from "reactstrap";
import "./content.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Content() {
  return (
    <div className="content">
      <div className="content-title">
        <h2>What I Do </h2>
      </div>
      <div className="row-content">
      <Row>
        <Col className="Copywrite">
         
          <h4>Copywrite</h4>
          <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. 
            Mauris convallis dictum elit id volutpat. 
            Vivamus blandit, dolor vitae lacin
            ia maximus, risus velit vehicula odio, 
            a tincidunt turpis turpis tempus ex.</p>
          
        </Col>
        <Col className="Ecommerce">
          <h4>Ecommerce</h4>
          <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. 
            Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacin
            ia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.</p>
        </Col>
      </Row>
      </div>
    </div>
  );
}

export default Content;
