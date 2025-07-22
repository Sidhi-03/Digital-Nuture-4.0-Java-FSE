// src/Posts.js
import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
      errorMessage: ''
    };
  }

  // Step 6 - Fetch posts
  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }))
      .catch((error) => {
        this.setState({ hasError: true, errorMessage: error.message });
        console.error('Error fetching posts:', error);
      });
  };

  // Step 7 - Lifecycle method to trigger fetch
  componentDidMount() {
    this.loadPosts();
  }

  // Step 9 - Error handling
  componentDidCatch(error, info) {
    alert("An error occurred in the Posts component.");
    console.error("Caught by componentDidCatch:", error, info);
  }

  // Step 8 - Render posts
  render() {
    const { posts, hasError, errorMessage } = this.state;

    if (hasError) {
      return <div style={{ color: 'red' }}>Error: {errorMessage}</div>;
    }

    return (
      <div>
        <h2>All Blog Posts</h2>
        {posts.slice(0, 10).map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
