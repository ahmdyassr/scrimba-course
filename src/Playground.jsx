import React, {useState} from 'react'
import jokesData from './jokesData'
import Joke from './components/Joke'

export default function Playground() {
  return (
    <div>
      <h3>Playground</h3>

      {
        jokesData.map( ({id, setup, punchline}) => {
          return (
            <Joke key={id} headline={setup} punchline={punchline}/>
          )
        })
      }
    </div>
  );
}