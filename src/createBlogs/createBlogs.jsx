import React ,{useState} from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import * as api from "../api/index"
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  
}
from 'mdb-react-ui-kit';


function CreateBlogs() {

  const [postData, setPostData] = useState({ title: '', body: '', authorId: '', tags: '', category: '',isPublished:'',subcategory:'' }); 


  const clear = () =>{
    setPostData({ title: '', body: '', authorId: '', tags: '', category: '',isPublished:'',subcategory:'' })
  }

  const handleClick = () =>{
    const  { title, body, authorId, tags, category,isPublished,subcategory } = postData


    if(title===""){
      alert("title is Required")
    }else if(body===""){
      alert("body is Required")
    }else if(authorId===""){
      alert("authorId is Required")
    }else if (category===""){
      alert("category is Required")
    }else{
        console.log("yes")
      api.createBlogs(postData).then(
        clear()).then(window.location.reload())

    }


  }

  
  return (
    <MDBContainer fluid  style={{"maxWidth":"70.5rem" ,  }} >

     

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)',"borderRadius":"3rem","marginTop":"1rem"}}>
        <MDBCardBody className='p-5 text-center'>

          <h2 className="fw-bold mb-5">Create Blogs</h2>

          <MDBRow>
            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='title' id='form1' type='text' value={postData.title} onChange={(e)=>setPostData({...postData , title:e.target.value})} />
            </MDBCol>

            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='authorId' id='form12' type='text' value={postData.authorId} onChange={(e)=>setPostData({...postData , authorId:e.target.value})}/>
            </MDBCol>
          </MDBRow>
          <MDBInput wrapperClass='mb-4' label='body' id='form13' type='text' value={postData.body} onChange={(e)=>setPostData({...postData , body:e.target.value})}/>

          <MDBInput wrapperClass='mb-4' label='tags' id='form14' type='text'value={postData.tags} onChange={(e)=>setPostData({...postData , tags:e.target.value})}/>
          <MDBInput wrapperClass='mb-4' label='category' id='form15' type='text' value={postData.category} onChange={(e)=>setPostData({...postData , category:e.target.value})}/>
          <MDBInput wrapperClass='mb-4' label='subcategory' id='form15' type='text' value={postData.subcategory} onChange={(e)=>setPostData({...postData , subcategory:e.target.value})}/>
          <MDBInput wrapperClass='mb-4' label='isPublished only true or false' id='form15' type='text' value={postData.isPublished} onChange={(e)=>setPostData({...postData , isPublished:e.target.value})}/>


          <MDBBtn className='w-100 mb-4' size='md' onClick={handleClick}>click</MDBBtn>

          {/* <p>or login: <a href="/">Click for login</a> </p> */}

          

        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default CreateBlogs;