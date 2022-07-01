import { Backdrop, Button, Card } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSuccess } from '../../features/cartCounter/uiCart'
import './Success.css'

const SuccessModal = () => {
    const dispatch = useDispatch()
    const isSuccess = useSelector((state)=> state.ui.success)
    const closeHandler = () => {
        dispatch(toggleSuccess())
    }
    return (
    <Backdrop open={isSuccess} sx={{zIndex:2}}>
        <Card className='success_card'>
            <div className='success_text'>
                Ordered Successfully!
            </div>
            <div className='success_desc'>
                Your order is in progress. Stay updated! Thank You ka-Joellibee!...
            </div>
            <div>
                <Button variant='contained' onClick={closeHandler} sx={{backgroundColor: '#e4163d', color: 'white'}}>CONFIRM</Button>
            </div>
        </Card>
    </Backdrop>
  )
}

export default SuccessModal