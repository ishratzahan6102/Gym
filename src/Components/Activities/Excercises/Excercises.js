import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import './Excercises.css'

const Excercises = (props) => {
    const {product,handleClick} = props
    const {name, img, age, time, p} = product;
    let btns = document.getElementsByClassName("product-btn")
    for(let btn of btns){
        btn.addEventListener("click", function(){
            btn.style.backgroundColor = "black"
        })
    }
    
    return (

        <div className='excercise'>
             <div className='excercise-details'>
                <div>
                    <img src={img} alt=''></img>
                </div>
                
                <h4>{name}</h4>
                <p>{p}</p>
                <h5>For age : {age}</h5>
                <p>Time required : {time}s</p>
           </div>
            <button onClick={() => handleClick(product)} className='product-btn'>
                <p className='added'>Add to cart</p></button>
        </div>
    );
};

export default Excercises;
