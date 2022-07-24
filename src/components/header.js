import { NavLink } from "react-router-dom";


function Header(){

    return(
        <div>
            <header className="header">
                <h1>Meme Generator </h1>
                </header>
            <nav id="nav"><b>
                <NavLink id="HomeTab" to={"/"} style={({isActive})=>{return{color:isActive ? 'red': "black"}}}>Home Page</NavLink>
                <NavLink id="AboutUsTab" to={'/About'}style={({isActive})=>{return{color:isActive ? 'red': "black"}}}>About Us</NavLink>
                <NavLink id="RandomTab" to={"/Random"}style={({isActive})=>{return{color:isActive ? 'red': "black"}}} >Random Meme</NavLink>
                <NavLink id="SearchTab" to={"/Search"}style={({isActive})=>{return{color:isActive ? 'red': "black"}}} >Search Memes</NavLink>
                </b>
            </nav>
            
        </div>
    )
}

export default Header