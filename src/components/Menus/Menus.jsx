import { Card } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import dummyFood from '../Data/DummyFood'
import menuList from '../Data/MenuList'
import './SelectMenus.css'
import MenuItem from './MenuItem'
const SelectMenus = (props) => {
   
    let {id}= useParams()
    
    return (
        <div className="menus_holder">
            
        <div className='select-menus'>
            <Card className="card1">
                {menuList.map((each) => (
                    <Link to={`/menus/${each.name}`} key={each.id} >
                        <div className='menu_names'>
                        <Link to={`/menus/${each.name}`}>{each.name}</Link>
                    </div>
                    </Link>
                ))}
            </Card>
            <div className='select-foods'>
                <div className='head-card'>
                    <Card className='headText'>
                        <div>
                        {`${id}`}
                        </div>
                    </Card>
                </div>
                <div className="dummy-food-list">
                    {dummyFood.map((each) =>
                        <MenuItem items={each} key={each.id}/>
                    )}
                </div>
            </div>
        </div>
        </div>
    )
}

export default SelectMenus