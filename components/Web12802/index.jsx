import React from "react";
import { Link } from "react-router-dom";
import "./Web12802.css";

export const Web12802 = (props) => {
  const { children } = props;

  return (
    <div className="container-center-horizontal">
      <div className="web-1280-2 screen">
        <div className="number segoeui-regular-normal-dove-gray-112px">{children}</div>
        <Link to="/web-1280-1" className="align-self-flex-center">
          <div className="x1280-purple-retangle border-1px-dove-gray"></div>
        </Link>
      </div>
    </div>
  );
}

export default Web12802;
