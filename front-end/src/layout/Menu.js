import React from "react";
import { Link } from "react-router-dom";

/**
 * Defines the menu for this application.
 * @returns {JSX.Element}
 */

function Menu() {
  return (
    <div>
      <nav
        className="nav navbar-nav mt-3 d-flex "
        style={{ position: "fixed", zIndex: "2" }}
      >
        <ul className="nav navbar-nav bg-dark" style={{ backgroundColor: "#FFB93A", fontFamily: 'monospace' }}>
          <li className="nav-item p-1 ">
            <button
              type="button"
              className="btn text-white"
              data-toggle="tooltip" 
              data-placement="bottom"
              title="Home"
            >
              Home
              <Link className="nav-link " to="/">
                <span className="material-icons" style={{ color: "#FF5733" }} class="font-italic">
                  home
                </span>
              </Link>
            </button>
          </li>

          <li className="nav-item p-1">
            <button
              type="button"
              className="btn text-white"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Search"
            >
              Search
              <Link className="nav-link " to="/search">
                <span className="material-icons" style={{ color: "#FF5733" }} class="font-italic">
                  search
                </span>
              </Link>
            </button>
          </li>
          <li className="nav-item p-1">
            <button
              type="button"
              className="btn text-white"
              data-toggle="tooltip"
              data-placement="bottom"
              title="New Reservation"
            >
              Reserve
              <Link className="nav-link " to="/reservations/new">
                <span className="material-icons mr-2" style={{ color: "#FF5733" }} class="font-italic">
                  reserve
                </span>
              </Link>
            </button>
          </li>
          <li className="nav-item p-1">
            <button
              type="button"
              className="btn text-white"
              data-toggle="tooltip"
              data-placement="bottom"
              title="New Table"
            >
              Table
              <Link className="nav-link " to="/tables/new">
                <span className="material-icons" style={{ color: "#FF5733" }} class="font-italic">
                  tables
                </span>
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
