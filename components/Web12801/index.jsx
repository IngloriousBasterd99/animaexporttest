import React from "react";
import { Link } from "react-router-dom";
import "./Web12801.css";

export const Web12801 = (props) => {
  const { children } = props;

  return (
    <div className="container-center-horizontal">
      <div className="web-1280-1 screen">
        <div className="flex-col-1">
          <div className="x1280-rectangle1 border-1px-dove-gray"></div>
          <div className="x1280-rectangle3 border-1px-dove-gray"></div>
        </div>
        <div className="flex-col">
          <h1 className="number segoeui-regular-normal-dove-gray-112px">{children}</h1>
          <Link to="/web-1280-2">
            <div className="x1280-rectangle5 border-1px-dove-gray"></div>
          </Link>
        </div>
        <div className="flex-col-2">
          <div className="x1280-rectangle2 border-1px-dove-gray"></div>
          <div className="x1280-rectangle4 border-1px-dove-gray"></div>
        </div>
      </div>
    </div>
  );
}

export default Web12801;
