import { Button, Card } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../features/cartContent/cartContent";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import "./Cart.css";
import AlertModal from "../UI/AlertModal";
import { toggleAlert } from "../../features/cartCounter/uiCart";
const Cart = () => {
  const items = useSelector((state) => state.cartContentReducer.items);
  const totalAmount = useSelector(
    (state) => state.cartContentReducer.overAllPrice
  );
  const dispatch = useDispatch();
  const checkOutHandler = () => {
    dispatch(toggleAlert());
  };
  return (
    <React.Fragment>
      <AlertModal />
      <div className="cart">
        <div className="cart_content">
          <div className="cart_title">Cart Items</div>

          {items.length === 0 && <div className='no_data'>No cart items added yet</div>}
          <div>
            {items.map((each) => (
              <Card className="cart_card" key={each.id}>
                <div className="cart_header">
                  <div>
                    <img src={each.img} alt="" />
                  </div>
                  <div className="cart_header_info">
                    <div className="cart_name">{each.name}</div>

                    <div className="cart_price">
                      ₱ {parseFloat(each.price).toFixed(2)}
                    </div>
                  </div>
                </div>
                <div className="cart_bottom">
                  <div className="cart_operations">
                    <div className="cart_quantity">
                      Quantity: {each.quantity}
                    </div>
                    <div>
                      <AddBoxIcon
                        onClick={() => {
                          const { id, img, name, price, quantity, totalPrice } =
                            each;
                          dispatch(
                            addItemToCart({
                              id,
                              img,
                              name,
                              price,
                              quantity,
                              totalPrice,
                            })
                          );
                        }}
                      />
                      <IndeterminateCheckBoxIcon
                        onClick={() => {
                          dispatch(removeItemFromCart(each.id));
                        }}
                      />
                    </div>
                  </div>
                  <div className="cart_total_price">
                    = ₱ {parseFloat(each.totalPrice).toFixed(2)}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          {items.length > 0 && (
            <div className="cart_item_bottom">
              <div className="cart_total_amount">
                Total Amount: ₱ {parseFloat(totalAmount).toFixed(2)}
              </div>
              <div>
                <Button
                  sx={{ backgroundColor: "#e4163d" }}
                  size="small"
                  onClick={checkOutHandler}
                  variant="contained"
                >
                  Check Out
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
   
    </React.Fragment>
  );
};

export default Cart;
