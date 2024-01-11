import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import '~/components/css/All.scss';
import '~/components/css/Reponsive.scss';
import images from '~/assets/images';
import Navbar from '~/Layout/components/Navbar';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import logoipsum1 from '~/assets/images/icon/logoipsum-1.svg';
import logoipsum2 from '~/assets/images/icon/logoipsum-2.svg';
import logoipsum3 from '~/assets/images/icon/logoipsum-3.svg';
import logoipsum4 from '~/assets/images/icon/logoipsum-4.svg';
import logoipsum5 from '~/assets/images/icon/logoipsum-5.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faArrowRight, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';

function Testimonials() {
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
                                    <h2>Testimonials</h2>
                                    <div className="d-flex justify-content-center gap-4 pt-4">
                                        <nav aria-label="breadcrumb">
                                            <div className="breadcrumb d-flex gap-4 align-items-center">
                                                <div className="breadcrumb-item">
                                                    <Link to="/">Home</Link>
                                                </div>
                                                <FontAwesomeIcon icon={faAnglesRight} />
                                                <div className="breadcrumb-item" aria-current="page">
                                                    Testimonials
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

            {/* <!-- ====== 1.12 testimonials section ====== --> */}
            <section id="testimonials">
                <div className="container">
                    <div className="row card-text justify-content-md-between justify-content-center gap-md-0 gap-3">
                        <div data-aos="fade" data-aos-duration="2000">
                            <h4>Testimonials</h4>
                            <h2>We're All About Your Satisfaction</h2>
                        </div>
                        <div
                            className="col-md-4 col-sm-8 col-11"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="d-flex flex-column align-items-center justify-content-center">
                                <figure>
                                    <img src={images.testimonials1} alt="testimonialsImg" />
                                </figure>
                                <h6>Raisa Barker</h6>
                                <p>Tourist</p>
                                <div className="d-flex gap-2 mt-3 mb-4 pb-2">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-md-4 col-sm-8 col-11"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <div className="d-flex flex-column align-items-center justify-content-center">
                                <figure>
                                    <img src={images.testimonials2} alt="testimonialsImg" />
                                </figure>
                                <h6>Terrence Baker</h6>
                                <p>Tourist</p>
                                <div className="d-flex gap-2 mt-3 mb-4 pb-2">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-md-4 col-sm-8 col-11"
                            data-aos="fade-up"
                            data-aos-delay="900"
                        >
                            <div className="d-flex flex-column align-items-center justify-content-center">
                                <figure>
                                    <img src={images.testimonials3} alt="testimonialsImg" />
                                </figure>
                                <h6>Xiong Lee</h6>
                                <p>Tourist</p>
                                <div className="d-flex gap-2 mt-3 mb-4 pb-2">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.12 testimonials section ====== --> */}

            {/* <!-- ====== 1.13 logoipsum section ====== --> */}
            <div id="logoipsum">
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

export default Testimonials;
