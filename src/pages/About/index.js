import "../Home/Home.scss";
import "./Reponsive.scss";

import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";
import AOS from "aos";

import images from "~/assets/images";
import Navbar from "~/Layout/components/Navbar";
import Button from "~/components/Button";

function About() {
  const { t } = useTranslation("home");
  // {t("key")}

  useEffect(() => {
    AOS.init();
  }, []);
  return <div class="site-wrapper"></div>;
}

export default About;
