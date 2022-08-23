import React, {useState} from 'react'
import Header from './components/header';
import Meme from './components/meme';
import Counter from './components/counter';

export default function App() {
  return (
    <div className='app'>
      <Header />
      <Meme />
      <Counter number={0}/>
    </div>
  );
}