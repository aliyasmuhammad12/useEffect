import React, {useEffect, useState} from "react";

const Timer =()=>{
    const [time,setTime]= useState(0);

    useEffect (()=>{
      const time = setTimeOut(()=>setTime(time + 1), 1000)
    }, [])

    return(
       <div>
         <h1>Stopwatch</h1>
        <p>current time is {time}</p>
       </div>
    )
}
export default Timer;