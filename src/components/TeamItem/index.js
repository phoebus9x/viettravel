import classNames from "classnames/bind";
import styles from "./TeamItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquarePinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const cx = classNames.bind(styles);
function TeamItem(item) {
  return (
    <div className={cx("col-md-4 col-sm-8 col-10")}>
      <div className={cx("teamCard")}>
        <img src="" alt="team-img" />
        <div className={cx("overlaythree")}>
          <div className={cx("overlay_text")}>
            <div className={cx("d-flex justify-content-center gap-2")}>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faSquarePinterest} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h6>James Bowel</h6>
        <p>Tour Guide</p>
      </div>
    </div>
  );
}

export default TeamItem;
