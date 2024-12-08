import { useEffect, useState } from 'react';
import axios from 'axios';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.topic}</h3>
          <p>{post.message}</p>
          <p><small>{new Date(post.created_at).toLocaleString()}</small></p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
