import React, {useState, useEffect} from 'react';

export default function Playground() {
  const [exampleData, setExampleData] = useState({})
  const [count, setCount] = useState(1)

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setExampleData(data))
    console.log('effect ran!')
  }, [count])

  const getNext = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div>
      <button onClick={getNext}>Next One</button>
      <h3>Here is the data you requested: </h3>
      <pre>
        <code>
          { JSON.stringify(exampleData, null ,2)}
        </code>
      </pre>
    </div>
  );
}