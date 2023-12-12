import React from 'react';
import { useContext } from 'react';
import { nameContext } from '../App';
function ComponentC() {
    const data=useContext(nameContext)
  return (
    <div><h1>ComponentC - {data.age}</h1></div>
  )
}

export default ComponentC