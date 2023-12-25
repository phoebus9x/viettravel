import Button from "~/components/Button";

import styles from "./HeaderOnly.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Button className={cx("btn")}>Login</Button>
      <div className="content">{children}</div>
    </div>
  );
}

export default HeaderOnly;
