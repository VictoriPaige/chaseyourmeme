//don't forget to add a key to the div

export default function Memecard({memes}){

return(

    <div >
    {memes.map((meme,index) =>
        {return(
            <div className="memecard" key={index}>
                    <h2>{meme.name}</h2>
                    <img className="search--img" alt='' src={meme.url}/>
    </div>

    )}
    )}

    </div>
)

}