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
import { faAnglesRight, faArrowRight, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';

function Destinations() {
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
                                    <h2>Destinations</h2>
                                    <div className="d-flex justify-content-center gap-4 pt-4">
                                        <nav aria-label="breadcrumb">
                                            <div className="breadcrumb d-flex gap-4 align-items-center">
                                                <div className="breadcrumb-item">
                                                    <Link to="/">Home</Link>
                                                </div>
                                                <FontAwesomeIcon icon={faAnglesRight} />
                                                <div className="breadcrumb-item" aria-current="page">
                                                    Destinations
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
            {/* <!-- ====== 1.14 about section ====== --> */}
            <section id="about" className="about">
                <div className="blueBg">
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10" data-aos="fade-up">
                            <form id="about-form"
                                className="d-flex gap-lg-2 gap-md-1 gap-sm-4 gap-3 justify-content-evenly align-items-md-center">
                                <div id="about-message"></div>
                                <div>
                                    <h6>Name</h6>
                                    <input type="text" name="name" placeholder="Your Name" required />
                                </div>
                                <div>
                                    <h6>Destination</h6>
                                    <select name="country" id="destination">
                                        <option value="destination" selected disabled>Destination</option>
                                        <option value="turkey">Turkey</option>
                                        <option value="sweden">Sweden</option>
                                        <option value="indonesia">Indonesia</option>
                                    </select>
                                </div>
                                <div>
                                    <h6>Tour Days</h6>
                                    <input type="date" name="name" required />
                                </div>
                                <div className="globalBtn">
                                    <ul>
                                        <li>
                                            <button type="submit">Book Now
                                                <span></span><span></span><span></span><span></span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.14 about section ====== --> */}

            {/* <!-- ====== 1.6 tours section ====== --> */}
            <section id="tour">
                <div className="container">
                    <div data-aos="fade" data-aos-duration="2000">
                        <h4>Tour</h4>
                        <h2>Live Your Life Through Travel</h2>
                        <div className="d-flex flex-md-row flex-column gap-3 justify-content-between align-items-center mt-3">
                            <div className="tourPara">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <Button className="globalBtnActive" to="/destinations">
                                View all
                            </Button>
                        </div>
                    </div>
                    <div className="tourCards card-text mt-5">
                        <div className="row gap-4">
                            <div
                                className="col-md-4 col-sm-5 col-11"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div>
                                    <figure>
                                        <img src={images.tour1} alt="tour-img" />
                                    </figure>
                                    <h6>Explore beauty of Turkey</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, sit consecte adipiscing elit,
                                        sed
                                    </p>
                                    <a href="#">
                                        Learn More <FontAwesomeIcon icon={faArrowRight} />
                                    </a>
                                </div>
                            </div>
                            <div
                                className="col-md-4 col-sm-5 col-11"
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                <div>
                                    <figure>
                                        <img src={images.tour2} alt="tour-img" />
                                    </figure>
                                    <h6>Explore beauty of Sweden</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, sit consecte adipiscing elit,
                                        sed
                                    </p>
                                    <a href="#">
                                        Learn More <FontAwesomeIcon icon={faArrowRight} />
                                    </a>
                                </div>
                            </div>
                            <div
                                className="col-md-4 col-sm-5 col-11"
                                data-aos="fade-up"
                                data-aos-delay="900"
                            >
                                <div>
                                    <figure>
                                        <img src={images.tour3} alt="tour-img" />
                                    </figure>
                                    <h6>Explore beauty of Indonesia</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, sit consecte adipiscing elit,
                                        sed
                                    </p>
                                    <a href="#">
                                        Learn More <FontAwesomeIcon icon={faArrowRight} />
                                    </a>
                                </div>
                            </div>
                            <div
                                className="col-md-4 col-sm-5 col-11"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div>
                                    <figure>
                                        <img src={images.tour4} alt="tour-img" />
                                    </figure>
                                    <h6>Explore beauty of Pakistan</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, sit consecte adipiscing elit,
                                        sed
                                    </p>
                                    <a href="#">
                                        Learn More
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </a>
                                </div>
                            </div>
                            <div
                                className="col-md-4 col-sm-5 col-11"
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                <div>
                                    <figure>
                                        <img src={images.tour5} alt="tour-img" />
                                    </figure>
                                    <h6>Explore beauty of Dubai</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, sit consecte adipiscing elit,
                                        sed
                                    </p>
                                    <a href="#">
                                        Learn More <FontAwesomeIcon icon={faArrowRight} />
                                    </a>
                                </div>
                            </div>
                            <div
                                className="col-md-4 col-sm-5 col-11"
                                data-aos="fade-up"
                                data-aos-delay="900"
                            >
                                <div>
                                    <figure>
                                        <img src={images.tour6} alt="tour-img" />
                                    </figure>
                                    <h6>Explore beauty of Paris</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, sit consecte adipiscing elit,
                                        sed
                                    </p>
                                    <a href="#">
                                        Learn More <FontAwesomeIcon icon={faArrowRight} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.6 tours section ====== --> */}

            {/* <!-- ====== 1.14 start planning section ====== --> */}
            <section id="planning">
                <div
                    className="planningContent"
                    data-aos="fade"
                    data-aos-duration="2000"
                >
                    <h3>
                        Start Planning Your Trip Now and <span>Get 30% Discount</span>
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam
                    </p>
                    <div className="mt-lg-4 mt-3">
                        <Button to="/contact">Book Now</Button>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.14 start planning section ====== --> */}
        </div>
    );
}

export default Destinations;
