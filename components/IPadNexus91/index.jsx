import React from "react";
import { Link } from "react-router-dom";
import "./IPadNexus91.css";

function IPadNexus91(props) {
  const { children } = props;

  return (
    <div className="container-center-horizontal">
      <div className="ipad-nexus-9-1 screen">
        <div className="flex-col-2">
          <div className="x768-rectangle1 border-1px-dove-gray"></div>
          <div className="x768-rectangle3 border-1px-dove-gray"></div>
        </div>
        <div className="flex-col">
          <div className="number segoeui-regular-normal-dove-gray-112px">{children}</div>
          <Link to="/ipad-nexus-9-2">
            <div className="x768-rectangle5 border-1px-dove-gray"></div>
          </Link>
        </div>
        <div className="flex-col-1">
          <div className="x768-rectangle2 border-1px-dove-gray"></div>
          <div className="x768-rectangle4 border-1px-dove-gray"></div>
        </div>
      </div>
    </div>
  );
}

export default IPadNexus91;
