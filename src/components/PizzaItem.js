import React from 'react'

const PizzaItem = ({ name, image, price }) => {
    return (
        <div className='pizzaItem'>
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h3>{name}</h3>
            <p>{price} ft</p>
        </div>
    )
}

export default PizzaItem
