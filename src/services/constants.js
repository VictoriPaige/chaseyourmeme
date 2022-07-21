import axios from 'axios';

export async function RandomMeme(){
    const response =  await axios.get('https://api.imgflip.com/get_memes')
        console.log(response)
        return response

}