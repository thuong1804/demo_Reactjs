import React from "react";

const slideBarItem = ({ data }) => {
  return (
    <div className="wrap-sidebar">
        <div className="img-sidebar">
      <img src={data.image} className="sidebar__picture" />
      <div className="border-text">
        <p>
          You'll want to set a goal big enough that, in the process of achieving
          it, you become the person you deserve to be.
        </p>
        <h5 className="text-name">Jim Rohn</h5>
      </div>
    </div>
    </div>
  );
};

export default slideBarItem;
