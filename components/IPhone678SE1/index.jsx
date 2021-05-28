import React from "react";
import { Link } from "react-router-dom";
import "./IPhone678SE1.css";

function IPhone678SE1(props) {
  const { children } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-6-7-8-se-1 screen">
        <div className="flex-row-1">
          <div className="x375-rectangle1 border-1px-dove-gray"></div>
          <div className="x375-rectangle2 border-1px-dove-gray"></div>
        </div>
        <div className="number segoeui-regular-normal-dove-gray-112px">{children}</div>
        <Link to="/iphone-6-7-8-se-2">
          <div className="x375-rectangle5 border-1px-dove-gray"></div>
        </Link>
        <div className="flex-row">
          <div className="x375-rectangle3 border-1px-dove-gray"></div>
          <div className="x375-rectangle4 border-1px-dove-gray"></div>
        </div>
      </div>
    </div>
  );
}

export default IPhone678SE1;
