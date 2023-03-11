import React from "react";
import { useState, useEffect } from "react";
import * as api from "../api/index"
import './Getblogs.css'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBIcon
    
  }
  from 'mdb-react-ui-kit';
  import 'mdb-react-ui-kit/dist/css/mdb.min.css';
  import 'mdbreact/dist/css/mdb.css';
  import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

//==================================================================================//


const GetAllBlogs = () => {

    const [Task, setTask] = useState([]);
    
    const [edit ,setEdit] = useState(false)


    const [postData, setPostData] = useState({ title: '', body: '', authorId: '', tags: '', category: '',isPublished:'',subcategory:'' }); 


  const clear = () =>{
    setPostData({ title: '', body: '', authorId: '', tags: '', category: '',isPublished:'',subcategory:'' })
  }

  const handleClick = () =>{
    const  { title, body, authorId, category, } = postData


    if(title===""){
      alert("title is Required")
    }else if(body===""){
      alert("body is Required")
    }else if(authorId===""){
      alert("authorId is Required")
    }else if (category===""){
      alert("category is Required")
    }else{
        
      api.createBlogs(postData).then(
        clear()).then(window.location.reload())

    }


  }

  //====================================edit==========================================================

  

  const handleEditPrint = () =>{
    const  { title, body, authorId, category } = postData


    if(title===""){
      alert("title is Required")
    }else if(body===""){
      alert("body is Required")
    }else if(authorId===""){
      alert("authorId is Required")
    }else if (category===""){
      alert("category is Required")
    }else{
        
      api.editBlogs(postData).then(
        clear()  ).then(setEdit(false))
        .then(window.location.reload())

    }


  }



 //==========================================================================================================================   
    useEffect(() => {

                   api.getBlog().then((Response) => {

            setTask(Response.data.msg)
        }).catch((error) => {
            alert(error.response.data.msg)
        })

    }, []);



   function handleDelete(e,_id){
        
        api.DeleteBlogs(_id)

    }


  async  function handleEdit(e,data){
       setPostData(data)
        setEdit(true)
        
        
    }
//   ===========================================================================================================    



    return (
        < >
        {/* ============================================================================================================================== */}
        <div className="mainbox">
        <div className="first"> <MDBContainer fluid  style={{"maxWidth":"70.5rem" ,  }} >

     

<MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '1rem', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)',"borderRadius":"3rem",}}>
  <MDBCardBody className='p-5 text-center'>

    <h2 className="fw-bold mb-5">Create Blogs </h2> 

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


    <MDBBtn className='w-100 mb-4' size='md' onClick={()=>{
        if(edit===false){
            handleClick()
        }else{
            handleEditPrint()
        }
    }}>click</MDBBtn>

    {/* <p>or login: <a href="/">Click for login</a> </p> */}

    

  </MDBCardBody>
</MDBCard>

</MDBContainer> </div>






{/* ================================================================================================================================== */}



            <div className="second">
                
            <div className="main-box"> 

{Task.map((data, index) => {
    const { title,body,authorId,tags,category,subcategory ,_id } = data;
      
    
                       
           return (
             
           
               <div key={index} className="box" >
                    <h ><span>Title :</span> {title}</h> <br />
                   <h> <span>body :</span>    {body}</h> <br />
                   <h><span>tags :</span>{tags}</h> <br />
                   <h><span>category</span>:{category} </h> <br />
                   <h><span>subcategory :</span>{subcategory} </h> <br />
                   <h><span>authorId :</span> {authorId}</h> <br /> 

                 <div onClick={(e)=>{
                    handleEdit(e,data)
                   }} style={{ "cursor":"pointer" , "fontSize":"2rem" ,"margin":"1rem"}}  > <i><MDBIcon far icon="edit" /></i></div>

                   {/* <button onClick={(e)=>{
                    handleEdit(e,data)
                   }}>Edit Blog</button> */}


                 <div onClick={(e)=>{
                    handleDelete(e,_id)
                   }} style={{ "cursor":"pointer" , "fontSize":"2rem" , "margin":"1rem"}}  > <i><MDBIcon far icon="trash-alt" /></i></div>

                   {/* <button onClick={(e)=>{
                    handleDelete(e,_id)
                   }}>Delete Blog</button> */}


               </div>
           

              
                           )
                       
       

})}

</div>
            </div>
            </div>
        
                             
        </>

    )


}

export default GetAllBlogs
