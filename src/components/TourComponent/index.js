import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from '~/assets/images';

function TourComponent() {
    return <div className="col-md-4 col-sm-5 col-11" data-aos="fade-up" data-aos-delay="100">
        <div>
            <figure>
                <img src={images.tour1} alt="tour-img" />
            </figure>
            <h6>Du lịch Hà Nội</h6>
            <p>Lorem ipsum dolor sit amet, sit consecte adipiscing elit, sed</p>
            <a href="#">
                learn more <FontAwesomeIcon icon={faArrowRight} />
            </a>
        </div>
    </div>
}
export default TourComponent;