import React from "react";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBarEvaluateItem = ({ data }) => {
  return (
   
        <Col className="colEY">
          <FontAwesomeIcon
            icon={data.font}
            className="fontEY"
          ></FontAwesomeIcon>
          <p className="titleEY">{data.title}</p>
          <p className="numberEY">{data.text}</p>
        </Col>
        
     
  );
};
export default SideBarEvaluateItem;
