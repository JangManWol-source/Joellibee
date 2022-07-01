import { Backdrop, Button, Card } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toggleAlert, toggleSuccess } from '../../features/cartCounter/uiCart'
import './AlertModal.css'
const AlertModal = () => {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.cartContentReducer.items)
    const isAlertShow = useSelector((state) => state.ui.alertShow)
    const closeHandler = () => {
        dispatch(toggleAlert())
    }
    const history = useHistory()
  return (
    <Backdrop open={isAlertShow}  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} className="alert_backdrop">
        <Card className='card'>
            <div className="question">
                Are you sure you want to check out this item?
            </div>
            <div>
                {items.map((each) => <Card key={each.id} className='alert_card'>
                    <div className="alert_header">
                        <div className="alert_img">
                            <img src={each.img} alt="" />
                        </div>
                        <div className="alert_name">
                            {each.name}
                            <br />
                            x{each.quantity}
                        </div>
                    </div>
                </Card>)}
            </div>
            <div className='alert_btn'>
                <Button color='error' size='small' variant='contained' onClick={closeHandler}>Cancel</Button>
                <Button color='success' size='small' variant='contained' onClick={()=>{
                    closeHandler()
                    history.push('/')
                    dispatch(toggleSuccess())
                }}>
                    Confirm
                </Button>
            </div>
        </Card>
    </Backdrop>
  )
}

export default AlertModal