import './App.css';

function App() {
  

  return (
    <div className="App">
     <section>
      <h1>Tic Tac Toe</h1>
      <hr/>
     </section>
     <div>
        <div>
                <input type="text" id= "b1" 
                       className="cell" onclick="myfunc_3(); myfunc();" 
                       /> 
                <input type="text" id= "b2" 
                       className="cell" onclick="myfunc_4(); myfunc();" 
                       /> 
                <input type="text" id= "b3" class="cell" 
                       onclick="myfunc_5(); myfunc();" 
                       /> 
        </div>
        <div className="row"> 
                <input type="text" id= "b4" 
                       className="cell" onclick="myfunc_6(); myfunc();" 
                       /> 
                <input type="text" id= "b5" 
                       className="cell" onclick="myfunc_7(); myfunc();" 
                       /> 
                <input type="text" id= "b6" 
                       className="cell" onclick="myfunc_8(); myfunc();" 
                       /> 
        </div> 
        <div className="row"> 
                <input type="text" id= "b7" 
                       className="cell" onclick="myfunc_9(); myfunc();" 
                       /> 
                <input type="text" id= "b8" 
                       className="cell" onclick="myfunc_10();myfunc();" 
                       /> 
                <input type="text" id= "b9" 
                       className="cell" onclick="myfunc_11();myfunc();" 
                       /> 
        </div> 
      </div>
      <br/><br/><br/> 
      <button id="but" onclick="myfunc_2()"> 
            RESET 
        </button> 
    </div>
  );
}

export default App;
