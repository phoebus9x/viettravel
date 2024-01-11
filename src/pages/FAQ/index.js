import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import '~/components/css/All.scss';
import '~/components/css/Reponsive.scss';
import Navbar from '~/Layout/components/Navbar';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faArrowRight, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';

function FAQ() {
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
                                    <h2>FAQ</h2>
                                    <div className="d-flex justify-content-center gap-4 pt-4">
                                        <nav aria-label="breadcrumb">
                                            <div className="breadcrumb d-flex gap-4 align-items-center">
                                                <div className="breadcrumb-item">
                                                    <Link to="/">Home</Link>
                                                </div>
                                                <FontAwesomeIcon icon={faAnglesRight} />
                                                <div className="breadcrumb-item" aria-current="page">
                                                    FAQ
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

            {/* <!-- ====== 1.11 faq section ====== --> */}
            <section id="faq">
                <div className="container">
                    <div className="faq-section">
                        <div data-aos="fade">
                            <h4>FAQ</h4>
                            <h2>Have Answers, Will Travel.</h2>
                        </div>
                        <div className="accordion" id="accordionExample" data-aos="fade">
                            <div className="accordion-item">
                                <h6 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        How many people will be on my trip?
                                    </button>
                                </h6>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. In vitae turpis massa sed elementum tempus egestas
                                            sed. Diam in arcu cursus euismod. Dolor sed viverra ipsum
                                            nunc aliquet bibendum enim facilisis gravida
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h6 className="accordion-header" id="headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        Do you offer discount on family bookings?
                                    </button>
                                </h6>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. In vitae turpis massa sed elementum tempus egestas
                                            sed. Diam in arcu cursus euismod. Dolor sed viverra ipsum
                                            nunc aliquet bibendum enim facilisis gravida
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h6 className="accordion-header" id="headingThree">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        What are your Most Booked Destinations?
                                    </button>
                                </h6>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. In vitae turpis massa sed elementum tempus egestas
                                            sed. Diam in arcu cursus euismod. Dolor sed viverra ipsum
                                            nunc aliquet bibendum enim facilisis gravida
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h6 className="accordion-header" id="headingFour">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                        What is your refund policy?
                                    </button>
                                </h6>
                                <div
                                    id="collapseFour"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. In vitae turpis massa sed elementum tempus egestas
                                            sed. Diam in arcu cursus euismod. Dolor sed viverra ipsum
                                            nunc aliquet bibendum enim facilisis gravida
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.11 faq section ====== --> */}
        </div>
    );
}

export default FAQ;
