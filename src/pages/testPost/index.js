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
            <section class="single-post-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9 post-content" data-aos="fade-up">
                            {/* <!-- ======= Single Post Content ======= --> */}
                            <div class="single-post">
                                <div class="post-meta">
                                    <span class="date">Business</span>
                                    <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span>
                                </div>
                                <h1 class="mb-5">13 Amazing Poems from Shel Silverstein with Valuable Life Lessons</h1>
                                <p>
                                    <span class="firstcharacter">L</span>orem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Ratione officia sed, suscipit distinctio, numquam omnis quo fuga
                                    ipsam quis inventore voluptatum recusandae culpa, unde doloribus saepe labore alias
                                    voluptate expedita? Dicta delectus beatae explicabo odio voluptatibus quas, saepe
                                    qui aperiam autem obcaecati, illo et! Incidunt voluptas culpa neque repellat sint,
                                    accusamus beatae, cumque autem tempore quisquam quam eligendi harum debitis.
                                </p>

                                <figure class="my-4">
                                    <img src="assets/img/post-landscape-1.jpg" alt="" class="img-fluid" />
                                    <figcaption>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, odit?
                                    </figcaption>
                                </figure>
                                <p>
                                    Sunt reprehenderit, hic vel optio odit est dolore, distinctio iure itaque enim
                                    pariatur ducimus. Rerum soluta, perspiciatis voluptatum cupiditate praesentium
                                    repellendus quas expedita exercitationem tempora aliquam quaerat in eligendi
                                    adipisci harum non omnis reprehenderit quidem beatae modi. Ea fugiat enim libero,
                                    ipsam dicta explicabo nihil, tempore, nulla repellendus eos necessitatibus eligendi
                                    corporis cum? Eaque harum, eligendi itaque numquam aliquam soluta.
                                </p>
                                <p>
                                    Explicabo perspiciatis, laborum provident voluptates illum in nulla consectetur
                                    atque quaerat excepturi quisquam, veniam velit ex pariatur quos consequuntur?
                                    Excepturi reiciendis perferendis, cupiditate dolorem eos illum amet. Beatae
                                    voluptates nemo esse ratione voluptate, nesciunt fugit magnam veritatis voluptas
                                    dignissimos doloribus maiores? Aliquam, dolores natus exercitationem corrupti
                                    blanditiis, consequuntur nihil nobis sed voluptatibus maiores sunt, illo provident
                                    aliquid laborum. Vitae, ut.
                                </p>
                                <p>
                                    Reprehenderit aut sed doloribus blanditiis, aspernatur magni? In molestias rem,
                                    similique ut esse repudiandae quod recusandae dolores neque earum omnis at, suscipit
                                    fuga? Minima qui veniam deserunt quisquam error amet at ratione nesciunt porro quis
                                    placeat repudiandae voluptatibus officiis fuga necessitatibus, expedita officia
                                    adipisci eaque labore accusamus? Nesciunt repellat illo exercitationem facilis
                                    similique quaerat, quis sequi? Praesentium nulla ipsam dolor.
                                </p>
                                <p>
                                    Dolorum, incidunt! Adipisci harum itaque maxime dolores doloremque porro eligendi
                                    quis, doloribus vel sit rerum sunt obcaecati nam suscipit nulla vitae alias
                                    blanditiis aliquam debitis atque illo modi et placeat. Ratione iure eveniet
                                    provident. Culpa laboriosam sed ad quia. Corrupti, earum, perferendis dolore
                                    cupiditate sint nihil maiores iusto tempora nobis porro itaque est. Ut laborum culpa
                                    assumenda pariatur et perferendis?
                                </p>
                                <p>
                                    Est soluta veritatis laboriosam, consequuntur temporibus asperiores, fugit id a
                                    ullam sed, expedita sequi doloribus fugiat. Odio et necessitatibus enim nam, iste
                                    reprehenderit cupiditate omnis ut iure aliquid obcaecati, repellendus nemo provident
                                    eveniet tempora minus! Voluptates aut laboriosam, maiores nihil accusantium, a
                                    dolorum quaerat tenetur illo eum culpa cum laudantium sunt doloremque modi possimus
                                    magni? Perferendis cum repudiandae corrupti porro.
                                </p>
                                <figure class="my-4">
                                    <img src="assets/img/post-landscape-5.jpg" alt="" class="img-fluid" />
                                    <figcaption>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, odit?
                                    </figcaption>
                                </figure>
                                <p>
                                    Quis molestiae, dolorem consequuntur labore perferendis enim accusantium commodi
                                    optio, sequi magnam ad consectetur iste omnis! Voluptatibus, quia officia esse
                                    necessitatibus magnam tempore reprehenderit quo aspernatur! Assumenda, minus dolorem
                                    repellendus corporis corrupti quia temporibus repudiandae in. Sit rem aut,
                                    consectetur repudiandae perferendis nemo alias, iure ipsam omnis quam soluta, nobis
                                    animi quis aliquam blanditiis at. Dicta nemo vero sequi exercitationem.
                                </p>
                                <p>
                                    Architecto ex id at illum aperiam corporis, quidem magnam doloribus non eligendi
                                    delectus laborum porro molestiae beatae eveniet dolor odit optio soluta dolores!
                                    Eaque odit a nihil recusandae, error repellendus debitis ex autem ab commodi,
                                    maiores officiis doloribus provident optio, architecto assumenda! Nihil cum
                                    laboriosam eos dolore aliquid perferendis amet doloremque quibusdam odio soluta vero
                                    odit, ipsa, quisquam quod nulla.
                                </p>
                                <p>
                                    Consequuntur corrupti fugiat quod! Ducimus sequi nemo illo ad necessitatibus amet
                                    nobis corporis et quasi. Optio cum neque fuga. Ad excepturi magnam quisquam ex
                                    voluptatibus vitae aut nam quidem doloribus, architecto perspiciatis sit consequatur
                                    pariatur alias animi expedita quas? Et doloribus voluptatibus perferendis qui fugiat
                                    voluptatum autem facere aspernatur quidem quae assumenda iste, sit similique,
                                    necessitatibus laborum magni. Ea, dolores!
                                </p>
                                <p>
                                    Possimus temporibus rerum illo quia repudiandae provident sed quas atque. Ipsam
                                    adipisci accusamus iste optio illo aliquam molestias? Voluptatibus, veniam
                                    recusandae facilis nobis perspiciatis rem similique, nisi ad explicabo ipsa
                                    voluptatum, inventore molestiae natus adipisci? Fuga delectus quia assumenda totam
                                    aspernatur. Nobis hic ea rem, quaerat voluptate vero illum laboriosam omnis
                                    aspernatur labore, natus ex iusto ducimus exercitationem a officia.
                                </p>
                            </div>
                            {/* <!-- End Single Post Content --> */}
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="blog-post">
                            <h2>Title of the Blog Post</h2>
                            <p>Content of the blog post goes here...</p>
                            <a href="#" className="btn btn-primary">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinglePost;
