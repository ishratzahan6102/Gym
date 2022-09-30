import React from 'react';
import './Excercises.css'

const Excercises = (props) => {
    const {product,handleClick} = props
    const {name, img, age, time, p} = product;
    return (
        <div className='excercise'>
             <div>
            <img src={img} alt=''></img>
            <h4>{name}</h4>
            <p>{p}</p>
            <h5>For age : {age}</h5>
            <p>Time required : {time}</p>
           </div>
            <button onClick={() => handleClick(product)} className='product-btn'>
                <p>Add to cart</p></button>
        </div>
    );
};

export default Excercises;
