import React from 'react'
import './HomeFoodList.css'
import food1 from '../Resources/food1.jpg'
import food2 from '../Resources/food2.jpg'
import food3 from '../Resources/food3.jpg'
import food4 from '../Resources/food4.jpg'
import banner from '../Resources/j_banner.jpg'
import food5 from '../Resources/food5.jpg'
import info from '../Resources/info.png'
import { Link } from 'react-router-dom'
const foodListData = [
  {
    id: Math.random(),
    img: food1,
    type: 'Best Sellers'
  },
  {
    id: Math.random(),
    img: food2,
    type: 'Chicken Joy'
  },
  {
    id: Math.random(),
    img: food3,
    type: 'Family Meals'
  },
  {
    id: Math.random(),
    img: food4,
    type: 'New Products'
  },
  {
    id: Math.random(),
    img: food5,
    type: 'Burgers'
  },
]
const HomeFoodList = (props) => {
  return (
    <div className='homefood-list-wrapper'>
      <div className='banner'>
        <img src={banner} alt="" />
        <div className='button'>
          <Link to={'/menus/Select your order'}>
          <button>START NEW ORDER</button></Link>
        </div>
      </div>
      <div className="landing-page">
        {foodListData.map((each) => (
          <div className='food-img' key={each.id}>
            <img src={each.img} alt="" />
            <button onClick={props.Select} value={each.type}><Link to={`/menus/${each.type}`}>Select</Link></button>
          </div>

        ))}
      </div>
      <div className='full-menu'>
        <div className='full-menu-btn'>
          <div>
        <Link to={'/menus/Best Offers'}>  <button>View Full Menu </button></Link>
          </div>
          <div>
          <img src={info} alt="" />
          </div>
        </div>


      </div>
    </div>
  )
}

export default HomeFoodList