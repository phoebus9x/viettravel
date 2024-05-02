import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { locales } from '~/i18n/i18n';
// className=)}
function Navbar() {
    const location = useLocation();
    const { i18n } = useTranslation();
    const { t } = useTranslation('home');
    const currentLanguage = locales[i18n.language];

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    return (
        <div className="header-content">
            <header>
                <nav className="navbar container navbar-expand-lg">
                    <div className="container-fluid">
                        <Link to="/" className="header-link navbar-brand position-relative p-0">
                            <img className="logo-img" src={images.logo} alt="Logo" />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            {/* <FontAwesomeIcon
                  className="navbar-toggler-icon"
                  icon={faBars}
                /> */}
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav position-relative ms-auto mx-4 mb-2 mb-lg-0 d-flex gap-4 justify-content-center align-items-center">
                                <li className="nav-item">
                                    <Link
                                        className={`header-link nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                        aria-current="page"
                                        to="/"
                                    >
                                        {t('home')}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`header-link nav-link ${
                                            location.pathname === '/about' ? 'active' : ''
                                        }`}
                                        to="/about"
                                    >
                                        {t('about')}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`header-link nav-link ${
                                            location.pathname === '/blog' ? 'active' : ''
                                        }`}
                                        to="/blog"
                                    >
                                        {t('blog')}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`header-link nav-link ${
                                            location.pathname === '/contact' ? 'active' : ''
                                        }`}
                                        to="/contact"
                                    >
                                        {t('contact')}
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        className="header-link nav-link dropdown-toggle"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {currentLanguage}
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <div className="dropdown-item" onClick={() => changeLanguage('en')}>
                                                English
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dropdown-item" onClick={() => changeLanguage('vi')}>
                                                Vietnamese
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dropdown-item" onClick={() => changeLanguage('ru')}>
                                                Russian
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        className="header-link nav-link dropdown-toggle"
                                        to="/"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {t('pages')}
                                    </Link>
                                    <ul className="dd-menu dropdown-menu fade-up">
                                        <li>
                                            <Link className="dd-item dropdown-item" to="/Services">
                                                {t('services')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dd-item dropdown-item" to="/Destinations">
                                                {t('destinations')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dd-item dropdown-item" to="/Testimonials">
                                                {t('testimonials')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dd-item dropdown-item" to="/FAQ">
                                                {t('faq')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dd-item dropdown-item" to="/Team">
                                                {t('team')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dd-item dropdown-item" to="/ComingSoon">
                                                Coming Soon
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                {/* <li className="nav-item")}>
                    <a className="nav-link disabled")} aria-disabled="true">
                      Disabled
                    </a>
                  </li> */}
                            </ul>
                            <Button to="/destinations">{t('book now')}</Button>
                            {/* <form className="d-flex")} role="search">
                  <input
                    className="form-control me-2")}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-success")}
                    type="submit"
                  >
                    Search
                  </button>
                </form> */}
                        </div>
                    </div>
                </nav>
                <hr />
            </header>
        </div>
    );
}

export default Navbar;
