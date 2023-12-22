import React from 'react';

// Define the interface for the button props
interface ButtonProps {
    isActive: boolean;        // Determines if the button is in an active state
    isDisabled: boolean;      // Determines if the button is disabled
    direction: 'left' | 'right'; // Direction of the arrow icon
    size?: 'S' | 'M' | 'L';   // Optional size prop for the button (Small, Medium, Large)
}


const Button: React.FC<ButtonProps> = ({isActive, isDisabled, direction, size = 'M'}) => {
    // Base button styles
    const baseStyles = 'flex items-center justify-center transition duration-150 ease-in-out m-2 rounded-full leading-none';

    // Styles that change with button state
    const activeStyles = isActive ? 'bg-fireRed-2' : 'bg-fireRed-1';
    const disabledStyles = isDisabled ? 'opacity-50 cursor-not-allowed text-gray-400 bg-gray-600' : '';
    const hoverStyles = !isDisabled ? 'hover:bg-fireRed-2' : '';

    const arrowSize = {
        S: '16',  // Smaller size
        M: '24', // Default size
        L: '32', // Larger size
    };

    const LeftArrowSvg = (
        <svg viewBox="0 0 24 24" width={arrowSize[size]} height={arrowSize[size]} stroke="currentColor" strokeWidth="2" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
    );

    const RightArrowSvg = (
        <svg viewBox="0 0 24 24" width={arrowSize[size]} height={arrowSize[size]} stroke="currentColor" strokeWidth="2" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    );

    // Size-dependent styles
    const sizeClasses = {
        S: 'w-8 h-8 text-xl', // Smaller size
        M: 'w-12 h-12 text-2xl', // Default size
        L: 'w-16 h-16 text-3xl', // Larger size
    };
    const sizeStyles = sizeClasses[size];

    const arrowIcon = direction === 'left' ? LeftArrowSvg : RightArrowSvg;

    return (
        <button
            className={`${baseStyles} ${sizeStyles} ${isDisabled ? disabledStyles : activeStyles} ${!isDisabled && hoverStyles}`}
            disabled={isDisabled}
        >
            {/* Render the arrow SVG icon */}
            <span className="flex justify-center items-center text">
                {arrowIcon}
      </span>
        </button>
    );
};

export default Button;
