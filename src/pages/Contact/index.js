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
// import "~/components/GlobalStyles/GlobalStyles.scss";

import feature1 from '~/assets/images/icon/feature-1.svg';
import feature2 from '~/assets/images/icon/feature-2.svg';
import feature3 from '~/assets/images/icon/feature-3.svg';
import feature4 from '~/assets/images/icon/feature-4.svg';
import choose1 from '~/assets/images/icon/choose-1.svg';
import choose2 from '~/assets/images/icon/choose-2.svg';
import choose3 from '~/assets/images/icon/choose-3.svg';
import choose4 from '~/assets/images/icon/choose-4.svg';
import service1 from '~/assets/images/icon/services-1.svg';
import service2 from '~/assets/images/icon/services-2.svg';
import service3 from '~/assets/images/icon/services-3.svg';
import service4 from '~/assets/images/icon/services-4.svg';
import logoipsum1 from '~/assets/images/icon/logoipsum-1.svg';
import logoipsum2 from '~/assets/images/icon/logoipsum-2.svg';
import logoipsum3 from '~/assets/images/icon/logoipsum-3.svg';
import logoipsum4 from '~/assets/images/icon/logoipsum-4.svg';
import logoipsum5 from '~/assets/images/icon/logoipsum-5.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faArrowRight, faEnvelope, faHouse, faPhone, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
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
                                    <h2>Contact Us</h2>
                                    <div className="d-flex justify-content-center gap-4 pt-4">
                                        <nav aria-label="breadcrumb">
                                            <div className="breadcrumb d-flex gap-4 align-items-center">
                                                <div className="breadcrumb-item">
                                                    <Link to="/">Home</Link>
                                                </div>
                                                <FontAwesomeIcon icon={faAnglesRight} />
                                                <div className="breadcrumb-item" aria-current="page">
                                                    Contact
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
                        <h4>Contact Us</h4>
                        <h2>Get In Touch</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            tempor ipsum dolor sit amet.
                            labore</p>
                    </div>
                    <div className="row">
                        <div className="col-md-8 bg-white" data-aos="fade" data-aos-duration="1500">
                            <div>
                                <div className="d-flex justify-content-between align-items-center pb-4">
                                    <h5>Send US A Message</h5> <i className="fa-regular fa-envelope"></i>
                                </div>
                            </div>
                            <div id="contact-message"></div>
                            <form id="contact-form">
                                <div>
                                    <input type="text" name="name" placeholder="Name" required />
                                    <input type="email" name="email" placeholder="Email Address" required />
                                </div>
                                <div>
                                    <input type="number" name="phone" placeholder="Phone Number" required />
                                    <input type="text" name="address" placeholder="Address" required />
                                </div>
                                <textarea name="message" placeholder="Message"></textarea>
                                <div className="globalBtnActive mt-sm-5 mt-4 p-0">
                                    <ul>
                                        <li>
                                            <button type="submit">Submit
                                                <span></span><span></span><span></span><span></span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center align-items-center" data-aos="fade"
                            data-aos-duration="1500">
                            <div>
                                <h3>Contact Info</h3>
                                <div className="address">
                                    <div>
                                        <FontAwesomeIcon className='icon' icon={faHouse} />
                                        <a href="#">
                                            <p>Plaza X , XY Floor, Street, XYZ</p>
                                        </a>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon className='icon' icon={faEnvelope} />
                                        <a href="#">
                                            <p>Yourname@Email.Com</p>
                                        </a>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon className='icon' icon={faPhone} />
                                        <a href="#">
                                            <p>+123-456-7890</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center gap-4 mt-3">
                                    <a><FontAwesomeIcon className='link' icon={faLinkedin} /></a>
                                    <a><FontAwesomeIcon className='link' icon={faFacebookF} /></a>
                                    <a><FontAwesomeIcon className='link' icon={faTwitter} /></a>
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
