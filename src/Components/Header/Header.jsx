import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <nav>
      {/* mobile section */}
      <section className="menu-icon">
        <span
          onClick={() => {
            setIsOpenMenu(!isOpenMenu);
          }}
          className="icon"
        >
          {!isOpenMenu ? <IoMenu /> : "X"}
        </span>

        {/* responsive navigation container */}

        {isOpenMenu ? (
          <section className="navigation">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/details">Details</NavLink>
              </li>
            </ul>
          </section>
        ) : (
          ""
        )}
      </section>

      {/* logo section */}
      <section>
        <img src={`https://www.themealdb.com/images/logo.svg`} alt="" />
      </section>

      {/* navigation */}

      <section className="navigation-container">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/details">Details</NavLink>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Header;
