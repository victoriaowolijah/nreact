import React from 'react'

function Body(props) {
    console.log('props== ',props)
  return (
    <div>Body counter {props.count}</div>
  )
}

export default Body