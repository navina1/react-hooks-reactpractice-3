import React from 'react'

function Counter() {
    const [count, setCount] = React.useState(0);
  return (
    <div>
        <h1>Counter {count}</h1>
        <button onClick={()=>{setCount((prev)=>prev+1)}}>Increment</button>
        <button onClick={()=>{setCount((prev)=>prev-1)}}>decrement</button>
    </div>
  )
}

export default Counter