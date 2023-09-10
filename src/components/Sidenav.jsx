// Sidenav.js
import React from "react";
import { Link } from "react-router-dom";

export const Sidenav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/dashboard/home'>Main Menu</Link>
        </li>
        <li>
          <Link to='/dashboard/analytics'>Analytics</Link>
        </li>
        <li>
          <Link to='/dashboard/clients'>Clients</Link>
        </li>
        <li>
          <Link to='/dashboard/settings'>Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
