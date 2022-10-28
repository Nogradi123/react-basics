// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




// Functional Component -- These are mainly used for display of info and will be the main type of component that you will be utilizing 

// import React from 'react'

// export default function App() {
//     function sayHiWorld() {
//       return (<p>Hi World!</p>);
//     }

//   // for any function that returns html elements, the return can only be 1 html element. This means that you will usually have to wrap everything that you return in some wrapper element like a div of utilitze shortcut <> [content here] </>
//   return (
//     <div>
//       App

//       {/* {<p>{sayHiWorld()}</p>} */}
//       {sayHiWorld()}
//       <p>this is so cool</p>
//     </div>
    // if you want a function to be called upon return, then include the ().
    // for onClick or passing props, you usually dont use the () when calling the function
//   )
// }


// =========================================================================


// Class Component 

import React, { Component } from 'react'

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      blah: 'name',
      favNumber: 9
    }
  }
  // terniaries go hand in hand with react 
  // randomNum = () => Math.floor(Math.random() * 10) % 3 === 0


  updateBlah() {
    this.setState({blah: 'Updated Blah'});
    // setTimeout(()=> {
    //   this.updateBlah();
    // }, 3000)
  }

  render() {
    // console.log("This is my log in the class component for App");

    // this.updateBlah();
    
    return (
      <div>
        {/* {this.state.user ? <a href='/logout'>Log Out</a> : <a href='/login'>Log In</a>} */}
        <h1>App</h1>
        {this.updateBlah()}
        <p>{this.state.favNumber}</p>
      </div>
    )
  }
}



