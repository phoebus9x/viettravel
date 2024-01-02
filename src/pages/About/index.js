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
import { faAnglesRight, faArrowRight, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';

function About() {
    const { t } = useTranslation('home');
    // {t("key")}

    useEffect(() => {
        AOS.init();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 3000,
        slidesToShow: 5,
        autoplaySpeed: 0,
        arrows: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <div className={'site-wrapper'}>
            <div className={'header-about'}>
                <Navbar />
                {/* <!-- ====== 1.2 hero section ====== --> */}
                <section className="hero">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-11 col-md-12 text-center" data-aos="fade">
                                <div>
                                    <h2>About Us</h2>
                                    <div className="d-flex justify-content-center gap-4 pt-4">
                                        <nav aria-label="breadcrumb">
                                            <div className="breadcrumb d-flex gap-4 align-items-center">
                                                <div className="breadcrumb-item">
                                                    <Link to="/">Home</Link>
                                                </div>
                                                <FontAwesomeIcon icon={faAnglesRight} />
                                                <div className="breadcrumb-item" aria-current="page">
                                                    About
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

            {/* <!-- ====== 1.4 about section ====== --> */}
            <section id="about">
                <div className="container mt-lg-5 mt-md-5 mt-0 pt-lg-5 pt-md-4 pt-0">
                    <div className="row">
                        <div className="col-lg-8 col-md-9">
                            <div className="col-lg-10 col-md-9" data-aos="fade" data-aos-duration="2000">
                                <div>
                                    <h4>About Us</h4>
                                    <h2>With Us, You Are Always In For A Pleasant Surprise</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <div className="justify-content-md-start justify-content-center mt-3">
                                        <Button className="globalBtnActive" to="/destinations">
                                            Destinations
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-Image col-lg-4 col-sm-9 col-12 ">
                            <div className="aboutImg position-relative mt-md-0 mt-5" data-aos="fade-up">
                                <figure>
                                    <img src={images.about} alt="about-sec" />
                                </figure>
                                <div className="customer d-flex flex-column justify-content-between align-items-center">
                                    <div className="d-flex">
                                        <h2 className="count">25</h2>
                                        <h2>K+</h2>
                                    </div>
                                    <p>Happy Customers</p>
                                </div>
                                <div
                                    className="experience d-flex flex-column justify-content-between align-items-center"
                                    data-aos="fade-up"
                                >
                                    <div className="d-flex">
                                        <h2 className="count">15</h2>
                                        <h2>+</h2>
                                    </div>
                                    <p>Years of experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.4 about section ====== --> */}

            {/* <!-- ====== 1.9 what we do section ====== --> */}
            <section id="weDo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center">
                            <div className="weDo-video">
                                <div>
                                    <a className="video-play-button" href="#">
                                        <span className="fa-solid fa-play"></span>
                                    </a>
                                </div>
                                <figure>
                                    <img src={images.weDo} alt="weDo" />
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-content-center">
                            <div className="weDo-content d-flex flex-column justify-content-center align-items-start">
                                <div data-aos="fade" data-aos-duration="2000">
                                    <h4>What We Do</h4>
                                    <h2>Exploring The World Without Limits</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                    </p>
                                </div>
                                <div className="mt-3" data-aos="fade" data-aos-duration="2000">
                                    <Button className="globalBtnActive" to="/services">
                                        Learn More
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.9 what we do section ====== --> */}

            {/* <!-- ====== 1.7 why choose us section ====== --> */}
            <section id="choose">
                <div className="chooseBg">
                    <div className="position-relative z-2" data-aos="fade" data-aos-duration="2000">
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
                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100">
                                <div>
                                    <figure>
                                        <img src={choose1} alt="chooseIcon" />
                                    </figure>
                                    <h6>Tour and Travel</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
                                        incididunt
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="500">
                                <div>
                                    <figure>
                                        <img src={choose2} alt="chooseIcon" />
                                    </figure>
                                    <h6>campus</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
                                        incididunt
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="900">
                                <div>
                                    <figure>
                                        <img src={choose3} alt="chooseIcon" />
                                    </figure>
                                    <h6>Adventure Tour</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
                                        incididunt
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
                                        incididunt
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.7 why choose us section ====== --> */}

            {/* <!-- ====== 1.10 our team section ====== --> */}
            <section id="team">
                <div className="container">
                    <div data-aos="fade" data-aos-duration="2000">
                        <h4>Our Team</h4>
                        <h2>Experience The World With Us</h2>
                    </div>
                    <div className="row justify-content-md-between justify-content-center gap-md-0 gap-4">
                        <div className="col-md-4 col-sm-8 col-10" data-aos="fade-up" data-aos-delay="100">
                            <div className="teamCard">
                                <img src={images.team1} alt="team-img" />
                                <div className="overlaythree">
                                    <div className="overlay_text">
                                        <div className="d-flex justify-content-center gap-2">
                                            <a href="#">
                                                <FontAwesomeIcon icon={faFacebookF} />
                                            </a>
                                            <a href="#">
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </a>
                                            <a href="#">
                                                <FontAwesomeIcon icon={faPinterestP} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h6>James Bowel</h6>
                                <p>Tour Guide</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-8 col-10" data-aos="fade-up" data-aos-delay="500">
                            <div className="teamCard">
                                <img src={images.team2} alt="team-img" />
                                <div className="overlaythree">
                                    <div className="overlay_text">
                                        <div className="d-flex justify-content-center gap-2">
                                            <a href="#">
                                                <FontAwesomeIcon icon={faFacebookF} />
                                            </a>
                                            <a href="#">
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </a>
                                            <a href="#">
                                                <FontAwesomeIcon icon={faPinterestP} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h6>Lucy Amanda</h6>
                                <p>Tour Guide</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-8 col-10" data-aos="fade-up" data-aos-delay="900">
                            <div className="teamCard">
                                <img src={images.team3} alt="team-img" />
                                <div className="overlaythree">
                                    <div className="overlay_text">
                                        <div className="d-flex justify-content-center gap-2">
                                            <a href="#">
                                                <FontAwesomeIcon icon={faFacebookF} />
                                            </a>
                                            <a href="#">
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </a>
                                            <a href="#">
                                                <FontAwesomeIcon icon={faPinterestP} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h6>Victoria Bells</h6>
                                <p>Tour Guide</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ====== End 1.10 our team section ====== --> */}

            {/* <!-- ====== 1.14 start planning section ====== --> */}
            <section id="planning">
                <div className="planningContent" data-aos="fade" data-aos-duration="2000">
                    <h3>
                        Start Planning Your Trip Now and <span>Get 30% Discount</span>
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam
                    </p>
                    <div className="mt-lg-4 mt-3">
                        <Button to="/contact">Book Now</Button>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.14 start planning section ====== --> */}

            {/* <!-- ====== 1.13 logoipsum section ====== --> */}
            <div id="logoipsum" {...settings}>
                <div className="container">
                    <div>
                        <div className="logoipsum-slider d-flex justify-content-between align-items-center">
                            <figure>
                                <img src={logoipsum1} alt="logoipsumImg" />
                            </figure>
                            <figure>
                                <img src={logoipsum2} alt="logoipsumImg" />
                            </figure>
                            <figure>
                                <img src={logoipsum3} alt="logoipsumImg" />
                            </figure>
                            <figure>
                                <img src={logoipsum4} alt="logoipsumImg" />
                            </figure>
                            <figure>
                                <img src={logoipsum5} alt="logoipsumImg" />
                            </figure>
                            <figure>
                                <img src={logoipsum1} alt="logoipsumImg" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ====== End 1.13 logoipsum section ====== --> */}
        </div>
    );
}

export default About;
