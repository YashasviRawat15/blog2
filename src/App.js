import React, { useState } from 'react';
//import './App.css';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';

function App() {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, { ...newBlog, id: Date.now() }]);
  };

  return (
    <div className="App">
      
      <main>
        <BlogForm addBlog={addBlog} />
        <BlogList blogs={blogs} />
      </main>
    </div>
  );
}

export default App;
