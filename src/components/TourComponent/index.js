import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/images';

function TourComponent({ data }) {
    return (
        <div className="col-md-4 col-sm-5 col-11" data-aos="fade-up" data-aos-delay="100">
            <div>
                <figure>
                    <img src={images.tour1} alt="tour-img" />
                </figure>
                <h6>{data.title}</h6>
                <p>{data.short}</p>
                <a href="#">
                    learn more <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </div>
        </div>
    );
}
export default TourComponent;
