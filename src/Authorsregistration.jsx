import React ,{useState} from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import * as api from "./api/index"
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


function Authorsregistration() {

  const [postData, setPostData] = useState({ fname: '', lname: '', title: '', email: '', password: '' }); 


  const clear = () =>{
    setPostData({ fname: '', lname: '', title: '', email: '', password: ''})
  }

  const handleClick = () =>{
    const  { fname, lname, title, email, password } = postData


    if(fname===""){
      alert("First name is Required")
    }else if(lname===""){
      alert("Last name is Required")
    }else if(title===""){
      alert("title is Required")
    }else if (email===""){
      alert("email is Required")
    }else if(password===""){
      alert("password is Required")
    }else{
      api.createAuther(postData).then(
        clear()
      )
      //.then(  window.location.href = "/")

    }


  }


  return (
    <MDBContainer fluid  style={{ "background-image": "linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%)" }} >

      <div className="p-5 bg-image" style={{"background-image": "linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%)", height: '220px'}}></div>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)',"background-image": "linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%)"  }}>
        <MDBCardBody className='p-5 text-center' style={{"maxWidth":"65.5rem" ,"background-image": "linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%)" }}>

          <h2 className="fw-bold mb-5">Create Author</h2>

          <MDBRow >
            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' value={postData.fname} onChange={(e)=>setPostData({...postData , fname:e.target.value})} />
            </MDBCol>

            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='Last name' id='form12' type='text' value={postData.lname} onChange={(e)=>setPostData({...postData , lname:e.target.value})}/>
            </MDBCol>
          </MDBRow>
          <MDBInput wrapperClass='mb-4' label='title only  Mr  ,  Miss  ,  Mrs' id='form13' type='text' value={postData.title} onChange={(e)=>setPostData({...postData , title:e.target.value})}/>

          <MDBInput wrapperClass='mb-4' label='Email' id='form14' type='email'value={postData.email} onChange={(e)=>setPostData({...postData , email:e.target.value})}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form15' type='password' value={postData.password} onChange={(e)=>setPostData({...postData , password:e.target.value})}/>


          <MDBBtn className='w-100 mb-4' size='md' onClick={handleClick}>sign up</MDBBtn>

          <p>or login: <a href="/">Click for login</a> </p>

          

        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Authorsregistration;