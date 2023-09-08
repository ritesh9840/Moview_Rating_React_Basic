import React, { useState } from 'react'




const Numbers = () => {

    const [numbers, setNumbers] = useState(['One', 'Two', 'Three']);
    const [count ,setCount] = useState(0)
    
    const addNumber=()=>{

        setNumbers([...numbers,'Four'])
        console.log(count);
    }

    const addCount=()=>{
      
        setCount(count+1)
    }


    return (
        <div>
            <h1>Numbers</h1> <h2>{count}</h2>

            {numbers.map(num => { return <h4>{num}</h4> })}

            <div>
                <button type='button' onClick={addNumber}>Addd</button>
                <button type='button' onClick={addCount}>increment</button>
            </div>

        </div>
        

    )
}

export default Numbers