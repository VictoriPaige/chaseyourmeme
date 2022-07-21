import { Routes, Route } from "react-router-dom";
import Error from "./error";
import About from "./about";
import Search from "./search";
import Random from "./random";
import Home from "./home";


function Container() {
    return (
      
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Random' element={<Random/>}/>
                <Route path='/Search' element={<Search/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/*' element={<Error/>}/>
                
            </Routes>

    );
  }
  
  export default Container;