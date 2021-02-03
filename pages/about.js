import React from 'react';

// functional component - arrow function
const About = () => {
    const name = 'James'
    return (
        <h1> Hello {name} </h1>
    )
}

// React.createElement('type of element', state, 'what's inside the element')
// const About = () => {
//     const name = 'James'
//     return React.createElement('h1', null, 'This is generated with createElement')
// }



// functional component - normal function
// function About() {
//     return (
//         <h1>Hello About Page</h1>
//     )
// }

export default About;