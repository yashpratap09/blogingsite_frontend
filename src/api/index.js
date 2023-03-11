import axios from "axios";

const url = 'https://bloggingside.onrender.com/'

export  const createAuther = (newPost) => axios.post(`${url}authors`,newPost).then((response) => {
    localStorage.setItem("authorId",response.data.msg._id)
    
    alert("Registration successfully Please Note your AuthorId==>" + response.data.msg._id)

       window.location.href = "/"

}).catch((error) => {
    alert(error.response.data.message)
})

export  const login = (newPost) => axios.post(`${url}login`,newPost)

export  const getBlog = () => axios.get(`${url}blogs` ,{
    headers:{
        'x-api-key': localStorage.getItem("token")
    }})


export  const createBlogs = (newPost) => axios.post(`${url}blogs`,newPost ,{
    headers:{
        'x-api-key': localStorage.getItem("token")
    }}).then((response) => {
    console.log("response", response)}).catch((error) => {
        //console.log(error.response.data)
    alert(error.response.data.msg)
})


export  const DeleteBlogs = (_id) =>{ axios.delete(`${url}blogs/${_id}`,{
    headers:{
        'x-api-key': localStorage.getItem("token")
    }}).then((response) => {
       
        alert( response.data.msg)
        window.location.reload()

    }).catch((error) => {
            //console.log(error.response.data)
            
        alert(error.response.data.msg)
    })


}


export  const editBlogs = (newPost) => axios.put(`${url}blogs/${newPost._id}`,newPost,{
    headers:{
        'x-api-key': localStorage.getItem("token")
    }}).then((response) => {
  alert("Documents successfully updated") }).catch((error) => {
        //console.log(error.response.data)
    alert(error.response.data.msg)
})