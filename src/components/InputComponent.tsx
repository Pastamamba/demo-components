import React, { useState, useEffect } from 'react';
import ExclamationSvg from "./utils/ExclamationSvg.tsx";

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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsTyping(true);
        setInputText(event.target.value);
        if (inputChange) {
            inputChange(event.target.value);
        }
    };

    useEffect(() => {
        setIsFilled(inputText !== '' && !isTyping);
    }, [inputText, isTyping]);

    const handleBlur = () => {
        setIsTyping(false);
        setHasError(inputText === ''); // You can add more validation logic here
    };

    const typingBgColor = isTyping ? (lightScheme ? 'bg-oxfordBlue-6' : 'bg-slate-1') : '';
    const baseStyles =
        'rounded-full p-2 outline-none w-full transition duration-300 border-solid border-2';
    const textColor = lightScheme ? 'text-black' : 'text-white';
    const filledBorderColor = isFilled
        ? lightScheme
            ? 'border-slate-5 bg-oxfordBlue-5'
            : 'border-neutrals-white bg-oxfordBlue-2'
        : '';
    const borderColor = hasError ? (lightScheme ? 'border-fireRed-2 bg-fireRed-5' : 'border-fireRed-2 bg-fireRed-8') : filledBorderColor;
    const placeholderColor = lightScheme ? 'placeholder-gray-400' : 'placeholder-gray-600';

    const checkMarkColor = lightScheme ? 'text-neutrals-black' : 'text-neutrals-white';
    const labelClasses = inputText || isTyping
        ? 'absolute left-3.5 -top-0.5 transform text-gray-700 pointer-events-none transition-all'
        : 'absolute left-3.5 top-3.5 text-gray-500 pointer-events-none transition-all';

    return (
        <div className="relative">
            <input
                type="text"
                value={inputText}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${baseStyles} ${textColor} ${placeholderColor} ${borderColor} ${typingBgColor}
                ${isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-text'}`}
                placeholder="Jméno"
                disabled={isDisabled}
            />
            <label htmlFor="inputField" className={`${labelClasses} text-xs`}>
                {inputText && !isDisabled ? 'Jméno' : ''}
            </label>
            {isFilled && !hasError && !isDisabled && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                        className={`w-6 h-6 ${checkMarkColor}`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M5 13l4 4L19 7" />
                    </svg>
                </span>
            )}
            {hasError && (
                <span className="absolute inset-y-0 right-0 -top-1/3 flex items-center pr-3">
                    <ExclamationSvg fill="red" />
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
