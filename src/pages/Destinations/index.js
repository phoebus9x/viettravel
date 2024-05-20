import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import axios from 'axios';

import '~/components/css/All.scss';
import '~/components/css/Reponsive.scss';
import images from '~/assets/images';
import Navbar from '~/Layout/components/Navbar';
import Button from '~/components/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faArrowRight, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';

import TourComponent from '~/components/TourComponent';

function Destinations() {
    const { t } = useTranslation('home');
    // {t("key")}

    useEffect(() => {
        AOS.init();
    }, []);

    const [dataTour, setDataTour] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        axios
            .get(`http://localhost:1110/v1/api/tours`)
            .then((response) => {
                setDataTour(response.data.data);
                // Xử lý dữ liệu được lấy về ở đây
                console.log('TourData: ', response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching Tour:', error);
                // Xử lý lỗi ở đây
            });
    };

    return (
        <div className={'site-wrapper'}>
            <div className={'header-destination'}>
                <Navbar />
                {/* <!-- ====== 1.2 hero section ====== --> */}
                <section className="hero">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-11 col-md-12 text-center" data-aos="fade">
                                <div>
                                    <h2>{t('destinations')}</h2>
                                    <div className="d-flex justify-content-center gap-4 pt-4">
                                        <nav aria-label="breadcrumb">
                                            <div className="breadcrumb d-flex gap-4 align-items-center">
                                                <div className="breadcrumb-item">
                                                    <Link to="/">{t('home')}</Link>
                                                </div>
                                                <FontAwesomeIcon icon={faAnglesRight} />
                                                <div className="breadcrumb-item" aria-current="page">
                                                    {t('destinations')}
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
                <div className="blueBg"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10" data-aos="fade-up">
                            <form
                                id="about-form"
                                className="d-flex gap-lg-2 gap-md-1 gap-sm-4 gap-3 justify-content-evenly align-items-md-center"
                            >
                                <div id="about-message"></div>
                                <div>
                                    <h6>{t('name')}</h6>
                                    <input type="text" name="name" placeholder={t('your name')} required />
                                </div>
                                <div>
                                    <h6>{t('destination')}</h6>
                                    <select name="country" id="destination">
                                        <option value="destination" selected disabled>
                                            {t('destination')}
                                        </option>
                                        <option value="turkey">Ha Noi City</option>
                                        <option value="sweden">Da Nang City</option>
                                        <option value="indonesia">Ho Chi Minh City</option>
                                    </select>
                                </div>
                                <div>
                                    <h6>{t('tour days')}</h6>
                                    <input type="date" name="name" required />
                                </div>
                                <div className="globalBtn">
                                    <ul>
                                        <li>
                                            <button type="submit">
                                                {t('book now')}
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
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.14 about section ====== --> */}

            {/* <!-- ====== 1.6 tours section ====== --> */}

            <section id="tour">
                <div className="container">
                    <div data-aos="fade" data-aos-duration="2000">
                        <h4>{t('tour')}</h4>
                        <h2>{t('live your life through travel')}</h2>
                        <div className="d-flex flex-md-row flex-column gap-3 justify-content-between align-items-center mt-3">
                            <div className="tourPara">
                                <p>
                                    {t('Experience the worlds wonders and live your life to the fullest through immersive travel adventures')}
                                </p>
                            </div>
                            <Button className="globalBtnActive" to="/destinations">
                                {t('view all')}
                            </Button>
                        </div>
                    </div>
                    <div className="tourCards card-text mt-5">
                        <div className="row gap-4">
                            {/* // loading data tour */}
                            {dataTour.map((result, index) => (
                                <TourComponent key={index} data={result} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.6 tours section ====== --> */}

            {/* <!-- ====== 1.14 start planning section ====== --> */}
            <section id="planning">
                <div className="planningContent" data-aos="fade" data-aos-duration="2000">
                    <h3>
                        {t('start planning your trip now and ')} <span>{t('get 30% discount')}</span>
                    </h3>
                    <p>
                        {t(
                            'plan your dream vacation today and indulge in unforgettable experiences with an exclusive 30% discount!',
                        )}
                    </p>
                    <div className="mt-lg-4 mt-3">
                        <Button to="/contact"> {t('book now')}</Button>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.14 start planning section ====== --> */}
        </div>
    );
}

export default Destinations;
