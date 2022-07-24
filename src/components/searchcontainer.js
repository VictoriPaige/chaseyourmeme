import { useState,useEffect } from "react";
import { PopularMeme } from "../services/constants";
import MemeCard from "./memecard";


export default function Search(){
    const [meme, setMeme] = useState({
        randomImage: "http://i.imgflip.com/1bij.jpg" //placeholder image
    })
    const [allMemes, setAllMemes] = useState([])

    useEffect(async () => {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemes(data.data.memes)
    }, [])

    console.log(allMemes)



    //console.log(allMemes[4])// console.log([4].name) works one step at a time?!
//DONE INDIVIDUALLY FOR CONCEPUTUAL PURPOSE OF MAP
//  const memeNameArray= allMemes.map(item => item.name)
// console.log(memeNameArray)
//  const memeUrlArray=allMemes.map(item => item.url)
// //  console.log(memeUrlArray)

// const memesArray= allMemes.map( meme =>{ 
//     return (< MemeCard key={meme.id} memeObject={meme}/>)})

    
//  console.log(memesArray)


    return(

        <div>
            This is the Search Container!
         
        </div>
    )
}
