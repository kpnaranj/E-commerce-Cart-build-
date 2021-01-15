import React from "react";
import "./SideDrawer.css";

function SideDrawer({ show }) {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }

  return <div className={sideDrawerClass.join(" ")}></div>;
}

export default SideDrawer;
