import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import "~/components/css/All.scss";
import "~/components/css/Reponsive.scss";
import images from "~/assets/images";
import Navbar from "~/Layout/components/Navbar";
import Button from "~/components/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// import "~/components/GlobalStyles/GlobalStyles.scss";

import feature1 from "~/assets/images/icon/feature-1.svg";
import feature2 from "~/assets/images/icon/feature-2.svg";
import feature3 from "~/assets/images/icon/feature-3.svg";
import feature4 from "~/assets/images/icon/feature-4.svg";
import choose1 from "~/assets/images/icon/choose-1.svg";
import choose2 from "~/assets/images/icon/choose-2.svg";
import choose3 from "~/assets/images/icon/choose-3.svg";
import choose4 from "~/assets/images/icon/choose-4.svg";
import service1 from "~/assets/images/icon/services-1.svg";
import service2 from "~/assets/images/icon/services-2.svg";
import service3 from "~/assets/images/icon/services-3.svg";
import service4 from "~/assets/images/icon/services-4.svg";
import logoipsum1 from "~/assets/images/icon/logoipsum-1.svg";
import logoipsum2 from "~/assets/images/icon/logoipsum-2.svg";
import logoipsum3 from "~/assets/images/icon/logoipsum-3.svg";
import logoipsum4 from "~/assets/images/icon/logoipsum-4.svg";
import logoipsum5 from "~/assets/images/icon/logoipsum-5.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faArrowRight,
  faPlay,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  const { t } = useTranslation("home");
  // {t("key")}

  useEffect(() => {
    AOS.init();
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: images.headerSlider1,
      alt: "slider-img",
    },
    {
      image: images.headerSlider2,
      alt: "slider-img",
    },
    {
      image: images.headerSlider3,
      alt: "slider-img",
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
      <div
        key={index}
        className={`slide ${index === currentSlide ? "active" : "inactive"}`}
      >
        <img src={slide.image} alt={slide.alt} />
      </div>
    ));
  }

  function nextSlide() {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }

  // const backgroundImageChooseSection = "~/assets/images/choose-img.png";

  return (
    <div className={"site-wrapper"}>
      <div className={"header-slider"}>{showSlide()}</div>
      <div className={"overlay"}>
        <div className={"header-content"}>
          <Navbar />
          {/* <!-- ====== 1.2 hero section ====== --> */}
          <section id="hero">
            <div className="container">
              <div className="row justify-content-center">
                <div
                  className="col-lg-11 col-md-12 text-center"
                  data-aos="fade"
                >
                  <div>
                    <h2>About Us</h2>
                    <div class="d-flex justify-content-center gap-4 pt-4">
                      <nav aria-label="breadcrumb">
                        <div class="breadcrumb d-flex gap-4 align-items-center">
                          <div class="breadcrumb-item"><Link to="/">Home</Link></div>
                          <FontAwesomeIcon icon={faAnglesRight} />
                          <div class="breadcrumb-item" aria-current="page">About</div>
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
      </div>


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
                  <h6>Name</h6>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <h6>Destination</h6>
                  <select name="country" id="destination">
                    <option value="destination" selected disabled>
                      Destination
                    </option>
                    <option value="turkey">Turkey</option>
                    <option value="sweden">Sweden</option>
                    <option value="indonesia">Indonesia</option>
                  </select>
                </div>
                <div>
                  <h6>Tour Days</h6>
                  <input type="date" name="name" required />
                </div>
                <div className="globalBtn">
                  <ul>
                    <li>
                      <button type="submit">
                        Book Now <span></span>
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
                  <h4>About Us</h4>
                  <h2>With Us, You Are Always In For A Pleasant Surprise</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="justify-content-md-start justify-content-center mt-4">
                    <Button className="globalBtnActive" to="/about">
                      Learn More
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
                  <p>Happy Customers</p>
                </div>
                <div
                  className="experience d-flex flex-column justify-content-between align-items-center"
                  data-aos="fade-up"
                >
                  <div className="d-flex">
                    <h2 className="count">15</h2>
                    <h2>+</h2>
                  </div>
                  <p>Years of experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====== End 1.4 about section ====== --> */}

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
                  <h4>What We Do</h4>
                  <h2>Exploring The World Without Limits</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
                <div className="mt-3" data-aos="fade" data-aos-duration="2000">
                  <Button className="globalBtnActive" to="/services">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====== End 1.9 what we do section ====== --> */}

      {/* <!-- ====== 1.7 why choose us section ====== --> */}
      <section id="choose">
        <div className="chooseBg">
          <div
            className="position-relative z-2"
            data-aos="fade"
            data-aos-duration="2000"
          >
            <h4>Why choose us</h4>
            <h2>Let Us Show You The Beauty Of The World</h2>
            <div className="mt-lg-5 mt-md-5">
              <Button to="/contact">Contact Us</Button>
            </div>
          </div>
        </div>
        <div className="chooseCrads position-relative z-2">
          <div className="container">
            <div className="row gap-md-0 gap-4 justify-content-center card-text">
              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div>
                  <figure>
                    <img src={choose1} alt="chooseIcon" />
                  </figure>
                  <h6>Tour and Travel</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div>
                  <figure>
                    <img src={choose2} alt="chooseIcon" />
                  </figure>
                  <h6>campus</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <div>
                  <figure>
                    <img src={choose3} alt="chooseIcon" />
                  </figure>
                  <h6>Adventure Tour</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt
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
                  <h6>photography</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====== End 1.7 why choose us section ====== --> */}

      {/* <!-- ====== 1.10 our team section ====== --> */}
      <section id="team">
        <div className="container">
          <div data-aos="fade" data-aos-duration="2000">
            <h4>Our Team</h4>
            <h2>Experience The World With Us</h2>
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
                <p>Tour Guide</p>
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
                <p>Tour Guide</p>
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
                <p>Tour Guide</p>
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

      {/* <!-- ====== 1.14 start planning section ====== --> */}
      <section id="planning">
        <div
          className="planningContent"
          data-aos="fade"
          data-aos-duration="2000"
        >
          <h3>
            Start Planning Your Trip Now and <span>Get 30% Discount</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className="mt-lg-4 mt-3">
            <Button to="/contact">Book Now</Button>
          </div>
        </div>
      </section>
      {/* <!-- ====== End 1.14 start planning section ====== --> */}

      {/* <!-- ====== 1.15 blog section ====== --> */}
      <section id="blog">
        <div className="container">
          <div data-aos="fade" data-aos-duration="2000">
            <h4>Our Blogs</h4>
            <h2>Timeless Adventures Await with Timeless Stories.</h2>
          </div>
          <div className="blogCards mt-lg-5 mt-md-4">
            <div className="row gap-4 justify-content-center card-text">
              <div
                className="col-md-4 col-sm-9 col-11"
                data-aos="fade-up"
                data-aos-delay="100"
              >
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
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
                    Dolore Magna Aliqua….
                  </p>
                  <a href="#">
                    Read More <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-9 col-11"
                data-aos="fade-up"
                data-aos-delay="500"
              >
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
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
                    Dolore Magna Aliqua….
                  </p>
                  <a href="#">
                    Read More
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-9 col-11"
                data-aos="fade-up"
                data-aos-delay="900"
              >
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
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
                    Dolore Magna Aliqua….
                  </p>
                  <a href="#">
                    Read More <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====== End 1.15 blog section ====== --> */}

      {/* <!-- ====== 1.16 newsletter section ====== --> */}
      <section id="newsletter">
        <div className="container">
          <div data-aos="fade" data-aos-duration="2000">
            <h4>Newsletter</h4>
            <h2>Stay In The Know, Without Having To Do Anything</h2>
          </div>
          <div
            className="row justify-content-between"
            data-aos="fade"
            data-aos-duration="2000"
          >
            <div className="col-md-5">
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
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
                    placeholder="Enter Your Email Address"
                    required
                  />
                  <div className="globalBtnActive">
                    <ul>
                      <li>
                        <button type="submit">
                          Subscribe <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  {/* <Button className="globalBtnActive">Subscribe</Button> */}
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

export default About;
