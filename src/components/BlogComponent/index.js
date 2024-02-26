import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/images';
import { useDispatch, useSelector } from 'react-redux';
import { submit } from '~/redux/blogSlice';

function BlogComponent({ data }) {
    const dispatch = useDispatch();

    const handleReadMore = async (data) => {
        dispatch(submit(data));
        // console.log("data: ", state.blog);
    };
    return (
        <div className="col-md-4 col-sm-9 col-11" data-aos="fade-up" data-aos-delay="100">
            <div>
                <figure>
                    <img src={images.blog1} alt="tour-img" />
                </figure>
                <a href="#">
                    <p className="blogCategory">{data.tag}</p>
                </a>
                <a href="#">
                    <h6>{data.title}</h6>
                </a>
                <p>{data.short}</p>
                <a href="#" onClick={handleReadMore}>
                    Read More&nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </div>
        </div>
    );
}

export default BlogComponent;
