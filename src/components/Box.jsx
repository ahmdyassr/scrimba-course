import {useState} from 'react'

export default function Box({isOn, id, handleClick}) {
  const boxStyles = {
    backgroundColor: isOn ? '#131313' : '#fff',
    borderRadius: '4px'
  }
  
  return (
    <span className='box' style={boxStyles} onClick={() => handleClick(id)}>{id}</span>
  );
}