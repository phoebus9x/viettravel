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

import choose1 from '~/assets/images/icon/choose-1.svg';
import choose2 from '~/assets/images/icon/choose-2.svg';
import choose3 from '~/assets/images/icon/choose-3.svg';
import choose4 from '~/assets/images/icon/choose-4.svg';
import service1 from '~/assets/images/icon/services-1.svg';
import service2 from '~/assets/images/icon/services-2.svg';
import service3 from '~/assets/images/icon/services-3.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faArrowRight, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';

function Services() {
    const { t } = useTranslation('home');
    // {t("key")}

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={'site-wrapper'}>
            <div className={'header-service'}>
                <Navbar />
                {/* <!-- ====== 1.2 hero section ====== --> */}
                <section className="hero">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-11 col-md-12 text-center" data-aos="fade">
                                <div>
                                    <h2>{t('our services')}</h2>
                                    <div className="d-flex justify-content-center gap-4 pt-4">
                                        <nav aria-label="breadcrumb">
                                            <div className="breadcrumb d-flex gap-4 align-items-center">
                                                <div className="breadcrumb-item">
                                                    <Link to="/">{t('home')}</Link>
                                                </div>
                                                <FontAwesomeIcon icon={faAnglesRight} />
                                                <div className="breadcrumb-item" aria-current="page">
                                                    {t('services')}
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

            {/* <!-- ====== 1.8 services section ====== --> */}
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div data-aos="fade" data-aos-duration="2000">
                                <h4>{t('our services')}</h4>
                                <h2>{t('join the adventure with stories')}</h2>
                                <p>
                                {t('Join the adventure with captivating stories, exploring and sharing memorable experiences from the worlds most wonderful travel destinationsJoin the adventure with captivating stories, exploring and sharing memorable experiences from the worlds most wonderful travel destinations')}s
                                </p>
                                <div className="row align-items-center gap-lg-3 gap-md-4 text-lg-start text-center">
                                    <div className="col-md-3">
                                        <div>
                                            <figure>
                                                <img src={service1} alt="servicesIcon" />
                                            </figure>
                                            <h6>{t('custom destinations')}</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <figure>
                                                <img src={service3} alt="servicesIcon" />
                                            </figure>
                                            <h6>{t('unforgettable moments')}</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <figure>
                                                <img src={service2} alt="servicesIcon" />
                                            </figure>
                                            <h6>{t('competitive pricings')}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-md-start justify-content-center mt-lg-3 mt-md-3 mt-4">
                                    <Button className="globalBtnActive" to="/services">
                                        {t('see all services')}
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 mt-md-0 mt-5" data-aos="fade-up" data-aos-easing="ease-in-out-quad">
                            <div>
                                <figure>
                                    <img src={images.service1} alt="service-img" />
                                </figure>
                                <figure>
                                    <img src={images.service2} alt="ser-Camera" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.8 services section ====== --> */}

            {/* <!-- ====== 1.7 why choose us section ====== --> */}
            <section id="choose">
                <div className="chooseBg">
                    <div className="position-relative z-2" data-aos="fade" data-aos-duration="2000">
                        <h4>{t('why choose us')}</h4>
                        <h2>{t('let us show you the beauty of the world')}</h2>
                        <div className="mt-lg-5 mt-md-5">
                            <Button to="/contact">Contact Us</Button>
                        </div>
                    </div>
                </div>
                <div className="chooseCrads position-relative z-2">
                    <div className="container">
                        <div className="row gap-md-0 gap-4 justify-content-center card-text">
                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100">
                                <div>
                                    <figure>
                                        <img src={choose1} alt="chooseIcon" />
                                    </figure>
                                    <h6>{t('tour and travel')}</h6>
                                    <p>
                                        {t('Unparalleled service quality, committed to providing an exceptional experience for our customers')}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="500">
                                <div>
                                    <figure>
                                        <img src={choose2} alt="chooseIcon" />
                                    </figure>
                                    <h6>{t('campus')}</h6>
                                    <p>
                                        {t('Unparalleled service quality, committed to providing an exceptional experience for our customers')}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="900">
                                <div>
                                    <figure>
                                        <img src={choose3} alt="chooseIcon" />
                                    </figure>
                                    <h6>{t('adventure tour')}</h6>
                                    <p>
                                        {t('Unparalleled service quality, committed to providing an exceptional experience for our customers')}
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-lg-3 col-md-4 d-lg-block d-none"
                                data-aos="fade-up"
                                data-aos-delay="1300"
                            >
                                <div>
                                    <figure>
                                        <img src={choose4} alt="chooseIcon" />
                                    </figure>
                                    <h6>{t('photography')}</h6>
                                    <p>
                                        {t('Unparalleled service quality, committed to providing an exceptional experience for our customers')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.7 why choose us section ====== --> */}

            {/* <!-- ====== 1.5 special offer section ====== --> */}
            <section id="special">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6" data-aos="fade-down">
                            <h3>{t('special offer for couples')}</h3>
                            <p>{t('Enjoy in a romantic getaway tailored exclusively for you and your loved one.')}</p>
                            <div className="offer">
                                <img src={images.special1} alt="discount" />
                                <div className="overlaytwo">
                                    <div className="overlay_text">
                                        <h3>{t('discount up 50%')}</h3>
                                        <div className="mt-lg-5 mt-4">
                                            <Button>{t('book now')}</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-md-0 mt-4" data-aos="fade-up">
                            <div className="offer">
                                <img src={images.special2} alt="discount" />
                                <div className="overlaytwo">
                                    <div className="overlay_text">
                                        <h3>{t('discount up 50%')}</h3>
                                        <div className="mt-lg-5 mt-4">
                                            <Button>{t('book now')}</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3>{t('special offer on adventure tours')}</h3>
                            <p>
                                {t(
                                    'Discover new horizons and surpass your limits with our discounted adventure tours.',
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.5 special offer section ====== --> */}
        </div>
    );
}

export default Services;
