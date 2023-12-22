import React from 'react';

interface ButtonProps {
    isActive: boolean;
    isDisabled: boolean;
    direction: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({ isActive, isDisabled, direction }) => {
    const baseStyles = 'flex items-center justify-center transition duration-150 ease-in-out m-2 text-2xl';
    const activeStyles = isActive ? 'bg-fireRed-2' : 'bg-fireRed-1';
    const disabledStyles = isDisabled ? 'opacity-50 cursor-not-allowed text-oxfordBlue-4 bg-oxfordBlue-6' : '';
    const hoverStyles = !isDisabled ? 'hover:bg-fireRed-2' : '';
    const sizeStyles = 'w-12 h-12';
    const roundedStyles = 'rounded-full';
    const fontStyles = 'leading-none';

    const arrowStyles = 'flex justify-center items-center';

    const arrowIcon = direction === 'left' ? '<' : '>';

    return (
        <button
            className={`${baseStyles} ${isDisabled ? disabledStyles : `${activeStyles} ${hoverStyles}`} ${sizeStyles} ${roundedStyles} ${fontStyles}`}
            disabled={isDisabled}
        >
            <span className={arrowStyles}>{arrowIcon}</span>
        </button>
    );
};

export default Button;
