import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

const BlogForm = ({ addBlog }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      addBlog({ title, content });
      setTitle('');
      setContent('');
    }
  };

  return (
    <div>
      
      <form className='form' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your blog here ..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="4"
        />
        <button type="submit"><AddIcon /></button>
      </form>
    </div>
  );
};

export default BlogForm;
