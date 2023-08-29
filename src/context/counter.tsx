import React, { useState } from 'react';
import { createContext, useContext } from "react"

export const CounterContext = React.createContext({});
CounterContext.displayName = 'Counter';


interface Props{
    children : JSX.Element
}

interface CounterContextProvider{
    num: number,
    setNum : React.Dispatch<React.SetStateAction<number>>
    handleDown: () => void,
    handleUp: () => void,
}

export const CounterProvider = ({ children } : Props) => {
    const [num, setNum] = useState(0);
    function handleDown() {
        setNum(num => num - 1)
    }
    function handleUp() {
        setNum(num => num + 1)
    }
    return (
        <CounterContext.Provider
            value={{
                num,
                setNum,
                handleDown,
                handleUp
            }}
        >
            {children}
        </CounterContext.Provider>
    )
}