export default function MemeFilter(props){



    return(

        <div className = "searchbar">
            <form>
                <input  type='text' placeholder="Search Memes Here!" value={props.value} name='memefilter' onChange={props.handleChange}/>
            </form>
        </div>
    )
}