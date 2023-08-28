import { todoList } from '../../model/todoList'
import React, { useEffect, useReducer, useRef, useState } from "react";

const List = () => {

    const [list, setList] = useState<string[]>([])
    const [value, setValue] = useState('')
    const inputRef = useRef(null);

    const handleClick = () => {
        if (inputRef.current === null)
            return
        const temp: string = inputRef.current['value']
        setList(prev => [...prev, temp])
        console.log(list)
        setValue('');
    }

    return (
        <>
            {list}
            <input type="text" ref={inputRef}  onChange={e => setValue(e.target.value)}/>
            <button onClick={handleClick}>add</button>
        </>
    )
}

export default List