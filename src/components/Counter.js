import React, { useState } from 'react'
import { Button } from '@mui/material';
import '../components/counter.css'

export const Counter = () => {
    let [value, setValue] = useState(0);

    const increment = () => {
        setValue(value + 1);
    }

    const decrement = () => {
        setValue(value - 1);
    }

    return (
        <>
        <div className="counter">
            <div className='container'>
            <div className='header'>
                <h1>Counter App </h1>
            </div>

            <div className='sub-head'>
                <Button  onClick={increment} >
                    +
                    </Button>
                <Button onClick={decrement} >-</Button>
            </div>
            <h2 style={{
                textAlign: 'center'
            }}>
                {value}
            </h2>
            </div>
            </div>
        </>
    )
}
