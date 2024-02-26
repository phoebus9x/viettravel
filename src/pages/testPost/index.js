import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './testPost.scss';
import { useSelector } from 'react-redux';
function TestPost() {
    const [data, setData] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const id = '65d5f426577e4f9ec4a866a7';
        axios
            .get(`http://localhost:1110/v1/api/blog/${id}`)
            .then((response) => {
                setData(response.data.data.content);
                // Xử lý dữ liệu được lấy về ở đây
                // console.log('blogData: ', response.data.data.content);
            })
            .catch((error) => {
                console.error('Error fetching blog:', error);
                // Xử lý lỗi ở đây
            });
    };

    const blogState = useSelector((state) => state.blog)
    console.log("blogState: ", blogState)

    return (
        <div class="blog container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <p dangerouslySetInnerHTML={{ __html: data }}></p>
                </div>
            </div>
        </div>
    );
}

export default TestPost;
