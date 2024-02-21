import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from '~/assets/images';


function BlogComponent() {
    return <div className="col-md-4 col-sm-9 col-11" data-aos="fade-up" data-aos-delay="100">
        <div>
            <figure>
                <img src={images.blog1} alt="tour-img" />
            </figure>
            <a href="#">
                <p className="blogCategory">Cai nay vua viet</p>
            </a>
            <a href="#">
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
            </a>
            <p>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Dolore Magna Aliqua….
            </p>
            <a href="#">
                Read More&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
            </a>
        </div>
    </div>
}

export default BlogComponent;