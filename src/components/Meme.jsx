import React, {useState, useEffect} from 'react';

export default function Meme() {
  const [memesArr, setMemesArr] = useState([]);
  
  useEffect(() => {

    const getMemes = async () => {
      const res = await fetch('https://api.imgflip.com/get_memes')
      const data = await res.json()
      setMemesArr(data.data.memes)
    }

    getMemes()
  }, [])

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMeme( prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
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
        <input className='meme__input' name='topText' placeholder="Top Text" type="text" value={meme.topText} onChange={handleChange} />
        <input className='meme__input' name='bottomText' placeholder="Bottom Text" type="text" value={meme.bottomText} onChange={handleChange} />
      </div>

      <div className="meme__image">
        <img src={meme.randomImage} />

        <h3 className='meme__topText'>{ meme.topText }</h3>
        <h3 className='meme__bottomText'>{ meme.bottomText }</h3>
      </div>
      
      <button className='meme__button' onClick={handleButtonClick}>
        Get a new meme image
      </button>
    </div>
  );
}