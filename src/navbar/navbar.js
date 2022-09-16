import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo-img.png";
import category from "../assets/icons/category-icon.svg";
import expand from "../assets/icons/expand.svg";
import note from "../assets/icons/note.svg";
import intersect from "../assets/icons/intersect.svg";
import arrow from "../assets/icons/arrow-drop-down.svg";
import notification from "../assets/icons/notification.svg";
import avatar from "../assets/icons/avatar.svg";
import search from "../assets/icons/search.svg";
import more from "../assets/icons/more-horizontal.svg";
import "./navbar.css";
function Navbar() {
  return (
    <>
      <nav className="navigation">
        <div>
          <img className="navigation_logo" src={logo} />
        </div>
        <div className="navigation_categry_section">
          <img src={category} />
          <a>Categories</a>
          <img src={expand} />
        </div>
        <ul className="navigation_links">
          <a>Courses</a>
          <a>Blogs</a>
          <a>Contact Us</a>
        </ul>
        <div className="navigation_search">
          <img src={search} />
          <input placeholder="Search" />
        </div>
        <div className="navigation_more">
          <img src={more} />
        </div>
        <div className="navigation_container_note">
          <img src={note} />
          <span>Placement Test</span>
        </div>
        <div className="navigation_avatar">
          <div className="navigation_avatar_nationality_section">
            <img src={intersect} />
            <img src={arrow} />
          </div>
          <img src={notification} />
          <div className="navigation_avatar_photo_section">
            <img src={avatar} />
            <img src={arrow} />
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
