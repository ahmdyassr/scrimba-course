import {useState} from 'react';
const memesData = require('../memesData')


export default function Meme() {
  const [memesArr, setMemesArr] = useState(memesData.data.memes);
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })

  const getMemeImageUrl = () => {
    const randomNum = Math.floor(Math.random() * memesArr.length)
    const selectedMemeImageUrl = memesArr[randomNum].url;
    return selectedMemeImageUrl;
  }

  const handleButtonClick = () => {
    setMeme({
      ...meme,
      randomImage: getMemeImageUrl()
    })
  }

  return (
    <div className='meme'>
      <div className='meme__upper'>
        <input className='meme__input' placeholder="Top Text" type="text" />
        <input className='meme__input' placeholder="Bottom Text" type="text" />
      </div>

      <div className="meme__image">
        <img src={meme.randomImage} />
      </div>
      
      <button className='meme__button' onClick={handleButtonClick}>
        Get a new meme image
      </button>
    </div>
  );
}