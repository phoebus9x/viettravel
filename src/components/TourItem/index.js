import classNames from "classnames/bind";
import styles from "./TourItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function TourItem(item) {
  return (
    <div className={cx("col-md-4 col-sm-5 col-11")}>
      <div>
        <figure>
          <img src="" alt="tour-img" />
        </figure>
        <h6>Explore beauty of Turkey</h6>
        <p>Lorem ipsum dolor sit amet, sit consecte adipiscing elit, sed </p>
        <a href="#">
          Learn More
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
}

export default TourItem;
