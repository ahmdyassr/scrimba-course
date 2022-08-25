import React, {useState, useEffect} from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {

    const watchWidth = () => {
      console.log('Setting up!')
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', watchWidth)

    // Clean up 
    return function() {
      console.log('Cleaning up!')
      window.addEventListener('resize', watchWidth)
    }
  }, [windowWidth])

  return (
    <h1>Window width: {windowWidth}</h1>
  )
}