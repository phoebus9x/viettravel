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

function Blog() {
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
                                    <h2>Our Blogs</h2>
                                    <div className="d-flex justify-content-center gap-4 pt-4">
                                        <nav aria-label="breadcrumb">
                                            <div className="breadcrumb d-flex gap-4 align-items-center">
                                                <div className="breadcrumb-item">
                                                    <Link to="/">Home</Link>
                                                </div>
                                                <FontAwesomeIcon icon={faAnglesRight} />
                                                <div className="breadcrumb-item" aria-current="page">
                                                    Blog
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

            {/* <!-- ====== 1.15 blog section ====== --> */}
            <section id="blog">
                <div className="container">
                    <div data-aos="fade" data-aos-duration="2000">
                        <h4>Our Blogs</h4>
                        <h2>Timeless Adventures Await with Timeless Stories.</h2>
                    </div>
                    <div className="blogCards mt-lg-5 mt-md-4">
                        <div className="row gap-4 justify-content-center card-text">
                            <div className="col-md-4 col-sm-9 col-11" data-aos="fade-up" data-aos-delay="100">
                                <div>
                                    <figure>
                                        <img src={images.blog1} alt="tour-img" />
                                    </figure>
                                    <a href="#">
                                        <p className="blogCategory">Traveller</p>
                                    </a>
                                    <a href="#">
                                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
                                    </a>
                                    <p>
                                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Dolore Magna Aliqua….
                                    </p>
                                    <a href="#">
                                        Read More <FontAwesomeIcon icon={faArrowRight} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-9 col-11" data-aos="fade-up" data-aos-delay="500">
                                <div>
                                    <figure>
                                        <img src={images.blog2} alt="tour-img" />
                                    </figure>
                                    <a href="#">
                                        <p className="blogCategory">Vacation</p>
                                    </a>
                                    <a href="#">
                                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
                                    </a>
                                    <p>
                                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Dolore Magna Aliqua….
                                    </p>
                                    <a href="#">
                                        Read More
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-9 col-11" data-aos="fade-up" data-aos-delay="900">
                                <div>
                                    <figure>
                                        <img src={images.blog3} alt="tour-img" />
                                    </figure>
                                    <a href="#">
                                        <p className="blogCategory">Boating</p>
                                    </a>
                                    <a href="#">
                                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
                                    </a>
                                    <p>
                                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Dolore Magna Aliqua….
                                    </p>
                                    <a href="#">
                                        Read More <FontAwesomeIcon icon={faArrowRight} />
                                    </a>
                                </div>
                            </div>
                            {/* ----------- */}
                            <div className="col-md-4 col-sm-9 col-11" data-aos="fade-up" data-aos-delay="500">
                                <div>
                                    <figure>
                                        <img src={images.blog2} alt="tour-img" />
                                    </figure>
                                    <a href="#">
                                        <p className="blogCategory">Vacation</p>
                                    </a>
                                    <a href="#">
                                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
                                    </a>
                                    <p>
                                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Dolore Magna Aliqua….
                                    </p>
                                    <a href="#">
                                        Read More
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </a>
                                </div>
                            </div>
                            {/* ----------- */}
                            <div className="col-md-4 col-sm-9 col-11" data-aos="fade-up" data-aos-delay="500">
                                <div>
                                    <figure>
                                        <img src={images.blog2} alt="tour-img" />
                                    </figure>
                                    <a href="#">
                                        <p className="blogCategory">Vacation</p>
                                    </a>
                                    <a href="#">
                                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
                                    </a>
                                    <p>
                                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Dolore Magna Aliqua….
                                    </p>
                                    <a href="#">
                                        Read More
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </a>
                                </div>
                            </div>
                            {/* ----------- */}
                            <div className="col-md-4 col-sm-9 col-11" data-aos="fade-up" data-aos-delay="500">
                                <div>
                                    <figure>
                                        <img src={images.blog2} alt="tour-img" />
                                    </figure>
                                    <a href="#">
                                        <p className="blogCategory">Vacation</p>
                                    </a>
                                    <a href="#">
                                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
                                    </a>
                                    <p>
                                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Dolore Magna Aliqua….
                                    </p>
                                    <a href="#">
                                        Read More
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.15 blog section ====== --> */}
        </div>
    );
}

export default Blog;
