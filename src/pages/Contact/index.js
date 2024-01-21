import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import '~/components/css/All.scss';
import '~/components/css/Reponsive.scss';
import images from '~/assets/images';
import Navbar from '~/Layout/components/Navbar';
import Button from '~/components/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAnglesRight,
    faArrowRight,
    faEnvelope,
    faHouse,
    faPhone,
    faPlay,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedin, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    const { t } = useTranslation('home');
    // {t("key")}

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={'site-wrapper'}>
            <div className={'header-contact'}>
                <Navbar />
                {/* <!-- ====== 1.2 hero section ====== --> */}
                <section className="hero">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-11 col-md-12 text-center" data-aos="fade">
                                <div>
                                    <h2>{t('contact us')}</h2>
                                    <div className="d-flex justify-content-center gap-4 pt-4">
                                        <nav aria-label="breadcrumb">
                                            <div className="breadcrumb d-flex gap-4 align-items-center">
                                                <div className="breadcrumb-item">
                                                    <Link to="/">{t('home')}</Link>
                                                </div>
                                                <FontAwesomeIcon icon={faAnglesRight} />
                                                <div className="breadcrumb-item" aria-current="page">
                                                    {t('contact')}
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ====== End 1.2 hero section ====== --> */}
            </div>
            {/* <!-- ====== 9.2 contact section ====== --> */}
            <section id="contact">
                <div className="container">
                    <div data-aos="fade" data-aos-duration="1500">
                        <h4>{t('contact us')}</h4>
                        <h2>{t('get in touch')}</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            tempor ipsum dolor sit amet. labore
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-8 bg-white" data-aos="fade" data-aos-duration="1500">
                            <div>
                                <div className="d-flex justify-content-between align-items-center pb-4">
                                    <h5>{t('send us a message')}</h5>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                            </div>
                            <div id="contact-message"></div>
                            <form id="contact-form">
                                <div>
                                    <input type="text" name="name" placeholder={t('name')} required />
                                    <input type="email" name="email" placeholder={t('email address')} required />
                                </div>
                                <div>
                                    <input type="number" name="phone" placeholder={t('phone number')} required />
                                    <input type="text" name="address" placeholder={t('address')} required />
                                </div>
                                <textarea name="message" placeholder={t('message')}></textarea>
                                <div className="globalBtnActive mt-sm-5 mt-4 p-0">
                                    <ul>
                                        <li>
                                            <button type="submit">
                                                {t('submit')}
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                        <div
                            className="col-md-4 d-flex justify-content-center align-items-center"
                            data-aos="fade"
                            data-aos-duration="1500"
                        >
                            <div>
                                <h3>{t('contact')}</h3>
                                <div className="address">
                                    <div>
                                        <FontAwesomeIcon className="icon" icon={faHouse} />
                                        <a href="#">
                                            <p>{t('my address')}</p>
                                        </a>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon className="icon" icon={faEnvelope} />
                                        <a href="#">
                                            <p>Tu051220@gmail.com</p>
                                        </a>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon className="icon" icon={faPhone} />
                                        <a href="#">
                                            <p>+375-25-513-89-93</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center gap-4 mt-3">
                                    <a>
                                        <FontAwesomeIcon className="link" icon={faLinkedin} />
                                    </a>
                                    <a>
                                        <FontAwesomeIcon className="link" icon={faFacebookF} />
                                    </a>
                                    <a>
                                        <FontAwesomeIcon className="link" icon={faTwitter} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 9.2 contact section ====== --> */}
        </div>
    );
}

export default Contact;
