import React, { useEffect, useState } from "react";

const Calculadora = () => {


    const[num, setNum] = useState(0)
    const[num2, setNum2] = useState(0)
    const[total, setTotal] = useState('')
    const[text, setText] = useState('')
    
    
    const SplitInput = ( op : String ) => {

        const result = op.includes(' ') ? op.split(' ') : op.split('')
        const numbers: Number[] = []
        const operators: String[] = []
        
        result.map(x => isNaN(parseInt(x)) ? numbers.push(Number(x)) : (x !== ' ' ? operators.push(x) : x))
        console.log(numbers)
        console.log(operators)
        return result
    }
    

    useEffect(() => {
        try {
            setTotal(eval(text))

        } catch  {
            setTotal("error")
        }
    }, [text])
    
    return (
        <>
            <input type='text' onChange={(e) => setText(e.target.value)} ></input>
            {/* <input type="number" onChange={(e) => setNum(Number(e.target.value))}>Digite o primiero numero :</input>
            <button>calcular</button> */}

            {/* {() => setTotal(eval(text.toString()))} */}
            {total}
            {/* {SplitInput(text)} */}
        </>
    )


    
}

export default Calculadora