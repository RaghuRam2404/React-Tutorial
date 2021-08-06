// This JS file is the entry point
// we can import from react dependency if we need
// or write some functions
// or just react and a function

import React from 'react' //This is ES6 functionality. And we need this if we are going to create a React component
import reactDom from 'react-dom'
import ReactDom from 'react-dom'

// Just a normal JS function
// But we will start the function name with capital letter, just to tell React that this is a component
// And react's component must return HTML or offically called JSX
// It is STATELESS FUNCTIONAL COMPONENT

//JSX Rules
//return only one element (with zero or more child elements)
//use className instead of class as per ES6. It'll be rendered as 'class' in html. It is because class is already a keyword.
function Greeting(){
  return (
    <heading className='hname'>
      <h1>Hello World</h1>
    </heading>
  ) // paranthesis is not required, but it will make the coding easier
}

const Greeting2 = () => {
  return React.createElement('h1', {}, 'hello world - h1')
  //not useful when there are child elements. It's messy
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h1', {}, 'hellow world')
  // )
}

// now render the component, by injecting the JS into the html
// it looks for what we are going to render and where to render
ReactDom.render(<Greeting2/>, document.getElementById('root'))
ReactDom.render(<Greeting/>, document.getElementById('root'))

/* --------------------------------------------------------------------------- */

/***** NESTED COMPONENT *****/

//This is a normal component
function NameMessage(){
  return (
    <div>
      <h2>John Doe</h2>
      <p>This is the description about John</p>
    </div>
  );
}

//This is the nested format
//we can use this a lego block
const Person = () => <h2>John Doe</h2> // we can return html like this or like below
const Description = () => {
  return <p>this is the description about John</p>
}
const NameMessageNested = () => {
  return (
    <div>
      <Person />
      <Description />
    </div>
  )
}

reactDom.render(<NameMessageNested />, document.getElementById('nestedcomp'))