import React from 'react';
import { addToDb } from '../../Utilities/addToDb';
import { removeDb } from '../../Utilities/removeDb';

import './Cosmetic.css'

const Cosmetic = (props) => {

    const addCart = (id) => {
        // console.log('item added', id);
        addToDb(id)

    }

    const removeFromCart = (id) => {
        removeDb(id);
        console.log('remove', id)
    }

    // const addingCart = () => addCart(id)

    const { name, id, phone, price } = props.cosmetic
    return (
        <div className='product'>
            <h2>Name: {name} </h2>

            <h3>Id: {id} </h3>
            <h3>phone: {phone}</h3>
            <h3>price: {price}</h3>

            <button style={{ marginBottom: '10px' }} onClick={() => addCart(id)}>Add to Cart</button>

            <button onClick={() => removeFromCart(id)}>Remove from cart</button>

        </div>
    );
};

export default Cosmetic;