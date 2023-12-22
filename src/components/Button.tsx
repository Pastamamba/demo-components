import React from 'react';

interface ButtonProps {
    isActive: boolean;
    isDisabled: boolean;
    direction: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({ isActive, isDisabled, direction }) => {
    const baseStyles = 'flex items-center justify-center transition duration-150 ease-in-out m-2 text-2xl';
    const activeStyles = isActive ? 'bg-fireRed-2' : 'bg-fireRed-1';
    const disabledStyles = isDisabled ? 'opacity-50 cursor-not-allowed text-gray-400 bg-gray-600' : '';
    const hoverStyles = !isDisabled ? 'hover:bg-fireRed-2' : '';
    const sizeStyles = 'w-12 h-12';
    const roundedStyles = 'rounded-full';
    const fontStyles = 'leading-none';

    const arrowStyles = 'flex justify-center items-center';

    const LeftArrowSvg = (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
    );

    const RightArrowSvg = (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    );

    const arrowIcon = direction === 'left' ? LeftArrowSvg : RightArrowSvg;

    return (
        <button
            className={`${baseStyles} ${isDisabled ? disabledStyles : `${activeStyles} ${hoverStyles}`} ${sizeStyles} ${roundedStyles} ${fontStyles}`}
            disabled={isDisabled}
        >
      <span className={arrowStyles}>
        {arrowIcon}
      </span>
        </button>
    );
};

export default Button;
