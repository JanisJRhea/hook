import React, { useRef } from 'react';

const FocusInput = () => {
    const inputRef = useRef(null);

    const handleButtonClick = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input type="text" ref={inputRef} placeholder="Click the button to focus me" />
            <button onClick={handleButtonClick}>Focus the input</button>
        </div>
    );
};

export default FocusInput;