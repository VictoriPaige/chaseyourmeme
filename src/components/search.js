import { useState, useEffect } from "react";
import Memecard from "./memecard";
import MemeFilter from "./memefilter";




export default function Search(props){
const [memesToDisplay, setMemesToDisplay] = useState(props.memes)

useEffect(()=>{setMemesToDisplay(props.memes)}, [props.memes])

 function handleChange(event){
        event.preventDefault()
   const filteredValue = event.target.value.toLowerCase()
   const updatedFilter = props.memes.filter((meme) => meme.name.toLowerCase().includes(filteredValue));
    setMemesToDisplay( _prevState =>updatedFilter)
// console.log(updatedFilter)
 }



     //console.log(allMemes)
    
//  console.log(memesArray)
 console.log(memesToDisplay)
//  console.log(props.memes, props.something)

    return(

        <div>
           
        <MemeFilter handleChange={handleChange}/>
        <Memecard memes={memesToDisplay}/>
        </div>
    )
}

