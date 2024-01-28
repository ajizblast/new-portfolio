import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useRouteMatch } from "react-router-dom";
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";

const headerData = {
  name: "Chahyo Purnomo Aji",
  designation: "Fullstack Developer",
  imageThumb: "/images/140logo.png",
  social: {
    facebook: "https://t.me/chahyopurnomoaji",
    twitter: "https://wa.me/6285161052522",
    instagram: "https://www.instagram.com/ajizblast",
    github: "https://www.github.com/ajizblast",
    dribbble: "https://dribbble.com/cpacreature",
  },
};

function Header({ toggleHeader, toggleHandler }) {
  const [currentPath, setCurrentPath] = useState("");
  const match = useRouteMatch();

  useEffect(() => {
    setCurrentPath(match.path);
  }, [match]);

  return (
    <>
      <div
        className={
          toggleHeader
            ? "mobile-header py-2 px-3 mt-4 push"
            : "mobile-header py-2 px-3 mt-4"
        }
      >
        <button className="menu-icon mr-2" onClick={toggleHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link to="/" className="logo">
          <img src={headerData.imageThumb} alt={headerData.name} />
        </Link>
        <Link to="/" className="site-title dot ml-2">
          {headerData.name}
        </Link>
      </div>

      <header
        className={
          toggleHeader
            ? "left float-left shadow-dark open"
            : "left float-left shadow-dark"
        }
      >
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={toggleHandler}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="header-inner d-flex align-items-start flex-column">
          <Link to="/">
            <img src={headerData.imageThumb} alt={headerData.name} />
          </Link>
          <Link to="/" className="site-title dot mt-3">
            {headerData.name}
          </Link>

          <span className="site-slogan">{headerData.designation}</span>

          <nav>
            <ul className="vertical-menu scrollspy">
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-home"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-home"></i>Home
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-home"></i>Home
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-user"></i>About
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-user"></i>About
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-services"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-bulb"></i>Services
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-bulb"></i>Services
                  </Link>
                )}
              </li>
                            <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-portfolios"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-grid"></i>Works
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-grid"></i>Works
                  </Link>
                )}
              </li>
              {/* <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-blogs"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-pencil"></i>Blog
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-pencil"></i>Blog
                  </Link>
                )}
              </li> */}
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-phone"></i>Contact
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-phone"></i>Contact
                  </Link>
                )}
              </li>
            </ul>
          </nav>

          <div className="footer mt-auto">
            <ul className="social-icons list-inline">
              {!headerData.social.facebook ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.facebook}>
                    <FaFacebookF />
                  </a>
                </li>
              )}
              {!headerData.social.twitter ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.twitter}>
                    <FaWhatsapp />
                  </a>
                </li>
              )}
              {!headerData.social.instagram ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.instagram}>
                    <FaInstagram />
                  </a>
                </li>
              )}
              {!headerData.social.github ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.github}>
                    <FaTelegramPlane />
                  </a>
                </li>
              )}
              {!headerData.social.dribbble ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.dribbble}>
                    <FaDribbble />
                  </a>
                </li>
              )}
            </ul>

            <span className="copyright">
              &copy; {new Date().getFullYear()} Chahyo Purnomo Aji
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
