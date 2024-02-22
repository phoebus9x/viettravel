import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/images';
import { useState, useEffect } from 'react';
import axios from 'axios';

function BlogComponent(data) {
    // const [data, setData] = useState('');

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     axios
    //         .get(`http://localhost:1110/v1/api/blogs`)
    //         .then((response) => {
    //             setData(response.data);
    //             // Xử lý dữ liệu được lấy về ở đây
    //             console.log('blogData: ', response.data);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching blog:', error);
    //             // Xử lý lỗi ở đây
    //         });
    // };

    return (
        <div className="col-md-4 col-sm-9 col-11" data-aos="fade-up" data-aos-delay="100">
            <div>
                <figure>
                    <img src={data.img} alt="tour-img" />
                </figure>
                <a href="#">
                    <p className="blogCategory">{data.tag}</p>
                </a>
                <a href="#">
                    <h6>{data.title}</h6>
                </a>
                <p>{data.short}</p>
                <a href="#">
                    Read More&nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </div>
        </div>
    );
}

export default BlogComponent;
