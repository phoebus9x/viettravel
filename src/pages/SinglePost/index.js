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

function SinglePost() {
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

            <article class="mb-4">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <h2 class="section-heading">Hà Nội ngày và đêm</h2>
                            <p>
                                There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and
                                literally, it is a task to occupy the generations. And no matter how much progress one
                                makes, there is always the thrill of just beginning.
                            </p>
                            <p>
                                Never in all their history have men been able truly to conceive of the world as one: a
                                single sphere, a globe, having the qualities of a globe, a round earth in which all the
                                directions eventually meet, in which there is no center because every point, or none, is
                                center — an equal earth which all men occupy as equals. The airman's earth, if free men
                                make it, will be truly round: a globe in practice, not in theory.
                            </p>
                            <p>
                                Science cuts two ways, of course; its products can be used for both good and evil. But
                                there's no turning back from science. The early warnings about technological dangers
                                also come from science.
                            </p>
                            <p>
                                What was most significant about the lunar voyage was not that man set foot on the Moon
                                but that they set eye on the earth.
                            </p>
                            <p>
                                A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty,
                                become her protectors rather than her violators. That's how I felt seeing the Earth for
                                the first time. I could not help but love and cherish her.
                            </p>
                            <p>
                                For those who have seen the Earth from space, and for the hundreds and perhaps thousands
                                more who will, the experience most certainly changes your perspective. The things that
                                we share in our world are far more valuable than those which divide us.
                            </p>
                            <h2 class="section-heading">The Final Frontier</h2>
                            <p>
                                There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and
                                literally, it is a task to occupy the generations. And no matter how much progress one
                                makes, there is always the thrill of just beginning.
                            </p>
                            <p>
                                There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and
                                literally, it is a task to occupy the generations. And no matter how much progress one
                                makes, there is always the thrill of just beginning.
                            </p>
                            <blockquote class="blockquote">
                                The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has
                                not yet mastered prophecy. We predict too much for the next year and yet far too little
                                for the next ten.
                            </blockquote>
                            <p>
                                Spaceflights cannot be stopped. This is not the work of any one man or even a group of
                                men. It is a historical process which mankind is carrying out in accordance with the
                                natural laws of human development.
                            </p>
                            <h2 class="section-heading">Reaching for the Stars</h2>
                            <p>
                                As we got further and further away, it [the Earth] diminished in size. Finally it shrank
                                to the size of a marble, the most beautiful you can imagine. That beautiful, warm,
                                living object looked so fragile, so delicate, that if you touched it with a finger it
                                would crumble and fall apart. Seeing this has to change a man.
                            </p>
                            <a href="#!">
                                <img class="img-fluid" src="assets/img/post-sample-image.jpg" alt="..." />
                            </a>
                            <span class="caption text-muted">
                                To go places and do things that have never been done before – that’s what living is all
                                about.
                            </span>
                            <p>
                                Space, the final frontier. These are the voyages of the Starship Enterprise. Its
                                five-year mission: to explore strange new worlds, to seek out new life and new
                                civilizations, to boldly go where no man has gone before.
                            </p>
                            <p>
                                As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a
                                fundamental truth to our nature, Man must explore, and this is exploration at its
                                greatest.
                            </p>
                            <p>
                                Placeholder text by
                                <a href="http://spaceipsum.com/">Space Ipsum</a>
                                &middot; Images by
                                <a href="https://www.flickr.com/photos/nasacommons/">NASA on The Commons</a>
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default SinglePost;
