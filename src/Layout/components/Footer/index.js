import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import images from '~/assets/images';

import { useTranslation } from 'react-i18next';
import { locales } from '~/i18n/i18n';

const cx = classNames.bind(styles);

function Footer() {
    const { i18n } = useTranslation();
    const { t } = useTranslation('home');
    const currentLanguage = locales[i18n.language];

    return (
        <footer>
            <div className={cx('container')}>
                <div className={cx('row justify-content-between')}>
                    <div className={cx('col-lg-2 col-md-3 col-sm-6')}>
                        <div>
                            <h4>{t('quick links')}</h4>
                            <div className={cx('footer-links', 'd-flex flex-column')}>
                                <a href="">{t('home')}</a>
                                <a href="">{t('about')}</a>
                                <a href="">{t('destination')}</a>
                                <a href="">{t('contact')}</a>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-lg-2 col-md-3 col-sm-6')}>
                        <div>
                            <h4>{t('contact info')}</h4>
                            <div className={cx('address')}>
                                <div>
                                    <FontAwesomeIcon className={cx('icon')} icon={faHouse} />
                                    <p>Xã An Ninh, huyện Quỳnh Phụ, Tỉnh Thái Bình</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />
                                    <p>Tu051220@gmail.com</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon className={cx('icon')} icon={faPhone} />
                                    <p>+375-25-513-89-93</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-5 col-md-5')}>
                        <div className={cx('reservation')}>
                            <h4>{t('make a reservation')}</h4>
                            <p>{t('our support & sales team is available 24/7 to answer your queries')}</p>
                            <div className={cx('justify-content-start mt-lg-4 mt-4')}>
                                <Button>{t('book now')}</Button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={cx('sub-footer', 'row justify-content-between align-items-center')}>
                        <div className={cx('col-md-5')}>
                            <Link to="/" className="header-link navbar-brand position-relative p-0">
                                <img className="logo-img" src={images.logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className={cx('col-md-6')}>
                            <p>{t('copyright © 2023 viettravel by datu. all rights reserved.')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
