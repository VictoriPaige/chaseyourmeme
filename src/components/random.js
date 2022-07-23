import { RandomMeme } from "../services/constants";

export default function Random(){

    return(
        <main>
        <div className = "form">
            <input type='text'
            placeholder='Top Text'
            className ="form--input"
            />
            <input type='text'
            placeholder='Bottom Text'
            className ="form--input"
            />
            <button className="form--button">Get a New Meme Image</button>
        </div>
        
                </main>
    )
}