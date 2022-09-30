import React from 'react'
import './Cart.css'
import logo from '../../../images/player-1.png'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Cart = ({cart}) => {
    console.log(cart)
    let time = 0
    for(const product of cart ){
        time = time + product.time
    }


    
        const shoot = () => {
          const breakText = document.getElementById('break-time');
          const timer = document.getElementById('break10');
          breakText.innerText = timer.innerText;
          localStorage.setItem("Break-time", "10s")
          
        }
      
        const shoot2 = () => {
          const breakText = document.getElementById('break-time');
          const timer = document.getElementById('break20');
          breakText.innerText = timer.innerText;
          localStorage.setItem("Break-time", "20s")
        }
      
        const shoot3 = () => {
          const breakText = document.getElementById('break-time');
          const timer = document.getElementById('break30');
          breakText.innerText = timer.innerText;
          localStorage.setItem("Break-time", "30s")
        }
      
        const shoot4 = () => {
          const breakText = document.getElementById('break-time');
          const timer = document.getElementById('break40');
          breakText.innerText = timer.innerText;
          localStorage.setItem("Break-time", "40s")
        }
      
        const shoot5 = () => {
          const breakText = document.getElementById('break-time');
          const timer = document.getElementById('break50');
          breakText.innerText = timer.innerText;
          localStorage.setItem("Break-time", "50s")
        }
    
        const notify = () => toast("Activity Completed!");
    return (
        <div className='cart'>
            <div className='members-info'>
                <img src={logo} alt=''></img>
                <div className='members-details'>
                    <h4>Zahid Hossain</h4>
                    <small>Sydney,Australia</small>
                </div>
            </div>

            <div className='members-info-details'>
                <div className='info'>
                    <h4>75<small>kg</small></h4>
                    <h4>6.5</h4>
                    <h4>25<small>years</small></h4>
                </div>
                <div className='info-details'>
                    <h6>Weight</h6>
                    <h6>Height</h6>
                    <h6>Age</h6>
                </div>
            </div>

                <h4>Add a break</h4>
             <div className='add-break'>
                <p  onClick={shoot}> <span id='break10' >10</span>s</p>
                <p  onClick={shoot2}> <span id='break20'>20</span>s</p>
                <p  onClick={shoot3}> <span id='break30'>30</span>s</p>
                <p  onClick={shoot4}> <span id='break40'>40</span>s</p>
                <p  onClick={shoot5}> <span id='break50'>50</span>s</p>
             </div>
             <div className='details-container'>
             <h3>Excercise Details</h3>
             <h4 className='details'>Excercise Time: {time} seconds </h4>
             <h4 className='details' >Break Time: <span id='break-time'>0</span> seconds</h4>
             </div>
             <div>
                <p className='btn' onClick={notify}>Activity Completed</p>
                <ToastContainer />
             </div>
        </div>
    );
};

export default Cart;