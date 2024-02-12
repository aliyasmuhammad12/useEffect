import React, {useEffect, useState} from "react";

const MyComponenet=()=>{
    const [count, setCount]=useState(0);
useEffect(()=>{
    console.log("my component is mountin........")
    return function(){
    console.log("unmounting....")
    }
}, [])

    useEffect(()=>{
 console.log("the counnting value is update", count)

 return function(){
    console.log("the counting value is", count)
 }
    }, [count])
    return(
<>
<p>counter --{count}</p>
<button onClick={()=>setCount(count +1)}>change</button>
</>
)


}

export default MyComponenet;