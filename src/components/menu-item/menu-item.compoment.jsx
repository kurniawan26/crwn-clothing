import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div style={{ backgroundImage: `url(${imageUrl})` }} className="background-image" />
    <div className="content">
      <h1 className="title">{title}</h1>
      <p className="subtitle">SHOP NOW</p>
    </div>
  </div>
);

export default withRouter(MenuItem);
