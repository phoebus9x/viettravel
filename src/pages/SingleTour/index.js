import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { format } from 'date-fns';
import '~/components/css/All.scss';
import '~/components/css/Reponsive.scss';
import images from '~/assets/images';
import Navbar from '~/Layout/components/Navbar';
import Button from '~/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { submitTour } from '~/redux/tourSlice';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faArrowRight, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

function SingleTour() {
    const { t } = useTranslation('home');
    // {t("key")}
    const dispatch = useDispatch();

    useEffect(() => {
        AOS.init();
    }, []);

    const [dataTour, setDataTour] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        axios
            .get(`http://localhost:1110/v1/api/tours`)
            .then((response) => {
                const data = {};
                data._id = response.data.data[0]._id;
                data.title = response.data.data[0].title;
                data.trip = response.data.data[0].trip;
                data.short = response.data.data[0].short;
                data.img1 = response.data.data[0].img1;
                data.img2 = response.data.data[0].img2;
                data.img3 = response.data.data[0].img3;
                data.duration = response.data.data[0].duration;
                data.price_adults = response.data.data[0].price_adults;
                data.price_children = response.data.data[0].price_children;
                data.start_date = response.data.data[0].start_date;
                data.end_date = response.data.data[0].end_date;
                data.place_start = response.data.data[0].place_start;
                data.number_of_participants = response.data.data[0].number_of_participants;
                data.detail = response.data.data[0].detail;
                setDataTour(data);

                // Xử lý dữ liệu được lấy về ở đây
                console.log('dataTour: ', data);
            })
            .catch((error) => {
                console.error('Error fetching tour:', error);
                // Xử lý lỗi ở đây
            });
    };

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClickLearnMore = async (dataTour) => {
        dispatch(submitTour(dataTour));
        console.log("đã dispatch lại data", dataTour);
        // fetchData();
    }

    const linkStyle = {
        color: isHovered ? '#fb8e26' : 'black',
        marginTop: '20px',
        // textDecoration: 'underline',
        // Các thuộc tính khác cho trạng thái không hover
    };

    const tourState = useSelector((state) => state.tour.tour);
    console.log('tourState', tourState);
    const start_date_string = tourState.start_date.toString();
    const start_date = format(new Date(start_date_string), 'dd/MM/yyyy');
    const end_date_string = tourState.end_date.toString();
    const end_date = format(new Date(end_date_string), 'dd/MM/yyyy');
    return (
        <div className={'site-wrapper1'}>
            <div className={'header-blog'}>
                <Navbar />
                {/* <!-- ====== 1.2 hero section ====== --> */}
                <section className="hero">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-11 col-md-12 text-center" data-aos="fade">
                                <div>
                                    <h2>{t('tour')}</h2>
                                    <div className="d-flex justify-content-center gap-4 pt-4">
                                        <nav aria-label="breadcrumb">
                                            <div className="breadcrumb d-flex gap-4 align-items-center">
                                                <div className="breadcrumb-item">
                                                    <Link to="/">{t('home')}</Link>
                                                </div>
                                                <FontAwesomeIcon icon={faAnglesRight} />
                                                <div className="breadcrumb-item" aria-current="page">
                                                    {t('tour')}
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
                    <h2 style={{ margin: '50px 0 20px 0', textAlign: 'center' }}>{tourState.title}</h2>
                    <div
                        style={{
                            width: '1000px',
                            height: '400px',
                            margin: '0 auto',
                        }}
                    >
                        <Carousel
                            style={{
                                width: '1000px',
                                height: '400px',
                                margin: '0 auto',
                                backgroundColor: '#CCCED1',
                                display: 'flex',
                                justifyContent: 'center', // Center the items horizontally
                                alignItems: 'center', // Center the items vertically
                            }}
                        >
                            <Carousel.Item style={{ textAlign: 'center', height: '400px' }}>
                                <img
                                    src={tourState.img1}
                                    alt="First slide"
                                    style={{ display: 'inline-block', height: '100%', width: 'auto' }}
                                />
                            </Carousel.Item>
                            <Carousel.Item style={{ textAlign: 'center', height: '400px' }}>
                                <img
                                    src={images.blog2}
                                    alt="Second slide"
                                    style={{ display: 'inline-block', height: '100%', width: 'auto' }}
                                />
                            </Carousel.Item>
                            <Carousel.Item style={{ textAlign: 'center', height: '400px' }}>
                                <img
                                    src={images.blog3}
                                    alt="Third slide"
                                    style={{ display: 'inline-block', height: '100%', width: 'auto' }}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="row justify-content-center" style={{ margin: '20px 0' }}>
                        <div className="col-lg-8 col-md-12">
                            {/* Images of the tour */}
                            <h3 style={{ marginBottom: '15px' }}>№1 {t('tour overview')}</h3>
                            <table style={{ width: '100%', textAlign: 'left', border: '1px solid black' }}>
                                <tr>
                                    <td
                                        style={{
                                            padding: '3px',
                                            width: '35%',
                                            border: '1px solid black',
                                        }}
                                    >
                                        {t('trip')}
                                    </td>
                                    <td style={{ padding: '3px', width: '65%', border: '1px solid black' }}>
                                        {tourState.trip}
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '3px', width: '35%', border: '1px solid black' }}>
                                        {t('duration')}
                                    </td>
                                    <td style={{ padding: '3px', width: '65%', border: '1px solid black' }}>
                                        {tourState.duration} {t('days')}
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '3px', width: '35%', border: '1px solid black' }}>
                                        {t('price for adults')}
                                    </td>
                                    <td style={{ padding: '3px', width: '65%', border: '1px solid black' }}>
                                        {tourState.price_adults}$
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '3px', width: '35%', border: '1px solid black' }}>
                                        {t('price for children')}
                                    </td>
                                    <td style={{ padding: '3px', width: '65%', border: '1px solid black' }}>
                                        {tourState.price_children}$
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '3px', width: '35%', border: '1px solid black' }}>
                                        {t('start day')}
                                    </td>
                                    <td style={{ padding: '3px', width: '65%', border: '1px solid black' }}>
                                        {start_date}
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '3px', width: '35%', border: '1px solid black' }}>
                                        {t('end day')}
                                    </td>
                                    <td style={{ padding: '3px', width: '65%', border: '1px solid black' }}>
                                        {end_date}
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '3px', width: '35%', border: '1px solid black' }}>
                                        {t('place start')}
                                    </td>
                                    <td style={{ padding: '3px', width: '65%', border: '1px solid black' }}>
                                        {tourState.place_start}
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '3px', width: '35%', border: '1px solid black' }}>
                                        {t('the number of participants')}
                                    </td>
                                    <td style={{ padding: '3px', width: '65%', border: '1px solid black' }}>
                                        {tourState.number_of_participants}
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '3px', width: '35%', border: '1px solid black' }}>
                                        {t('the number of tour bookings')}
                                    </td>
                                    <td style={{ padding: '3px', width: '65%', border: '1px solid black' }}>20</td>
                                </tr>
                            </table>

                            <h3 style={{ marginTop: '40px', marginBottom: '30px' }}>#2 {t('specific schedule')}</h3>
                            <div >
                                <p dangerouslySetInnerHTML={{ __html: tourState.detail }}></p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 ">
                            {/* Table with tour information */}
                            {/* button đặt ngay Tour */}
                            <div style={{ backgroundColor: '#CCCED1', borderRadius: '4px' }}>
                                <div style={{ padding: '20px', textAlign: 'center' }}>
                                    <h4 style={{ margin: '10px 0 15px 0' }}>{t('price starts from')} $200</h4>
                                    <div
                                        style={{
                                            maxWidth: '60%',
                                            height: 'auto',
                                            margin: '0 auto',
                                            paddingBottom: '20px',
                                        }}
                                    >
                                        <img
                                            src={images.picPayment1}
                                            alt="Feature 1"
                                            style={{ maxWidth: '100%', height: 'auto' }}
                                        />
                                    </div>
                                    <Button className="globalBtnActive" to="/step1">
                                        {t('book now')}
                                    </Button>
                                </div>
                            </div>
                            {/* một tour khác */}
                            <div style={{ margin: '10px 0 15px 0' }}>
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                    style={{ backgroundColor: '#CCCED1', borderRadius: '4px' }}
                                >
                                    <div style={{ padding: '20px' }}>
                                        <figure>
                                            <img
                                                src={dataTour.img1}
                                                alt="tour-img"
                                                style={{ width: '100%', height: 'auto' }}
                                            />
                                        </figure>
                                        <h6 style={{ color: '#fb8e26', padding: '25px 0 10px 0' }}>{dataTour.title}</h6>
                                        <p>{dataTour.short}</p>
                                        <a
                                            href="#"
                                            style={linkStyle}
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            onClick={() => handleClickLearnMore(dataTour)}
                                        >
                                            {t('learn more')} <FontAwesomeIcon icon={faArrowRight} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleTour;
