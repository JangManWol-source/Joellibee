import React from "react";
import "./HomeFoodList.css";
import food1 from "../Resources/food1.jpg";
import food2 from "../Resources/food2.jpg";
import food3 from "../Resources/food3.jpg";
import food4 from "../Resources/food4.jpg";
import banner from "../Resources/j_banner.jpg";
import food5 from "../Resources/food5.jpg";
import info from "../Resources/info.png";
import { Link } from "react-router-dom";
const foodListData = [
  {
    id: Math.random(),
    img: food1,
    type: "Best Sellers",
  },
  {
    id: Math.random(),
    img: food2,
    type: "Chicken Joy",
  },
  {
    id: Math.random(),
    img: food3,
    type: "Family Meals",
  },
  {
    id: Math.random(),
    img: food4,
    type: "New Products",
  },
  {
    id: Math.random(),
    img: food5,
    type: "Burgers",
  },
];
const HomeFoodList = (props) => {
  return (
    <div className="homefood-list-wrapper">
      <div className="banner">
        <img src={banner} alt="" />
        <div className="w-full absolute flex justify-center md:mr-20 -bottom-4 md:justify-end">
          <Link to={"/menus/Select your order"}>
            <button className="p-4 w-auto md:w-96 md:text-base text-xs bg-orange-600 rounded-full text-white font-extrabold hover:bg-orange-700">
              START NEW ORDER
            </button>
          </Link>
        </div>
      </div>
      <div className="landing-page">
        {foodListData.map((each) => (
          <div className="food-img" key={each.id}>
            <img src={each.img} alt="" />
            <button onClick={props.Select} value={each.type}>
              <Link to={`/menus/${each.type}`}>Select</Link>
            </button>
          </div>
        ))}
      </div>

      <div className="p-4 w-full flex flex-wrap justify-between">
        <Link className="w-full md:w-2/5 flex text-2xl h-20 m-2 md:m-0 md:h-32 items-center justify-center rounded-full border-red-700 border-4 font-black text-red-800" to={"/menus/Best Offers"}>
          <div >
            <button className="">View Full Menu </button>
          </div>
        </Link>
        <div className="w-full md:w-1/2">
          <img src={info} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeFoodList;
