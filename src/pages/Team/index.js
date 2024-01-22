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



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faArrowRight, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Team() {
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
                                    <h2>{t('team')}</h2>
                                    <div className="d-flex justify-content-center gap-4 pt-4">
                                        <nav aria-label="breadcrumb">
                                            <div className="breadcrumb d-flex gap-4 align-items-center">
                                                <div className="breadcrumb-item">
                                                    <Link to="/">{t('home')}</Link>
                                                </div>
                                                <FontAwesomeIcon icon={faAnglesRight} />
                                                <div className="breadcrumb-item" aria-current="page">
                                                {t('team')}
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
            {/* <!-- ====== 1.10 our team section ====== --> */}
            <section id="team">
                <div className="container">
                    <div data-aos="fade" data-aos-duration="2000">
                        <h4>{t('our team')}</h4>
                        <h2>{t('experience the world with us')}</h2>
                    </div>
                    <div className="row justify-content-md-between justify-content-center gap-md-0 gap-4">
                        <div
                            className="col-md-4 col-sm-8 col-10"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
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
                                <p>{t('tour guide')}</p>
                            </div>
                        </div>
                        <div
                            className="col-md-4 col-sm-8 col-10"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
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
                                <p>{t('tour guide')}</p>
                            </div>
                        </div>
                        <div
                            className="col-md-4 col-sm-8 col-10"
                            data-aos="fade-up"
                            data-aos-delay="900"
                        >
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
                                <p>{t('tour guide')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.10 our team section ====== --> */}

        </div>
    );
}

export default Team;
