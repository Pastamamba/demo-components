import React, { useState, useEffect } from 'react';

interface InputProps {
    text: string;
    inputChange?: (text: string) => void;
    lightScheme: boolean;
    isDisabled: boolean;
}

const InputComponent: React.FC<InputProps> = ({
                                                  text,
                                                  inputChange,
                                                  lightScheme,
                                                  isDisabled,
                                              }) => {
    const [inputText, setInputText] = useState(text);
    const [isTyping, setIsTyping] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setInputText(text);
    }, [text]);

    useEffect(() => {
        setIsFilled(inputText !== '' && !isTyping);
    }, [inputText, isTyping]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsTyping(true);
        setInputText(event.target.value);
        if(inputChange) {
            inputChange(event.target.value);
        }
    };

    const handleBlur = () => {
        setIsTyping(false);
        setHasError(inputText === ''); // You can add more validation logic here
    };

    const baseStyles = 'border-1 rounded-full border-slate-3 p-2 outline-none w-full transition duration-300';
    const textColor = lightScheme ? 'text-black' : 'text-white';
    const filledBorderColor = isFilled ? (lightScheme ? 'border-slate-5 bg-oxfordBlue-5' : 'border-neutrals-white bg-oxfordBlue-2') : '';
    const borderColor = hasError ? 'border-fireRed-2 bg-fireRed-5' : filledBorderColor;
    const placeholderColor = lightScheme ? 'placeholder-gray-400' : 'placeholder-gray-600';

    const checkMarkColor = lightScheme ? 'text-neutrals-black' : 'text-neutrals-white';

    return (
        <div className="relative">
            <input
                type="text"
                value={inputText}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${baseStyles} ${textColor} ${placeholderColor} ${borderColor}
                ${isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-text'}`}
                placeholder="Jméno"
                disabled={isDisabled}
            />
            {isFilled && !hasError && !isDisabled && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className={`w-6 h-6 ${checkMarkColor}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                    </svg>
                </span>
            )}
            {hasError && (
                <p className="text-fireRed-2 text-xs italic mt-2 ml-2">
                    Error: Field can't be empty
                </p>
            )}
        </div>
    );
};

export default InputComponent;
