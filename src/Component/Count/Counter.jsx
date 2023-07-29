import React from 'react'


const Counter = ({ counter, onInc, onDec }) => {
    const { count } = counter
    return (
        <div style={{border : 'none'}} >
            <button style={{border : 'none'}} onClick={() => onDec(counter)}>-</button>
            <span>{count}</span>
            <button style={{border : 'none'}} onClick={() => onInc(counter)}>+</button>
        </div>
    )
}

export default Counter
