import {useState} from 'react';

export default function Joke({headline, punchline}) {

  const [isShown, setIsShown] = useState(true)
  const toggle = () => {
    setIsShown( prevIsShown => !prevIsShown )
  }

  return (
    <div>
      <h3>{headline}</h3>
      <p>{ isShown && punchline}</p>
      <button onClick={toggle}>Toggle Punchline</button>
    </div>
  )
}