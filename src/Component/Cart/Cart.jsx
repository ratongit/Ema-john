import React from 'react';
import './Cart.css'
const Cart = ({carts}) => {
   let total =0;
   let totalShipping = 0
   let quantity = 0
   for(const product of carts){
    //1st SOlution
    // product.quantity = product.quantity || 1;

    //2nd solution
    // if(product.quantity === 0){
    //     product.quantity =1
    // }
    total = total + product.price * product.quantity
    totalShipping = total + product.shipping * product.quantity
    quantity = quantity + product.quantity
   }
   const tax = total*7/100
   const grandTotal = total + totalShipping + tax

    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <p>Selct item :{quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Shipping : {totalShipping}</p>
            <p>Tax : {tax}</p>
            <p>Grandtotal : {grandTotal}</p>
        </div>
    );
};

export default Cart;