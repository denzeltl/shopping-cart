import React from 'react';
import './CartItem.css';

function CartItem({ id, name, price, qty, updateQty }) {
    const addOne = () => {
        updateQty(id, qty + 1);
    };
    const subtractOne = () => {
        updateQty(id, qty - 1);
    };
    return (
        <li className="CartItem">
            <div>{name}</div>
            <div>${price}</div>
            <div>
                <button onClick={subtractOne} disabled={qty <= 1}>
                    -
                </button>
                <p>{qty}</p>
                <button onClick={addOne}>+</button>
            </div>
            <div>Total: ${price * qty}</div>
        </li>
    );
}

export default CartItem;
