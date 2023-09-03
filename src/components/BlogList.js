import React, { useState } from 'react';
import { CCard, CRow,CCol, CButton, CCardBody, CCardTitle, CCardText} from '@coreui/react'

const BlogList = ({ blogs }) => {
  const [expandedBlog, setExpandedBlog] = useState(null);

  const handleReadMore = (blogId) => {
    setExpandedBlog(blogId);
  };

  const renderContent = (blog) => {
    if (expandedBlog === blog.id) {
      return (
        <>
          <p>{blog.content}</p>
          
          <CButton onClick={() => setExpandedBlog(null)} style={{background:"#86F9BC", margin:"10", border:"none", borderRadius:"2px", fontSize:"1rem", padding:"1.2%"}}>Read Less</CButton>
        </>
      );
    } else {
      return (
        <>
          <p>{blog.content.slice(0, 400)}...</p>
          
          <CButton onClick={() => handleReadMore(blog.id) } style={{background:"#86F9BC", margin:"10", border:"none", borderRadius:"2px", fontSize:"1rem"}}>Read More</CButton>
        </>
      );
    }
  };

  return (
    <div>
      
      {blogs.map((blog) => (
        <div key={blog.id}>
            <CRow xs={{ cols: 1 }} md={{ cols: 1 }} className="g-4" style={{margin: "2px"}}>
            <CCol xs>
                <div className='card'>
    <CCard className="h-100 text-center" style={{backgroundColor: "#0088a9", borderRadius:"5px", padding:"2%"}}>
  <CCardBody>
      
        <CCardTitle style={{fontSize:"1.5rem"}}>{blog.title}</CCardTitle>
        <CCardText>
        {renderContent(blog)}
        </CCardText>
           
        
      </CCardBody>
      </CCard>
      </div>
  </CCol>
  </CRow>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

//<CButton style={{margin: 10, backgroundColor: "#4AC087", border:"none"}}>Read More</CButton>   



