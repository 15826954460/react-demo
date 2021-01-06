import { useState, useEffect, useCallback } from 'react';

export default function My() {
  console.log(2222222);
  const [count, setCount] = useState(10);

  const [obj, setObj] = useState({ name: 'bys', age: 20 });

  useEffect(() => {
    console.log('useEffect --------');
  }, [])

  useCallback(
    () => {
      console.log('useCallback------', count);
    },
    [count],
  )

  return (<>
    Count: {count}
    <button onClick={() => setCount(10)}>Reset</button>
    <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    <p>obj: {obj.name} {obj.age}</p>
    <button onClick={() => setObj((prevState) => {
      return { ...prevState, age: count };
    })}>按钮</button>
  </>)
}