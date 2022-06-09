import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import PostMethod from './PostMethod';

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts"
});

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.get('?_limit=10')
      .then((response) => {
        setPosts(response.data)
      })
  }, []);

  console.log(posts)

  const deletePost = (id) => {
    client.delete(`${id}`);
    setPosts(
      posts.filter((post) => {
        return post.id !== id;
      })
    )
  }

  return (
    <div className='container'>
      <h2>All posts</h2>
      {
        posts.map((post) => {
          return (
            <div className="post-card" key={post.id}>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-body">{post.body}</p>
              <div className="button">
                <div className="delete-btn" onClick={() => deletePost(post.id)}>Delete</div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default App