import React, {useState} from 'react'
import boxes from './boxes';
import Box from './components/Box'

export default function Playground() {
  [arr, setArr] = useState(boxes)

  const toggle = (id) => {
    setArr([
      ...arrr,
      {
        id: id,
        on: 
      }
    ])
  }

  const arrElements = arr.map( (element) => {
    return (
      <Box
        key={element.id} 
        id={element.id} 
        isOn={element.on} 
        handleClick={toggle} 
      />
    )
  })

  

  return (
    <div>
      {arrElements}
    </div>
  );
}