import React, {useEffect , useState} from 'react';
import MyComponenet from './components/MyComponent';
import Timer from './components/Timer';



function App() {
 const [isVissible, setIsVisible] = useState(true)
  // useEffect(()=>{

  // }, [])
  return (
    <>
    <div className="App">
     {isVissible ? <MyComponenet/>: <></>}
      <button onClick={()=>setIsVisible(!isVissible)}>Toggle</button>
    </div>

    <Timer/>
    </>
  );
}

export default App;
