import React, { createElement } from 'react';

// functional component - arrow function
// When to use 
// 1. For smaller components
// 2. Resusable component
// 3. presentational components, we can use Hooks and speicify state

// const About = () => {
//     const name = 'James'
//     return (
//         <h1> Hello {name} </h1>
//     )
// }

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

// Class component
class About extends React.Component {
    
    render() {
        return (
            <h1> Hello I am a class component</h1>
        )
    }
}

export default About;