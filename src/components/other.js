// // search/app.js
// import React from 'react'
// import ResultsContainer from './memecontainer'
// import SearchContainer from './searchcontainer';


// class Search extends React.Component {
// constructor(){
// super ();


// this.state = {
// allMemes: [],
// searchText:""}}


// componentDidMount(){
//     fetch("'https://api.imgflip.com/get_memes")
//     .then (response => response.json())
//     .then (data => {
//     this.setState({
//     allMemes: data.data.memes
//     })
//     })
// }

// render (){
// return(
// <div className="Search">
// < SearchContainer/>
// < ResultsContainer memesArray={this.state.allMemes}/> 

// class ResultsContainer extends React.Component{
//    render(){
//      return (
//       <div>This is the Results Container
//       {this.props.memesArray.map(meme => {
//       return < MemeCard key={meme.id} memeObject={meme}/>
//        })}
//      </div>
//      )
//     }
//   }
// </div>
// );
// }
// }

// //meme/resultcontainer.js
// import React from "react"
// import MemeCard from "./memecard"

// class ResultsContainer extends React.Component{

// render (){
// return(
// (
// <div>This is the Results Container
// < MemeCard/>

// </div>))
//  }
// }
// export default ResultsContainer

// //memecard.js
// import React from "react";

// class MemeCard extends React.Component {
//     render (){
// return(

// <div>This is the MemeCard Component</div>)
// }
// }

// export default MemeCard

















// function MemeCard({allMemes}){

//       return (
//        <div>
//         <h1>{allMemes.map(item => item.name)}</h1>
//         <img alt="meme" src={allMemes.map(item => item.url)}></img>
//       </div>
//       )
//     }
  
//   export default MemeCard


//searchcontainer.js

// import React from 'react'

// class SearchContainer extends React.Component{

// render(){

// return(
// <div>This is the Search Container</div>
// )}
// }
// export default SearchContainer