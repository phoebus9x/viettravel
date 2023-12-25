import "bootstrap/dist/css/bootstrap.css";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

import images from "~/assets/images";

const cx = classNames.bind(styles);
// {cx()}
function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarEvent = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header-content")}>
        <header>
          <nav className={cx("my-navbar", "navbar container navbar-expand-lg")}>
            <div className={cx("container-fluid")}>
              {/* logo */}
              <Link to="/" className={cx("navbar-brand position-relative p-0")}>
                <img className={cx("logo-img")} src={images.logo} alt="Logo" />
              </Link>
              {/* <button
                className={cx("navbar-toggler")}
                id="sidebarEvent"
                onClick={handleSidebarEvent}
                type="button"
              >
                <FontAwesomeIcon icon={faBars} />
              </button> */}
              <div className={cx("collapse navbar-collapse")}>
                {/* menu */}
                <ul
                  className={cx(
                    "navbar-nav position-relative ms-auto mx-4 mb-2 mb-lg-0 d-flex gap-4 justify-content-center align-items-center"
                  )}
                >
                  <li className={cx("nav-item")}>
                    <a
                      className={cx("nav-link", "active")}
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li className={cx("nav-item")}>
                    <a className={cx("nav-link")} href="#">
                      About
                    </a>
                  </li>
                  <li className={cx("nav-item")}>
                    <a className={cx("nav-link")} href="#">
                      Blog
                    </a>
                  </li>
                  <li className={cx("nav-item")}>
                    <a className={cx("nav-link")} href="#">
                      Contact
                    </a>
                  </li>
                  <li className={cx("nav-item dropdown")}>
                    <a
                      className={cx("nav-link dropdown-toggle")}
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <ul className={cx("dd-menu", "dropdown-menu fade-up")}>
                      <li>
                        <a className={cx("dd-item", "dropdown-item")} href="#">
                          Services
                        </a>
                      </li>
                      <li>
                        <a className={cx("dd-item", "dropdown-item")} href="#l">
                          Destinations
                        </a>
                      </li>
                      <li>
                        <a className={cx("dd-item", "dropdown-item")} href="#">
                          Testimonials
                        </a>
                      </li>
                      <li>
                        <a className={cx("dd-item", "dropdown-item")} href="#">
                          {" "}
                          FAQ{" "}
                        </a>
                      </li>
                      <li>
                        <a className={cx("dd-item", "dropdown-item")} href="#">
                          {" "}
                          Team{" "}
                        </a>
                      </li>
                      <li>
                        <a className={cx("dd-item", "dropdown-item")} href="#">
                          Coming Soon
                        </a>
                      </li>
                      <li>
                        <a className={cx("dd-item", "dropdown-item")} href="#">
                          {" "}
                          404{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <hr />
          {/* side bar */}
          {/* <aside>
            <div
              className={cx(`sidebar ${isSidebarOpen ? "sidebar-toggle" : ""}`)}
            >
              <div
                className={cx(
                  "d-flex justify-content-between align-items-center"
                )}
              >
                <a href="index.html">
                  <img src="assets/images/sidebarLogo.png" alt="logo" />
                </a>
                <button
                  type="button"
                  id="closeBtn"
                  className={cx("btn-close")}
                ></button>
              </div>
              <ul className={cx("nav-links text-lg-start")}>
                <li>
                  <a href="index.html" className={cx("active")}>
                    {" "}
                    Home
                  </a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
              <div className={cx("more")}>
                <a href="#">Pages</a>
                <a
                  className={cx("btn btn-outline-primary")}
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <i class="fa-solid fa-plus"></i>
                </a>
              </div>
              <div className={cx("collapse mt-2")} id="collapseExample">
                <div className={cx("card card-body")}>
                  <a href="#">Services</a>
                  <a href="#">Destinations</a>
                  <a href="#">Testimonials</a>
                  <a href="#">FAQ</a>
                  <a href="#">Team</a>
                  <a href="#">404</a>
                  <a href="#">Coming Soon</a>
                </div>
              </div>
            </div>
          </aside> */}
        </header>
      </div>
    </div>
  );
}

export default Header;
