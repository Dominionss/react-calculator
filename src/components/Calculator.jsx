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
            <div className="calculator__element calculator__info">
                <div className="calculator__title">Simple Calculator</div>

                <div className="calculator__result">
                    Result: {result}
                </div>

                <input id="calculator__input" className="calculator__input"
                    value={inputValue}
                    onChange={handleChange}
                />
            </div>

            <div className="calculator__element calculator__buttons">
                <div className="calculator__operation_buttons">
                    <button className="calculator__button calculator__button-operation" onClick={add}>+</button>
                    <button className="calculator__button calculator__button-operation" onClick={subtract}>-</button>
                    <button className="calculator__button calculator__button-operation" onClick={multiply}>x</button>
                    <button className="calculator__button calculator__button-operation" onClick={divide}>/</button>
                </div>

                <div className="calculator__resets">
                    <button className="calculator__button calculator__button-reset-input" onClick={resetInput}>Reset input</button>
                    <button className="calculator__button calculator__button-reset-result" onClick={resetResult}>Reset result</button>
                </div>
            </div>

        </div>
    );
}

export default Calculator;