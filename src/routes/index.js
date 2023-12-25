import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Page404 from "~/pages/Page404";
import TeamItem from "~/components/TeamItem";
import TourItem from "~/components/TourItem";
import Login from "~/pages/Login";
import Signup from "~/pages/Signup";
import Navbar from "~/Layout/components/Navbar";
import { HeaderOnly } from "~/Layout";
import Test from "~/pages/Test";

const publicRoutes = [
  { path: "/", component: Home },
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
