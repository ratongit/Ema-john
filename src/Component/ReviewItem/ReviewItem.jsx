import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({product}) => {
    const {img,name,price,quantity} = product
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-info'>
            <h4>{name}</h4>
            <p>Price : <span className='price'>${price}</span></p>
            <p>Order Quantity : {quantity}</p>
            </div>
            <div className='delete-review'> 
            <FontAwesomeIcon className='icon' icon={faTrashAlt} />
 
            </div>
        </div>
    );
};

export default ReviewItem;