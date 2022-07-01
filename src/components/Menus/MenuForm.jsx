
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './MenuForm.css'
const MenuForm = (props) => {
    const [value, setValue] = useState(null)
    const items = useSelector(state => state.cartContentReducer.items)
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(items)
        if(value === 0){
          setValue(1)
          return
        }else {
          props.onAddToCart(1)
        }
    }
  return (
    <form className='input-wrapper' onSubmit={submitHandler}>
    <div className='operation-btn'><button type='submit'> Add to cart</button></div>
</form>
  )
}

export default MenuForm