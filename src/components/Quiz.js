import React,{useState} from 'react'

const Quiz = () =>{
    const [currentCount,setCount]=useState(0)

    const onButtonClick = () =>{
        setCount(currentCount+1)
    };

    return(
     <div>
         <button onClick={onButtonClick}>Click me</button>

         <h1>Current Count:{currentCount}</h1>
     </div>

    )
}

export default Quiz