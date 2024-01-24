import React from 'react';
import CandleFlame from './CandleFlame';

function App() {
    const repeatedElement = (element, times) => Array(times).fill(element);


// Creating a list with five entries of the number 42
const listOf42s = repeatedElement(<CandleFlame />, 7);
function func(){
    listOf42s.forEach(element =>{
        return element;
    });
}
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        
        for (let i = 0; i < 7; i++) {
    setTimeout(()=>{return <CandleFlame/>}, i * 1000);
}
      
    </div>
  );
}

export default App;
