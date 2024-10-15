import React from "react";
//import Records from './record.json';
// import { NavLink} from "react-router-dom";
//import Second from "./Second";
//import First from "./First";
//import Navbar from "./component/Navbar";
//import Cards from "./component/Cards";
//import record from "./record.json";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./component/Home";
// import LoginForm from "./component/Loginform";
// import Signup from "./component/Signup";
// import Designerpage from "./component/Designerpage";
import ContactForm from "./component/ContactForm";





function App() {
  return(

  <BrowserRouter>
    <div className="App">
      <Routes>
      
      
      
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactForm />} />
      {/* <Route path="/login" element={<LoginForm />} />
      <Route path="/design" element={<Designerpage />} />     
      <Route path="/signup" element={<Signup />} /> */}
      
      </Routes>
    
      
    </div>
  </BrowserRouter>
  )
}
export default App;
    


// <div className='d-flex'>
// {record.map((value)=> (
//   <Cards title={value.title} decs={value.decs} image={value.image}/>
// ))}

// </div>
         
 /* < Navbar/>
      <center>...How are you...</center> */