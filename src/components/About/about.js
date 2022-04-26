import React from 'react';
import './about.css';

function About(){
    return(
        <div className='about'>
        <div className='text'>
            <h1>About Us</h1>
            <p>Foodies is a fine dining restaurant. Delicious meals available.<br></br> You have to make a reservation before coming.</p>
        </div>

        <div className='bottomimg'>
        <img src='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&q=80'></img>
    </div>

        <div className='images'>
            <img src='https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'></img>
            <img src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'></img>
        </div>

       
        </div>
    )
}

export default About;