import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./BtnBackToTop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function BtnBackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          id="backToTopBtn"
          className={cx("btnBTT")}
        >
          <FontAwesomeIcon icon={faArrowTurnUp} />
        </button>
      )}
    </div>
  );
}

export default BtnBackToTop;
