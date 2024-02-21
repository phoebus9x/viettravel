import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Blog() {
    return <section id="blog">
        <div className="container">
            <div data-aos="fade" data-aos-duration="2000">
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
            </div>
        </div>
    </section>
}

export default Blog;