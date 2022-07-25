import { Routes, Route } from "react-router-dom";
import Error from "./error";

import Random from "./random";
import Home from "./home";
import SearchContainer from "./searchcontainer";


function Container() {

    

    return (
      
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Random' element={<Random/>}/>
                <Route path='/Search' element={<SearchContainer/>}/>
                <Route path='/*' element={<Error/>}/>
                
            </Routes>

    );
  }
  
  export default Container;