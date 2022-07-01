import React from 'react'
import './Input.css'
const Input = React.forwardRef((props, ref) => {
  return (
    <div className='input_wrapper'>
        <input ref={ref} onChange={props.onChange} type='number' id={props.input.id} {...props.input} />
    </div>
  )
})

export default Input