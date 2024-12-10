import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { postId } = useParams(); // Extract postId from URL
  const [post, setPost] = useState(null);

  // Fetch post details based on postId
  useEffect(() => {
    // Simulating fetching data based on postId
    const fetchedPost = {
      1: { id: 1, title: 'First Post', content: 'This is the content of the first post.', date: 'January 1, 2024' },
      2: { id: 2, title: 'Second Post', content: 'This is the content of the second post.', date: 'February 2, 2024' },
      3: { id: 3, title: 'Third Post', content: 'This is the content of the third post.', date: 'March 3, 2024' }
    };

    // Simulate fetching the post data
    setPost(fetchedPost[postId] || null);
  }, [postId]);

  // Handle case when post is not found
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p><strong>{post.date}</strong></p>
      <div>{post.content}</div>
    </div>
  );
};

export default PostDetail;
