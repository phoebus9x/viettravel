import "./Button.scss";
import { Link } from "react-router-dom";

function Button({ to, href, children, className, ...passProps }) {
  const props = {
    ...passProps,
  };
  if (to) {
    props.to = to;
  } else props.to = "/";

  let classes;

  if (className === "globalBtnActive") {
    classes = "globalBtnActive";
  } else {
    classes = "globalBtn";
  }

  return (
    <div className={classes}>
      <ul>
        <li>
          <Link className="link" {...props}>
            {children}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Button;
