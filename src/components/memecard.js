//don't forget to add a key to the div

export default function Memecard({memes}){

return(

    <div>
    {memes.map((meme,index) =>
        {return(
            <div key={index}>
                    <h2>{meme.name}</h2>
                    <img src={meme.url}/>
    </div>

    )}
    )}

    </div>
)

}