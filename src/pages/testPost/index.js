import React from 'react';
import './testPost.scss';
import { useSelector } from 'react-redux';
function TestPost() {

    const blogState = useSelector((state) => state.blog.blog)
    console.log("blogState: ", blogState)

    return (
        <div class="blog container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <p dangerouslySetInnerHTML={{ __html: blogState.content }}></p>
                </div>
            </div>
        </div>
    );
}

export default TestPost;
