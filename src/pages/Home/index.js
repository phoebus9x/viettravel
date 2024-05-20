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
// import "~/components/GlobalStyles/GlobalStyles.scss";
import TourComponent from '~/components/TourComponent';
import BlogComponent from '~/components/BlogComponent';

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
import { faArrowRight, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Home() {
    const { t } = useTranslation('home');
    // {t("key")}

    useEffect(() => {
        AOS.init();
    }, []);

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: images.headerSlider1,
            alt: 'slider-img',
        },
        {
            image: images.headerSlider2,
            alt: 'slider-img',
        },
        {
            image: images.headerSlider3,
            alt: 'slider-img',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    function showSlide() {
        return slides.map((slide, index) => (
            <div key={index} className={`slide1 ${index === currentSlide ? 'active' : 'inactive'}`}>
                <img src={slide.image} alt={slide.alt} />
            </div>
        ));
    }

    function nextSlide() {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }

    // const backgroundImageChooseSection = "~/assets/images/choose-img.png";

    // handle sent data to server email client subscribe
    const [emailSub, setEmailSub] = useState('');

    const handleChangeEmailSub = (event) => {
        setEmailSub(event.target.value);
    };

    const handleSubmitEmailSub = (event) => {
        event.preventDefault();
        const email = emailSub;
        console.log(email);
        axios
            .post('http://localhost:1110/v1/api/email-subscribe', { email: email })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        alert('bạn đã đăng ký thành công!');
    };

    const [dataTour, setDataTour] = useState([]);
    const [dataBlog, setDataBlog] = useState([]);

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
        axios
            .get(`http://localhost:1110/v1/api/blogs`)
            .then((response) => {
                setDataBlog(response.data.data);
                // Xử lý dữ liệu được lấy về ở đây
                console.log('blogData: ', response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching blog:', error);
                // Xử lý lỗi ở đây
            });
    };



    return (
        <div className={'site-wrapper'}>
            <div className={'header-slider'}>{showSlide()}</div>
            <div className={'overlay'}>
                <div className={'header-content'}>
                    <Navbar />
                    {/* <!-- ====== 1.2 hero section ====== --> */}
                    <section id="hero">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-11 col-md-12 text-center" data-aos="fade">
                                    <div>
                                        <h1>EXPLORE</h1>
                                        <h1>THE WORLD</h1>
                                        <p>{t('unlock the wonders of the world')}</p>
                                        <div className="mt-4">
                                            <Button to="/destinations">{t('discover now')}</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- ====== End 1.2 hero section ====== --> */}
                </div>
            </div>
            {/* <!-- ====== 1.3 features section ====== --> */}
            <section id="features">
                <div className="container card-text">
                    <div className="row">
                        <div className="col-md-3" data-aos="fade-up" data-aos-delay="100">
                            <div>
                                <figure>
                                    <img src={feature1} alt="featureIcon" />
                                </figure>
                                <h6>{t('map location')}</h6>
                                <p>{t('Discover the stunning location of your destination')}</p>
                            </div>
                        </div>
                        <div className="col-md-3" data-aos="fade-up" data-aos-delay="500">
                            <div>
                                <figure>
                                    <img src={feature2} alt="featureIcon" />
                                </figure>
                                <h6>{t('traveling bag')}</h6>
                                <p>
                                    {t('Prepare for your journey to explore the world with convenience and confidence')}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3" data-aos="fade-up" data-aos-delay="900">
                            <div>
                                <figure>
                                    <img src={feature3} alt="featureIcon" />
                                </figure>
                                <h6>{t('photography')}</h6>
                                <p>{t('Helps you store memorable moments with wonderful experiences')}</p>
                            </div>
                        </div>
                        <div className="col-md-3" data-aos="fade-up" data-aos-delay="1300">
                            <div>
                                <figure>
                                    <img src={feature4} alt="featureIcon" />
                                </figure>
                                <h6>{t('affordable prices')}</h6>
                                <p>{t('Discover our wide range of affordable prices')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.3 features section ====== --> */}

            {/* <!-- ====== 1.4 about section ====== --> */}
            <section id="about">
                <div className="blueBg"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-9">
                            <form
                                id="about-form"
                                className="d-flex gap-lg-2 gap-md-1 gap-sm-4 gap-3 justify-content-evenly align-items-md-center"
                                data-aos="fade-down"
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
                                        <option value="sweden">Ho Chi Minh City</option>
                                        <option value="indonesia">Da Nang City</option>
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
                                                {t('book now')} <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                            <div className="col-lg-10 col-md-9" data-aos="fade-up">
                                <div>
                                    <h4>{t('about us')}</h4>
                                    <h2>{t('with us, you are always in for a pleasant surprise')}</h2>
                                    <p>{t('With us, you will always experience delightful surprises.')}</p>
                                    <div className="justify-content-md-start justify-content-center mt-4">
                                        <Button className="globalBtnActive" to="/about">
                                            {t('learn more')}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-9 col-12 about-Image">
                            <div className="aboutImg position-relative" data-aos="fade-up">
                                <figure>
                                    <img src={images.about} alt="about-sec" />
                                </figure>
                                <div className="customer d-flex flex-column justify-content-between align-items-center">
                                    <div className="d-flex">
                                        <h2 className="count">25</h2>
                                        <h2>K+</h2>
                                    </div>
                                    <p>{t('happy customers')}</p>
                                </div>
                                <div
                                    className="experience d-flex flex-column justify-content-between align-items-center"
                                    data-aos="fade-up"
                                >
                                    <div className="d-flex">
                                        <h2 className="count">15</h2>
                                        <h2>+</h2>
                                    </div>
                                    <p>{t('years of experience')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.4 about section ====== --> */}

            {/* <!-- ====== 1.5 special offer section ====== --> */}
            <section id="special">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6" data-aos="fade-down">
                            <h3>{t('special offer for couples')}</h3>
                            <p>{t('Enjoy in a romantic getaway tailored exclusively for you and your loved one.')}</p>
                            <div className="offer">
                                <img src={images.special1} alt="discount" />
                                <div className="overlaytwo">
                                    <div className="overlay_text">
                                        <h3>{t('discount up 50%')}</h3>
                                        <div className="mt-lg-5 mt-4">
                                            <Button to="/destinations">{t('book now')}</Button>
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
                                        <h3>{t('discount up 50%')}</h3>
                                        <div className="mt-lg-5 mt-4">
                                            <Button to="/destinations">{t('book now')}</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3>{t('special offer on adventure tours')}</h3>
                            <p>
                                {t(
                                    'Discover new horizons and surpass your limits with our discounted adventure tours.',
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.5 special offer section ====== --> */}

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

            {/* <!-- ====== 1.7 why choose us section ====== --> */}
            <section id="choose">
                <div className="chooseBg">
                    <div className="position-relative z-2" data-aos="fade" data-aos-duration="2000">
                        <h4>{t('why choose us')}</h4>
                        <h2>{t('let us show you the beauty of the world')}</h2>
                        <div className="mt-lg-5 mt-md-5">
                            <Button to="/contact">{t('contact us')}</Button>
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
                                    <h6>{t('tour and travel')}</h6>
                                    <p>
                                        {t('Unparalleled service quality, committed to providing an exceptional experience for our customers')}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="500">
                                <div>
                                    <figure>
                                        <img src={choose2} alt="chooseIcon" />
                                    </figure>
                                    <h6>{t('campus')}</h6>
                                    <p>
                                        {t('Unparalleled service quality, committed to providing an exceptional experience for our customers')}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="900">
                                <div>
                                    <figure>
                                        <img src={choose3} alt="chooseIcon" />
                                    </figure>
                                    <h6>{t('adventure tour')}</h6>
                                    <p>
                                        {t('Unparalleled service quality, committed to providing an exceptional experience for our customers')}
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
                                    <h6>{t('photography')}</h6>
                                    <p>
                                        {t('Unparalleled service quality, committed to providing an exceptional experience for our customers')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.7 why choose us section ====== --> */}

            {/* <!-- ====== 1.8 services section ====== --> */}
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div data-aos="fade" data-aos-duration="2000">
                                <h4>{t('our services')}</h4>
                                <h2>{t('join the adventure with stories')}</h2>
                                <p>
                                    {t('Join the adventure with captivating stories, exploring and sharing memorable experiences from the worlds most wonderful travel destinationsJoin the adventure with captivating stories, exploring and sharing memorable experiences from the worlds most wonderful travel destinations')}
                                </p>
                                <div className="row align-items-center gap-lg-3 gap-md-4 text-lg-start text-center">
                                    <div className="col-md-3">
                                        <div>
                                            <figure>
                                                <img src={service1} alt="servicesIcon" />
                                            </figure>
                                            <h6>{t('custom destinations')}</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <figure>
                                                <img src={service3} alt="servicesIcon" />
                                            </figure>
                                            <h6>{t('unforgettable moments')}</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <figure>
                                                <img src={service2} alt="servicesIcon" />
                                            </figure>
                                            <h6>{t('competitive pricings')}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-md-start justify-content-center mt-lg-3 mt-md-3 mt-4">
                                    <Button className="globalBtnActive" to="/services">
                                        {t('see all services')}
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 mt-md-0 mt-5" data-aos="fade-up" data-aos-easing="ease-in-out-quad">
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
                                    <h4>{t('what we do')}</h4>
                                    <h2>{t('exploring the world without limits')}</h2>
                                    <p>
                                        {t(
                                            'our mission is to help you transcend the limitations of traditional travel, explore the boundless possibilities of Vietnam, and unlock extraordinary experiences.',
                                        )}
                                    </p>
                                </div>
                                <div className="mt-3" data-aos="fade" data-aos-duration="2000">
                                    <Button className="globalBtnActive" to="/services">
                                        {t('learn more')}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.9 what we do section ====== --> */}

            {/* <!-- ====== 1.10 our team section ====== --> */}
            <section id="team">
                <div className="container">
                    <div data-aos="fade" data-aos-duration="2000">
                        <h4>{t('our team')}</h4>
                        <h2>{t('experience the world with us')}</h2>
                    </div>
                    <div className="row justify-content-md-between justify-content-center gap-md-0 gap-4">
                        <div className="col-md-4 col-sm-8 col-10" data-aos="fade-up" data-aos-delay="100">
                            <div className="teamCard">
                                <img src={images.team1} alt="team-img" />
                                <div className="overlaythree">
                                    <div className="overlay_text">
                                        <div className="d-flex justify-content-center gap-2">
                                            <a href="https://www.facebook.com/doanhtu0512" target="_blank">
                                                <FontAwesomeIcon icon={faFacebookF} />
                                            </a>
                                            <a href="https://www.facebook.com/doanhtu0512" target="_blank">
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </a>
                                            <a href="https://www.facebook.com/doanhtu0512" target="_blank">
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
                        <div className="col-md-4 col-sm-8 col-10" data-aos="fade-up" data-aos-delay="500">
                            <div className="teamCard">
                                <img src={images.team2} alt="team-img" />
                                <div className="overlaythree">
                                    <div className="overlay_text">
                                        <div className="d-flex justify-content-center gap-2">
                                            <a href="https://www.facebook.com/doanhtu0512" target="_blank">
                                                <FontAwesomeIcon icon={faFacebookF} />
                                            </a>
                                            <a href="https://www.facebook.com/doanhtu0512" target="_blank">
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </a>
                                            <a href="https://www.facebook.com/doanhtu0512" target="_blank">
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
                        <div className="col-md-4 col-sm-8 col-10" data-aos="fade-up" data-aos-delay="900">
                            <div className="teamCard">
                                <img src={images.team3} alt="team-img" />
                                <div className="overlaythree">
                                    <div className="overlay_text">
                                        <div className="d-flex justify-content-center gap-2">
                                            <a href="https://www.facebook.com/anh24122003" target="_blank">
                                                <FontAwesomeIcon icon={faFacebookF} />
                                            </a>
                                            <a href="https://www.facebook.com/anh24122003" target="_blank">
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </a>
                                            <a href="https://www.facebook.com/anh24122003" target="_blank">
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
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa
                                            sed elementum tempus egestas sed. Diam in arcu cursus euismod. Dolor sed
                                            viverra ipsum nunc aliquet bibendum enim facilisis gravida
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
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa
                                            sed elementum tempus egestas sed. Diam in arcu cursus euismod. Dolor sed
                                            viverra ipsum nunc aliquet bibendum enim facilisis gravida
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
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa
                                            sed elementum tempus egestas sed. Diam in arcu cursus euismod. Dolor sed
                                            viverra ipsum nunc aliquet bibendum enim facilisis gravida
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
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa
                                            sed elementum tempus egestas sed. Diam in arcu cursus euismod. Dolor sed
                                            viverra ipsum nunc aliquet bibendum enim facilisis gravida
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.11 faq section ====== --> */}

            {/* <!-- ====== 1.12 testimonials section ====== --> */}
            <section id="testimonials">
                <div className="container">
                    <div className="row card-text justify-content-md-between justify-content-center gap-md-0 gap-3">
                        <div data-aos="fade" data-aos-duration="2000">
                            <h4>{t('testimonials')}</h4>
                            <h2>{t('we are all about your satisfaction')}</h2>
                        </div>
                        <div className="col-md-4 col-sm-8 col-11" data-aos="fade-up" data-aos-delay="100">
                            <div className="d-flex flex-column align-items-center justify-content-center">
                                <figure>
                                    <img src={images.testimonials1} alt="testimonialsImg" />
                                </figure>
                                <h6>Raisa Barker</h6>
                                <p>{t('tourist')}</p>
                                <div className="d-flex gap-2 mt-3 mb-4 pb-2">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <p>{t('cmt1')}</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-8 col-11" data-aos="fade-up" data-aos-delay="500">
                            <div className="d-flex flex-column align-items-center justify-content-center">
                                <figure>
                                    <img src={images.testimonials2} alt="testimonialsImg" />
                                </figure>
                                <h6>Terrence Baker</h6>
                                <p>{t('tourist')}</p>
                                <div className="d-flex gap-2 mt-3 mb-4 pb-2">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <p>{t('cmt2')}</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-8 col-11" data-aos="fade-up" data-aos-delay="900">
                            <div className="d-flex flex-column align-items-center justify-content-center">
                                <figure>
                                    <img src={images.testimonials3} alt="testimonialsImg" />
                                </figure>
                                <h6>Xiong Lee</h6>
                                <p>{t('tourist')}</p>
                                <div className="d-flex gap-2 mt-3 mb-4 pb-2">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <p>{t('cmt3')}</p>
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
                        <Button to="/destinations">{t('book now')}</Button>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.14 start planning section ====== --> */}

            {/* <!-- ====== 1.15 blog section ====== --> */}
            <section id="blog">
                <div className="container">
                    <div data-aos="fade" data-aos-duration="2000">
                        <h4>{t('our blogs')}</h4>
                        <h2>{t('timeless adventures await with timeless stories')}</h2>
                    </div>
                    <div className="blogCards mt-lg-5 mt-md-4">
                        <div className="row gap-4 justify-content-center card-text">
                        {dataBlog.map((result, index) => (
                                <BlogComponent key={index} data={result} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.15 blog section ====== --> */}

            {/* <!-- ====== 1.16 newsletter section ====== --> */}
            <section id="newsletter">
                <div className="container">
                    <div data-aos="fade" data-aos-duration="2000">
                        <h4>{t('newsletter')}</h4>
                        <h2>{t('stay in the know, without having to do anything')}</h2>
                    </div>
                    <div className="row justify-content-between" data-aos="fade" data-aos-duration="2000">
                        <div className="col-md-5">
                            <div>
                                <p>
                                    {t(
                                        'subscribe to our newsletter and stay updated on the latest travel news , effortlessly!',
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="d-md-flex justify-content-lg-end justify-content-md-end justify-content-center">
                                <form id="newsletter-form">
                                    <div id="newsletter-message"></div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder={t('enter your email address')}
                                        value={emailSub}
                                        onChange={handleChangeEmailSub}
                                        required
                                    />
                                    {/* <div className="globalBtnActive">
                                        <ul>
                                            <li>
                                                <button type="submit">
                                                    {t('subscribe')} <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div> */}
                                    <Button onClick={handleSubmitEmailSub} className="globalBtnActive">
                                        Subscribe
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== End 1.16 newsletter section ====== --> */}
        </div>
    );
}

export default Home;
