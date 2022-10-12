import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto mt-8 md:w-3/4 md:p-10 p-3 rounded-xl  bg-lime-300'>
                <div>
                    <p>Question number 01: What is the purpose of react router?</p>
                    <hr />
                </div>
                <div>
                    <h4>Answer:</h4>
                    <p>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                </div>
            </div>
            <div className='w-11/12 mx-auto mt-8 md:w-3/4 md:p-10 p-3 rounded-xl  bg-lime-300'>
                <div>
                    <p>Question number 02: What do you know about useRef Hooks ?</p>
                    <hr />
                </div>
                <div>
                    <h4>Answer:</h4>
                    <p>The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue). The returned object will persist for the full lifetime of the component.</p>
                </div>
            </div>
            <div className='w-11/12 mx-auto mt-8 md:w-3/4 md:p-10 p-3 rounded-xl  bg-lime-300'>
                <div>
                    <p>Question number 03: How does context API works?</p>
                    <hr />
                </div>
                <div>
                    <h4>Answer:</h4>
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;