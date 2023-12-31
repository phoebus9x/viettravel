import Home from "~/pages/Home";
import About from "~/pages/About";
import Blog from "~/pages/Blog";
import Contact from "~/pages/Contact";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Page404 from "~/pages/Page404";
import Login from "~/pages/Login";
import Signup from "~/pages/Signup";
import { HeaderOnly } from "~/Layout";
import Test from "~/pages/Test";
import Destinations from "~/pages/Destinations";
import Services from "~/pages/Services";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
  { path: "/services", component: Services },
  { path: "/destinations", component: Destinations },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile, layout: null },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "*", component: Page404, layout: null },
  { path: "/login", component: Login, layout: null },
  { path: "/signup", component: Signup, layout: null },

  { path: "/test", component: Test, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
