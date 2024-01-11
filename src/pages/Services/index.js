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
            <div className={'header-blog'}>
                <Navbar />
                {/* <!-- ====== 1.2 hero section ====== --> */}
                <section className="hero">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-11 col-md-12 text-center" data-aos="fade">
                                <div>
                                    <h2>Our Services</h2>
                                    <div className="d-flex justify-content-center gap-4 pt-4">
                                        <nav aria-label="breadcrumb">
                                            <div className="breadcrumb d-flex gap-4 align-items-center">
                                                <div className="breadcrumb-item">
                                                    <Link to="/">Home</Link>
                                                </div>
                                                <FontAwesomeIcon icon={faAnglesRight} />
                                                <div className="breadcrumb-item" aria-current="page">
                                                    Services
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
                                <h4>Our Services</h4>
                                <h2>Join The Adventure With Stories</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s,
                                </p>
                                <div className="row align-items-center gap-lg-3 gap-md-4 text-lg-start text-center">
                                    <div className="col-md-3">
                                        <div>
                                            <figure>
                                                <img src={service1} alt="servicesIcon" />
                                            </figure>
                                            <h6>Custom Destinations</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <figure>
                                                <img src={service3} alt="servicesIcon" />
                                            </figure>
                                            <h6>Unforgettable Moments</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <figure>
                                                <img src={service2} alt="servicesIcon" />
                                            </figure>
                                            <h6>Competitive Pricings</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-md-start justify-content-center mt-lg-3 mt-md-3 mt-4">
                                    <Button className="globalBtnActive" to="/services">
                                        See all services
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-5 mt-md-0 mt-5"
                            data-aos="fade-up"
                            data-aos-easing="ease-in-out-quad"
                        >
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
                    <div
                        className="position-relative z-2"
                        data-aos="fade"
                        data-aos-duration="2000"
                    >
                        <h4>Why choose us</h4>
                        <h2>Let Us Show You The Beauty Of The World</h2>
                        <div className="mt-lg-5 mt-md-5">
                            <Button to="/contact">Contact Us</Button>
                        </div>
                    </div>
                </div>
                <div className="chooseCrads position-relative z-2">
                    <div className="container">
                        <div className="row gap-md-0 gap-4 justify-content-center card-text">
                            <div
                                className="col-lg-3 col-md-4"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div>
                                    <figure>
                                        <img src={choose1} alt="chooseIcon" />
                                    </figure>
                                    <h6>Tour and Travel</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                                        do eiusmod tempor incididunt
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-lg-3 col-md-4"
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                <div>
                                    <figure>
                                        <img src={choose2} alt="chooseIcon" />
                                    </figure>
                                    <h6>campus</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                                        do eiusmod tempor incididunt
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-lg-3 col-md-4"
                                data-aos="fade-up"
                                data-aos-delay="900"
                            >
                                <div>
                                    <figure>
                                        <img src={choose3} alt="chooseIcon" />
                                    </figure>
                                    <h6>Adventure Tour</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                                        do eiusmod tempor incididunt
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
                                    <h6>photography</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                                        do eiusmod tempor incididunt
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
                            <h3>Special Offer for Couples</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt.
                            </p>
                            <div className="offer">
                                <img src={images.special1} alt="discount" />
                                <div className="overlaytwo">
                                    <div className="overlay_text">
                                        <h3>Discount up 50%</h3>
                                        <div className="mt-lg-5 mt-4">
                                            <Button>Book Now</Button>
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
                                        <h3>Discount up 50%</h3>
                                        <div className="mt-lg-5 mt-4">
                                            <Button>Book Now</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3>Special Offer on Adventure tours</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt.
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
