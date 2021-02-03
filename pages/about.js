import React from 'react';

// functional component
// const About = () => {
//     const name = 'James'
//     return (
//         <h1> Hello {name} </h1>
//     )
// }

const About = () => {
    const name = 'James'
    return React.createElement('h1', null, 'This is generated with createElement')
}



// functional component - normal function
// function About() {
//     return (
//         <h1>Hello About Page</h1>
//     )
// }

export default About;