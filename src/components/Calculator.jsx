import React, { useState } from 'react';
import "../assets/styles/Calculator.css";


function Calculator() {

    const [result, setResult] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const add = () => setResult(result + Number(inputValue));
    const subtract = () => setResult(result - Number(inputValue));
    const multiply = () => setResult(result * Number(inputValue));
    const divide = () => setResult(result / Number(inputValue));

    const resetInput = () => setInputValue('');
    const resetResult = () => setResult(0);

    return(
        <div className="calculator">
            <div className="calculator__element">
                <h1>Simplest Working Calculator</h1>

                <h2>{result}</h2>
                <input
                    type="number"
                    value={inputValue}
                    onChange={handleChange}
                />
            </div>

            <div className="calculator__element">
                <button onClick={add}>add</button>
                <button onClick={subtract}>subtract</button>
                <button onClick={multiply}>multiply</button>
                <button onClick={divide}>divide</button>

                <button onClick={resetInput}>reset input</button>
                <button onClick={resetResult}>reset result</button>
            </div>

        </div>
    );
}

export default Calculator;