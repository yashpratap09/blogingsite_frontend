import React,{useState} from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import * as api from "./api/index"
import im from "./image.jpg"
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Authorlogin() {
  
    const [postData, setPostData] = useState({email: '', password: '' }); 
   

    const clear = () =>{
        setPostData({ email: '', password: ''})   
      }

      const handleClick = () =>{
        const  { email, password } = postData
    
    
        if (email===""){
          alert("email is Required")
        }else if(password===""){
          alert("password is Required")
        }else{
          
          api.login(postData).then((Response) => {

           
           console.log(Response.data.token)
           
            localStorage.setItem("token", Response.data.token)
            alert("Successfully login")
           window.location.href = "/blogs"
           
            
        }).catch((error) => {
         
          alert(error.response.data.msg)
      }).then(
            clear()
            )
        }
    
    
      }


  return (
    <MDBContainer fluid className="p-3 my-5" style={{"background-image": "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)" , "height":"45rem"}} >

      <MDBRow>

        <MDBCol col='10' md='6'  >
          <img src={im} class="img-fluid" alt="Phone" style={{"borderRadius":"35px"}} />
          
        </MDBCol>

        <MDBCol col='4' md='6' style={{"maxWidth":"40.5rem" , "marginTop":"2rem"}}>


          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={postData.email} onChange={(e)=>setPostData({...postData , email:e.target.value})}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg1' type='password' size="lg" value={postData.password} onChange={(e)=>setPostData({...postData , password:e.target.value})}/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            {/* <a >Forgot password?</a> */}
          </div>

          <MDBBtn className="mb-4 w-100" size="lg" onClick={handleClick}>Sign in</MDBBtn>

          <div className="divider d-flex align-items-center my-4">
            <p >OR  Authors registration : <a href="/authors">click for registration</a></p>
          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Authorlogin;