import React from "react";
import Game from './components/Game';
import './App.css';

function App() {

   
  return (      
    <>
    
    <div className="App">
        <section className="game-info">
            <h1>Tic Tac Toe</h1>
            <hr/>
        </section>
        <div className="area">
          <Game/>
        </div>     
    </div>
    </>   
   
  );
}

export default App;
