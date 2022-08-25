import React, { useEffect, useState } from 'react';

function FunctionalComponent(props) {
  const [count, setCount] = useState(0);
  //const [data, setData] = useState({});

  const handleClick = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    console.log('Did Mount/Update');    
  })
  return (
    <div>
      <p>{props.title}</p>
      Nilai Counter: {count}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default FunctionalComponent;