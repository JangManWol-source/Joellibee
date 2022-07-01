import {React, Fragment} from 'react'
import ReactDOM from 'react-dom'
import Drawer from '../Drawer/Drawer'

const Modal = (props) => {
    const portalElement = document.getElementById('drawer_')
  return (
    <Fragment>
        {ReactDOM.createPortal(<Drawer />, portalElement)}
    </Fragment>
  )
}

export default Modal