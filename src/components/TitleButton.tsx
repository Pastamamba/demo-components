import React from 'react';

interface TitleButtonProps {
    text: string;
    isActive?: boolean;
    isDisabled?: boolean;
    lightTheme?: boolean;
    size?: 'S' | 'M' | 'L'; // Size prop to control the size of the button
}

// SVG arrow icon component
const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
         strokeLinejoin="round">
        <path d="M9 18l6-6-6-6"/>
    </svg>
);

const TitleButton: React.FC<TitleButtonProps> = ({
                                                     text,
                                                     isActive,
                                                     isDisabled,
                                                     lightTheme,
                                                     size = 'M', // Default size is M
                                                 }) => {
    const activeStyles = isActive ? (lightTheme ? "text-fireRed-2" : "text-oxfordBlue-3") : '';
    const hoverStyles = !isDisabled && (lightTheme ? 'hover:text-fireRed-2' : 'hover:text-oxfordBlue-4');

    // Define base styles for the button
    const baseStyles = 'font-semibold rounded transition-all duration-200 flex items-center justify-center';

    // Adjust text and icon size based on size prop
    const textSize = size === 'S' ? 'text-xs' : size === 'L' ? 'text-base' : 'text-sm';
    const paddingSize = size === 'S' ? 'px-2 py-1' : size === 'L' ? 'px-6 py-3' : 'px-4 py-2';
    const iconSize = size === 'S' ? 'w-4 h-4' : size === 'L' ? 'w-8 h-8' : 'w-6 h-6';

    // Apply light or dark styles based on lightTheme prop
    const lightStyles = lightTheme ? 'text-fireRed-1' : 'text-neutrals-white';
    const disabledStyles = isDisabled ? 'opacity-50 cursor-not-allowed text-oxfordBlue-4' : '';

    // Combine all style classes into one string
    const buttonStyles = `${baseStyles} ${textSize} ${paddingSize} ${lightStyles} ${activeStyles} ${disabledStyles} ${hoverStyles}`;

    return (
        <button
            className={buttonStyles}
            disabled={isDisabled}
        >
            {text}
            <span className={`ml-2 ${iconSize}`}> {/* Apply size to the icon */}
                <ArrowIcon/>
      </span>
        </button>
    );
};

export default TitleButton;
