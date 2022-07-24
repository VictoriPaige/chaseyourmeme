import Search from "./search"
import { useState, useEffect } from "react"


export default function SearchContainer(){
    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        let filter = async()=>{
            const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        const memesArray= data.data.memes.map( meme =>{ 
            return ({name:meme.name, url:meme.url})})
        
            setAllMemes (memesArray)
        }
        
        filter()
       
    }, [])

console.log(allMemes)

    return(

        <div>
            <Search memes={allMemes} something={'something'}
             />
        </div>
    )
}