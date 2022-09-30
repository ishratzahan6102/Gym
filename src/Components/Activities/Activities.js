import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import './Activities.css'
import Cart from './Cart/Cart';
import Excercises from './Excercises/Excercises';


const Activities = () => {
    const [products , setProducts] = useState([]);
    const [cart , setCart] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    useEffect(() =>{
        const storedCart = getStoredCart();
        const savedCart = [] ;
        for (const id in storedCart){
            const addedProducts = products.find(product => product.id === id)
            if(addedProducts){
                const quantity = storedCart[id]
                addedProducts.quantity = quantity
                savedCart.push(addedProducts)
                //  console.log(addedProducts)
            }
           
        }

        setCart(savedCart)
    },[products])
    const handleClick = (selectedProduct) =>{
        // console.log(product)
        let newCart = []
        const exists = cart.find(product => product.id === selectedProduct.id )
        if(!exists){
            selectedProduct.quantity = 1;
             newCart =[...cart, selectedProduct];
        }
        else{
            const rest  = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
             newCart =  [...rest, exists]
        }
        
        setCart(newCart)
        addToDb(selectedProduct.id)
    }
    return (
        <div className='activities'>
        <div className='heading'>
            <h1>Be-pro Wrestler</h1>
            <h3>Today's exercises</h3>
            <div className='excercises-container' >
                {
                    products.map(product => <Excercises key ={product.id} product={product} handleClick = {handleClick}></Excercises>)
                }
            </div>
            
            </div>
            <div className='cart-container'>
            <Cart cart={cart} 
            ></Cart>
            </div>
        </div>
    );
};

export default Activities;