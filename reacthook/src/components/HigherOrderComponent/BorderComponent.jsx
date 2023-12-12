import React from 'react'

function BorderComponent({props,children,color="blue"}) {
    console.log(props);
    const style={border:`2px solid ${color}`,margin:"10px"}
  return (
    <div style={style}>
        <h1>
            BorderComponent - {props}
        </h1>
        {children}
        {/* html is also passing */}
    </div>
  )
}

export default BorderComponent