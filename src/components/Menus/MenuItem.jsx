import { Card } from "@mui/material";
import React from "react";
import MenuForm from "./MenuForm";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../features/cartContent/cartContent";
const MenuItem = (props) => {
  const dispatch = useDispatch()
  const {img, id, name, price} = props.items

  const onAddToCartHandler = (quantity) => {
    const totalPrice = quantity * price
    dispatch(addItemToCart(
      {
        id,
        img,
        name,
        price,
        quantity,
        totalPrice,
      }
      ))
  }

  return (
    <Card className="dummy-food-card" >
      <div>
        <img src={props.items.img} alt="" />
      </div>
      <div className="dummy-desc">
        <div className="name">{props.items.name}</div>
        <div className="price">Start at ₱ {parseFloat(props.items.price).toFixed(2)}</div>
        <MenuForm id={props.items.id} onAddToCart={onAddToCartHandler}/>
      </div>
    </Card>
  );
};

export default MenuItem;
