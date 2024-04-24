import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/images';
import { useDispatch, useSelector } from 'react-redux';
import { submit } from '~/redux/blogSlice';
import { useNavigate } from 'react-router-dom';

function TourComponent({ data }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleReadMore = async (data) => {
        console.log('data on submit: ' + data);
        dispatch(submit(data));
        // console.log("data: ", state.blog);
        navigate('/single-tour');
    };

    console.log('data: ', data);
    return (
        <div className="col-md-4 col-sm-5 col-11" data-aos="fade-up" data-aos-delay="100">
            <div>
                <figure>
                    <img src={data.img1} alt="tour-img" />
                </figure>
                <h6>{data.title}</h6>
                <p>{data.short}</p>
                <a href="#"
                onClick={() => {
                    handleReadMore(data);
                }}>
                    learn more <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </div>
        </div>
    );
}
export default TourComponent;
