import React from 'react';
import Menus from './components/Menus';

function App() {
    return (
      <div className="App">
             
             <div className="container">

               <div className="taskInfo">
                  <h1>qopla.com</h1> 
                  <h2>Task</h2>
                  <p>2019-08-26</p>
                </div> 

                <Menus />  {/* Main Menu Containing   2 menus */}
             </div>

      </div>
    );
  }



export default App;
