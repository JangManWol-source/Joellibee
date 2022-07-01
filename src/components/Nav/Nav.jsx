import { React, useState } from "react";
import classes from "./Nav.module.css";
import logo from "../Resources/j_logo.png";
import bag from "../Resources/bag@3x.png";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Modal from "../UI/Modal";
import { toggle } from "../../features/cartCounter/uiCart";
import { useDispatch, useSelector } from "react-redux";
const Nav = (props) => {
  const [isDrawerOpen, setDrawerToOpen] = useState(false);
  const  cartContent = useSelector((state) => state.cartContentReducer.totalQuantity);
  const dispatch = useDispatch()
  console.log(cartContent)
  const drawerHandler = () => {
    dispatch(toggle())
  }
  return (
    <div>
      <Modal isDrawerOpen={isDrawerOpen} setDrawerToOpen={setDrawerToOpen} />
      <div className={classes.nav}>
        <div className={classes.nav_main}>
          <div className={classes.nav_icon}>
            <MenuRoundedIcon
              onClick={drawerHandler}
              style={{ color: "white" }}
            />
          </div>
          <div>
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className={classes.bag}>
            <div >
              <Link to={'/cart/'}>
                <img style={{ width: 30, height: "auto" }} src={bag} alt="" />
              </Link>
              <div className={classes.count}>{cartContent}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
