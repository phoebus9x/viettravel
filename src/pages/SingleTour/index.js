import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
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

function SingleTour() {
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
                                    <h2>{t('our blogs')}</h2>
                                    <div className="d-flex justify-content-center gap-4 pt-4">
                                        <nav aria-label="breadcrumb">
                                            <div className="breadcrumb d-flex gap-4 align-items-center">
                                                <div className="breadcrumb-item">
                                                    <Link to="/">{t('home')}</Link>
                                                </div>
                                                <FontAwesomeIcon icon={faAnglesRight} />
                                                <div className="breadcrumb-item" aria-current="page">
                                                    {t('blog')}
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
            <div className="site-wrapper">
                <div className="container">
                    <h1>Tour name</h1>
                    <div>
                        <Carousel>
                            <Carousel.Item>
                                <img src={images.blog1} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={images.blog2} alt="Second slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={images.blog3} alt="Third slide" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12 text-center">
                            {/* Images of the tour */}
                            <table style={{ width: '100%', textAlign: 'left', border: '1px solid black' }}>
                                <tr>
                                    <td
                                        style={{
                                            padding: '3px',
                                            width: '35%',
                                            border: '1px solid black',
                                        }}
                                    >
                                        Tour Detail
                                    </td>
                                    <td style={{ padding: '3px', width: '65%', border: '1px solid black' }}>
                                        A - B - C - D - E
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '3px', width: '35%', border: '1px solid black' }}>
                                        Duration
                                    </td>
                                    <td style={{ padding: '3px', width: '65%', border: '1px solid black' }}>3 days</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '3px', width: '35%', border: '1px solid black' }}>
                                        Price for adults
                                    </td>
                                    <td style={{ padding: '3px', width: '65%', border: '1px solid black' }}>100$</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '3px', width: '35%', border: '1px solid black' }}>
                                        Price for children
                                    </td>
                                    <td style={{ padding: '3px', width: '65%', border: '1px solid black' }}>70$</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '3px', width: '35%', border: '1px solid black' }}>
                                        Start day
                                    </td>
                                    <td style={{ padding: '3px', width: '65%', border: '1px solid black' }}>
                                        24/04/2024
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '3px', width: '35%', border: '1px solid black' }}>End day</td>
                                    <td style={{ padding: '3px', width: '65%', border: '1px solid black' }}>
                                        27/04/2024
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '3px', width: '35%', border: '1px solid black' }}>
                                        The number of participants
                                    </td>
                                    <td style={{ padding: '3px', width: '65%', border: '1px solid black' }}>30</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '3px', width: '35%', border: '1px solid black' }}>
                                        The number of tour bookings
                                    </td>
                                    <td style={{ padding: '3px', width: '65%', border: '1px solid black' }}>20</td>
                                </tr>
                            </table>
                        </div>
                        <div className="col-lg-4 col-md-12 text-center">
                            {/* Table with tour information */}
                            <div className="a">
                                <li>
                                    <a>Image 1</a>
                                    <span></span>
                                </li>
                                <li>
                                    <a>Image 2</a>
                                    <span></span>
                                </li>
                                <li>
                                    <a>Image 3</a>
                                    <span></span>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2>lịch trình cụ thể</h2>
                </div>
            </div>
        </div>
    );
}

export default SingleTour;
