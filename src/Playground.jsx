import React, {useState, useEffect} from 'react';
import WindowTracker from './components/WindowTracker';

export default function Playground() {
  const [isShown, setIsShown] = useState(true)

  const handleToggle = () => {
    setIsShown(prevIsShown => !prevIsShown)
  }

  return (
    <div>
      <button onClick={handleToggle}>Toggle Tracker</button>

      {
        isShown && <WindowTracker />
      }
      
    </div>
  );
}