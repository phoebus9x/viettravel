import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

function AddNewBlog() {
    const [content, setContent] = useState('');

    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        setContent(data);
        console.log('content: ', content);
    };

    const handleSubmit = async () => {
        try {
            const response1 = await axios.post('http://localhost:1110/v1/api/post', {
                content: content,
            });
        } catch (error) {
            console.error(error);
        }
        console.log('Submitted content:', content);
        alert('Submitted successfully!');
    };

    const handleGetBlog = async () => {
        const id = '65d206b4846a964effcd2b1d';
        axios
            .get(`http://localhost:1110/v1/api/post/${id}`)
            .then((response) => {
                const blogData = response.data;
                // Xử lý dữ liệu được lấy về ở đây
                console.log('blogData: ', blogData);
            })
            .catch((error) => {
                console.error('Error fetching blog:', error);
                // Xử lý lỗi ở đây
            });
    };

    return (
        <div>
            <h2>New Blog</h2>
            <CKEditor
                editor={ClassicEditor}
                data="<p>Enter your blog&nbsp;!</p>"
                onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={handleEditorChange}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleGetBlog}>Get</button>
        </div>
    );
}

export default AddNewBlog;
