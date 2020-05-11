import React, { useState } from 'react';
import CartItem from './CartItem';
import './Cart.css';

function Cart({ items }) {
    const [item, setItem] = useState(items);
    const updateQty = (id, newQty) => {
        const newItems = item.map((item) => {
            if (item.id === id) {
                return { ...item, qty: newQty };
            }
            return item;
        });
        setItem(newItems);
    };
    const grandTotal = item.reduce((total, item) => total + item.qty * item.price, 0).toFixed(2);

    return (
        <div className="Cart">
            <h1>Shopping Cart</h1>
            <ul className="Cart__List">
                {item.map((item) => (
                    <CartItem key={item.id} {...item} updateQty={updateQty} />
                ))}
            </ul>
            <h2>Grand Total: ${grandTotal}</h2>
        </div>
    );
}

export default Cart;
