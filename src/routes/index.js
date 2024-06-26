import Home from '~/pages/Home';
import About from '~/pages/About';
import Blog from '~/pages/Blog';
import Contact from '~/pages/Contact';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Page404 from '~/pages/Page404';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import Destinations from '~/pages/Destinations';
import Services from '~/pages/Services';
import Testimonials from '~/pages/Testimonials';
import Team from '~/pages/Team';
import FAQ from '~/pages/FAQ';
import SinglePost from '~/pages/SinglePost';
import SingleTour from '~/pages/SingleTour';

import Step1 from '~/pages/step/Step1';
import Step2 from '~/pages/step/Step2';
import Step3 from '~/pages/step/Step3';
import Step4 from '~/pages/step/Step4';
// import LAYOUT
import { HeaderOnly } from '~/Layout';
import MyCKEditor from '~/pages/MyCKEditor';
import TestPost from '~/pages/testPost';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/blog', component: Blog },
    { path: '/contact', component: Contact },
    { path: '/services', component: Services },
    { path: '/destinations', component: Destinations },
    { path: '/testimonials', component: Testimonials },
    { path: '/team', component: Team },
    { path: '/faq', component: FAQ },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile, layout: null },
    { path: '/upload', component: Upload, layout: null },
    { path: '*', component: Page404, layout: null },
    { path: '/login', component: Login, layout: null },
    { path: '/signup', component: Signup, layout: null },

    { path: '/single-post', component: SinglePost },
    { path: '/single-tour', component: SingleTour },

    { path: '/step1', component: Step1 },
    { path: '/step2', component: Step2 },
    { path: '/step3', component: Step3 },
    { path: '/step4', component: Step4, layout: null },

    { path: '/editor', component: MyCKEditor, layout: null },
    { path: '/test', component: TestPost, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
