import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
const Shop = () => {
    const[products, setProducts]= useState([])
    useEffect(()=>
        {
            fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
        },
        [])
        const [carts, setCarts]= useState([])
        useEffect(()=>{
            const savedCart =[]
            console.log('Product',products)
            const storeCart = getShoppingCart()
            for( const id in storeCart){
            const addProduct = products.find(product=>product.id === id)
            if(addProduct){
                const quantity = storeCart[id]
                addProduct.quantity = quantity
                savedCart.push(addProduct)
            }
            }
            setCarts(savedCart)
        },[products])
       
        const handleAddToCart= product=>{
            
            // const newCart = [...carts, product]
         
            let newCart =[]
            const exists = carts.find(pd => pd.id === product.id)
            if(!exists){
                product.quantity =1
                newCart =[...carts, product]
            }
            else{
                product.quantity = exists.quantity + 1
            const remaining = carts.filter(pd => pd.id !== product.id)
            newCart =[...remaining,exists]
            }

            setCarts(newCart)
            addToDb(product.id)
        }
        
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                products.map(product=><Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
            }
            </div>
            <div className="cart-container">
                <Cart carts={carts}></Cart>
            </div>
           
        </div>
    );
};

export default Shop;