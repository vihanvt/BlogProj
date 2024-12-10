import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PostDetail from './PostDetail';
import './styles.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setPosts([
        { id: 1, title: 'First Post', date: 'January 1, 2024' },
        { id: 2, title: 'Second Post', date: 'February 2, 2024' },
        { id: 3, title: 'Third Post', date: 'March 3, 2024' },
      ]);
    }, 1000);
  }, []);

  return (
    <Router>
      <div className="container">
        <div className="navbar">
          <a href="#">Home</a>
          <a href="#">Portfolio</a>
          <a href="#">Resume</a>
        </div>

        <div className="blog-heading">
          <h1>Blog</h1>
        </div>

        <div className="posts">
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <strong>{post.date}</strong> - <a href={`/post/${post.id}`} target="_blank" rel="noopener noreferrer">{post.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <Routes>
          <Route path="/post/:postId" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
