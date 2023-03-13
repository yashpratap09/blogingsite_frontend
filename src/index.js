import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Authorsregistration from './Authorsregistration';
import Authorlogin from './Authorlogin'
import GetAllBlogs from './getdata/Getblogs'
// import CreateBlogs from './createBlogs/createBlogs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <HashRouter>
  
  <Routes>

    <Route path='/' element={ <Authorlogin />}/>
    <Route path='/blogs' element={ <GetAllBlogs />}/>
    <Route path='/authors' element={ <Authorsregistration />}/>
    {/* <Route path='/createblogs' element={ <CreateBlogs />}/> */}

  </Routes>
  
  
  
  </HashRouter>

);

