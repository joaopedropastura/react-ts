import React, { useEffect, useState } from "react";


const Counter = () => {
    const [num, setNum] = useState(0)
    const [flag, setFlag] = useState(false)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setNum(num => num + 1)
            setFlag(true)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        document.title = `title ${num}`
    }, [num])

    useEffect(() => {
        setTimeout(() => {
            setFlag(false)
        }, 3000);
    }, [flag])

    
    return (
        <>
            <span>{num}</span>
            {flag &&
                <span>MUDOOOOO</span>
            }
        </>
    )
}

const Counter2 = (props : any) => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(c => c + 1)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        document.title = String(counter)
        props.setShow(true)
    }, [counter])


    return (
        <>
            {counter}
        </>
    )
}
export default {Counter, Counter2}