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
            <div className={'header-faq'}>
                <Navbar />
                {/* <!-- ====== 1.2 hero section ====== --> */}
                <section className="hero">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-11 col-md-12 text-center" data-aos="fade">
                                <div>
                                    <h2> {t('faq')}</h2>
                                    <div className="d-flex justify-content-center gap-4 pt-4">
                                        <nav aria-label="breadcrumb">
                                            <div className="breadcrumb d-flex gap-4 align-items-center">
                                                <div className="breadcrumb-item">
                                                    <Link to="/"> {t('home')}</Link>
                                                </div>
                                                <FontAwesomeIcon icon={faAnglesRight} />
                                                <div className="breadcrumb-item" aria-current="page">
                                                    {t('faq')}
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
                            <h4>{t('faq')}</h4>
                            <h2>{t('have answers, will travel')}</h2>
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
                                        The number of people on your trip will vary depending on factors such as the destination, type of tour, and availability. We strive to provide you with the best experience possible while considering your preferences. Once you have chosen a specific tour or package, we can provide you with more information about the expected group size.
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
                                        Absolutely! We offer special discounts for family bookings. We believe in the joy of traveling together as a family and want to make it more affordable for you. Please reach out to our team to discuss the details and available discounts for your family booking.
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
                                        Our most booked destinations in Vietnam vary depending on the preferences and interests of our customers. However, some of the popular destinations that are frequently booked by travelers include Hanoi, Ho Chi Minh City, Ha Long Bay, Hoi An, Da Nang, Nha Trang, and Mekong Delta. These destinations offer a diverse range of experiences, from cultural immersion to natural beauty and historical landmarks. We have a wide selection of itineraries and packages available for these destinations, tailored to suit different travel styles and durations. Feel free to explore our website further to find more information on these destinations and the experiences they offer.
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
                                        Our refund policy is designed to provide our customers with clarity and fairness in case they need to cancel or modify their bookings. However, specific refund policies can vary depending on the type of service booked, such as flights, hotels, or tour packages. We recommend reviewing the terms and conditions provided during the booking process or contacting our customer support directly for detailed information on our refund policy.
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
