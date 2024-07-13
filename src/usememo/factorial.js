import React, { useState, useMemo } from 'react';

const factorial = (n) => {
    if (n <= 0) return 1;
    return n * factorial(n - 1);
};

const Factorial = () => {
    const [number, setNumber] = useState(1);
    const [inputValue, setInputValue] = useState('');

    const computedFactorial = useMemo(() => {
        console.log('Calculating factorial...');
        return factorial(number);
    }, [number]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value)) {
            setNumber(value);
        }
    };

    return (
        <div>
            <h3>Factorial Calculator</h3>
            <input
                type="number"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter a number"
            />
            <p>Factorial of {number} is {computedFactorial}</p>
        </div>
    );
};

export default Factorial;