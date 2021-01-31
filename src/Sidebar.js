import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://ma-hub.imgix.net/wp-images/2019/05/29222105/royalty-free-music-Ambient.jpg"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Daniel Saneel</h2>
        <h4>daniel.saneel@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber"> 2,543</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on Post</p>
          <p className="sidebar__statNumber"> 2,448</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactJS')}
        {recentItem('programming')}
        {recentItem('Design')}
        {recentItem('developer')}
      </div>
    </div>
  );
}

export default Sidebar;
