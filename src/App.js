import { useState } from 'react';
import './App.css';

function App() {
  const[weight,setWeight]=useState(0);
  const[height,setHeight]=useState(0);
  const[bmi,setBmi]=useState('');
  const[message,setMessage]=useState('');

let Calcbmi =(event)=>{
  event.preventDefault();

  if(height===0 || weight===0){
    alert("please enter a valid height and weight")
  }else{
    let bmi=(weight/(height*height)*703)
    setBmi(bmi.toFixed(1))

    if(bmi<25){
      setMessage("You are underweight")
    }else if(bmi=25 && bmi<30){
      setMessage("You are helthy")
    }else{
      setMessage("You are overweight")
    }
  }
}
let reload=()=>{
  window.location.reload();
}
  return (
    <div className="App">
      <div className="container">
        <h1>BMI CALCULATOR</h1>
        <form onSubmit={Calcbmi}>
          <div>
          <label>Weight(lbs)</label><br/>
          <input type='text' placeholder='enter your weight' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
          </div>
          <div>
          <label>Height(In)</label><br/>
          <input type='text' placeholder='enter your height' value={height} onChange={(evt)=>setHeight(evt.target.value)}/>
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button><br/>
            <button className='btn-reload' onClick={reload} type='submit'>Reload</button>
          </div>
          <div className='center'>
            <h3>Your BMI is -<h1>{bmi}</h1></h3>
            <p><h2>{message}</h2></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
