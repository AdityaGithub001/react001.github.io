//import logo from './logo.svg';
import react from 'react';
import { Route, Routes } from 'react-router-dom';
//import { Routes } from 'react-router-dom';
import './App.css'
import Create from './Component/Create';
import Read from './Component/Read';
import Update from './Component/Update';
//import AdminLog from './Component/AdminLog';
//import ComC from './ComC';
//import Memo from './Memo';
//import Forloo from './Forloo';
// import App1 from './App1';
// import Info from './Info';
// import Info1 from './Info1';
//import Api from './Api';
//import Apinav from './Apinav';
//import Forloo from './Forloo';
//import Mount from './Mount';
//import Reduce from './Reduce';
//import Usercontext from './Usercontext';
import Home from './Component/Home';
import AdminLog from './Component/AdminLog';

function App() {
  return (
    <div >

   <Routes>
   
   <Route path="/create" element={<Create/>}></Route>
   <Route path="/update" element={<Update/>}></Route>
   <Route path="/Admin" element={<AdminLog/>}></Route>
   <Route path="/datatable" element={<Read/>}></Route>
   <Route exact path="/" element={<Home/>}></Route>
   </Routes> 
   
   
  
  
    </div>
  );
}

export default App;
