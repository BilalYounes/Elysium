import React from "react";
import "./sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,



} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>

      <Link to={"/"}>
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          className="arrow-home"

        />
      </Link>

      <button className="nav-btn"></button>

    </div>
  );
};

export default Sidebar;