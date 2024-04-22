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
import TourComponent from '~/components/TourComponent';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faArrowRight, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

function SingleTour() {
    const { t } = useTranslation('home');
    // {t("key")}

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
                setDataTour(response.data.data[0]);
                // Xử lý dữ liệu được lấy về ở đây
                console.log('dataTour: ', response.data.data[0]);
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

    const linkStyle = {
        color: isHovered ? '#fb8e26' : 'black',
        // textDecoration: 'underline',
        // Các thuộc tính khác cho trạng thái không hover
    };

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
                                    src={images.blog1}
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
                            <h2>#1 Điểm nhấn của tour</h2>
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

                            <h2>#2 Lịch trình cụ thể</h2>

                            <h2>#3 1 Số hình ảnh về tour</h2>
                        </div>

                        <div className="col-lg-4 col-md-12 ">
                            {/* Table with tour information */}
                            {/* button đặt ngay Tour */}
                            <div style={{ backgroundColor: '#CCCED1', borderRadius: '4px' }}>
                                <div style={{ padding: '20px', textAlign: 'center' }}>
                                    <p style={{ margin: '10px 0 15px 0' }}>Giá chỉ từ 100$</p>
                                    <span></span>
                                    <Button className="globalBtnActive">Đặt ngay Tour</Button>
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
                                        >
                                            learn more <FontAwesomeIcon icon={faArrowRight} />
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
