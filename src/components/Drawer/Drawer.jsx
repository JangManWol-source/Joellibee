import React from "react";
import classes from "../Nav/Nav.module.css";
import { motion } from "framer-motion";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Link, useHistory } from "react-router-dom";
import menuList from "./drawerData";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../features/cartCounter/uiCart";


const Drawer = (props) => {
  let history = useHistory()
  const onChangeHandler = (e) => {
    history.push(`/menus/${e.target.value}`)
    drawerClose()
  }
  const dispatch = useDispatch()
  const drawerClose  = () => {
    dispatch(toggle())
  }
  const isDrawerOpen = useSelector((state) => state.ui.drawerIsVisible)
  return (
    <React.Fragment>
      {isDrawerOpen && (
        <div className={classes.nav_left}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            onClick={drawerClose}
            className={classes.backdrop}
          ></motion.div>
          <motion.div
            initial={{ x: "-100ch", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={classes.drawer}
          >
            <div className={classes.drawer_head}>
              <div>
                <AccountCircleRoundedIcon
                  style={{ width: 50, height: "auto" }}
                />
              </div>
              <div>Sign In</div>
            </div>
            <div className={classes.drawer_menu}>
              <Link to={"/"} onClick={drawerClose}>Home</Link>
              <Link to={"/menus/Best Offer"} onClick={drawerClose}>Menu</Link>
              <select name="Menus" id="1" onChange={onChangeHandler}> 
                {menuList.map((each) => (
                  <option  value={each.name} key={Math.random()}>{each.name}</option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Drawer;
