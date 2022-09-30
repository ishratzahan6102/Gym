import React from 'react';
import './blog.css'
const Blog = () => {
    return (
        <div className='blog'>
            <p>Question 1 : How does react work?</p>
            <p>Answer : ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            <p>Question 2 : Difference between props and state?</p>
            <p>Answer : Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p>
            <p>Question 3 : Usage of useEffect?</p>
            <p>Answer : useEffect() is for side-effects. A functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don't target the output value, then these calculations are named side-effects. It is also used for dependence issue.</p>
        </div>
    );
};

export default Blog;