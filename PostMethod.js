import React, { useState, useEffect } from 'react';
import axios from 'axios';
const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
});

function PostMethod() {


    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [posts, setPosts] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        addPosts(title, body)
    }

    const addPosts = (title, body) => {
        client
            .post('', {
                title: title,
                body: body
            })
            .then(response => {
                setPosts([response.data, ...posts])
            })
        setTitle('');
        setBody('');
    }


    return (
        <div>
            <form>
                <input type="text" placeholder='title' />
                <input type="text" placeholder='body' />
                <button onSubmit={handleSubmit}>send</button>
            </form>
        </div >
    )
}

export default PostMethod