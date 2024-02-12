import React, {useEffect, useState} from "react";

const Timer =()=>{
    const [time,setTime]= useState(0);

    useEffect (()=>{
      const time = setInterval(()=>setTime(time + 1), 1000);

      return function(){
        clearInterval(time);
      }
    },[time])

    return(
       <div>
         <h1>Stopwatch</h1>
        <p>current time is {time}</p>
       </div>
    )
}
export default Timer;