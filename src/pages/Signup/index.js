import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import classNames from "classnames/bind";
import styles from "./Signup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  // sử lý chiều cao màn hình
  useEffect(() => {
    const fullHeight = function () {
      $(".js-fullheight").css("height", $(window).height());
      $(window).resize(function () {
        $(".js-fullheight").css("height", $(window).height());
      });
    };
    fullHeight();
  }, []);

  // viết hàm dùng mắt xem
  // validate email

  return (
    <div className={cx("my-bg", "js-fullheight")}>
      <section className={cx("ftco-section")}>
        <div className={cx("container")}>
          <div className={cx("row justify-content-center")}>
            <div className={cx("col-md-6 text-center mb-5")}>
              <h2 className={cx("heading-section")}>Login to Viettravel</h2>
            </div>
          </div>
          <div className={cx("row justify-content-center")}>
            <div className={cx("col-md-6 col-lg-4")}>
              <div className={cx("login-wrap", "p-0")}>
                <form action="#" className={cx("signin-form")}>
                  <div className={cx("form-group")}>
                    <input
                      type="email"
                      className={cx("form-control")}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className={cx("form-group")}>
                    <input
                      id="password-field"
                      type={passwordVisible ? "text" : "password"}
                      className={cx("form-control")}
                      placeholder="Password"
                      required
                    />
                    <FontAwesomeIcon
                      icon={passwordVisible ? faEye : faEyeSlash}
                      toggle="#password-field"
                      className={cx("field-icon", "toggle-password")}
                      onClick={togglePasswordVisibility}
                    />
                  </div>
                  <div className={cx("form-group")}>
                    <input
                      id="password-field"
                      type={passwordVisible ? "text" : "password"}
                      className={cx("form-control")}
                      placeholder="Re-password"
                      required
                    />
                    <FontAwesomeIcon
                      icon={passwordVisible ? faEye : faEyeSlash}
                      toggle="#password-field"
                      className={cx("field-icon", "toggle-password")}
                      onClick={togglePasswordVisibility}
                    />
                  </div>
                  <div className={cx("form-group")}>
                    <button
                      type="submit"
                      className={cx("btn-primary", "form-control submit px-3")}
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <p className={cx("w-100 text-center")}>
                  &mdash; Or Sign In With &mdash;
                </p>
                <div className={cx("social", "d-flex text-center")}>
                  <a
                    href="#"
                    className={cx("flexFill", "px-2 py-2 mr-md-1 rounded")}
                  >
                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                  </a>
                  <a
                    href="#"
                    className={cx("flexFill", "rounded px-2 py-2 ml-md-1")}
                  >
                    <FontAwesomeIcon icon={faTwitter} /> Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
