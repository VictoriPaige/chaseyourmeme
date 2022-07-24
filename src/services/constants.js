import axios from 'axios';

export async function PopularMeme(){
    const response =  await axios.get('https://api.imgflip.com/get_memes')
        console.log(response)
        return response

}

// export default function componentDidMount(){
//     const call = fetch("'https://api.imgflip.com/get_memes")
//     const res = await call.json()
//     const data = {this.setState({allMemes: res.data.memes})}）
//     }