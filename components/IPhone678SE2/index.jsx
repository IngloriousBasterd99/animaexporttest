import React from "react";
import { Link } from "react-router-dom";
import "./IPhone678SE2.css";

export const IPhone678SE2 = (props) => {
  const { children } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-6-7-8-se-2 screen">
        <div className="number segoeui-regular-normal-dove-gray-112px">{children}</div>
        <Link to="/iphone-6-7-8-se-1" className="align-self-flex-center">
          <div className="x375-purple-retangle border-1px-dove-gray"></div>
        </Link>
      </div>
    </div>
  );
}

export default IPhone678SE2;
