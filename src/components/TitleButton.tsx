import React from 'react';

interface TitleButtonProps {
    text: string;
    isActive?: boolean;
    isDisabled?: boolean;
    lightTheme?: boolean;
}

const TitleButton: React.FC<TitleButtonProps> = ({
                                                     text,
                                                     isActive,
                                                     isDisabled,
                                                     lightTheme
                                                 }) => {
    const activeStyles = isActive ? (lightTheme ? "text-fireRed-2" : "text-oxfordBlue-3") : '';
    const hoverStyles = !isDisabled && (lightTheme ? 'hover:text-fireRed-2' : 'hover:text-oxfordBlue-4');

    const baseStyles = 'px-4 py-2 font-semibold text-sm rounded transition-all duration-200 flex items-center justify-center';
    const lightStyles = lightTheme ? 'text-fireRed-1' : 'text-neutrals-white';
    const disabledStyles = isDisabled ? 'opacity-50 cursor-not-allowed text-oxfordBlue-4' : '';
    const arrowIcon = '>';

    const buttonStyles = `${baseStyles} ${lightStyles} ${activeStyles} ${disabledStyles} ${hoverStyles}`;

    return (
        <button
            className={buttonStyles}
            disabled={isDisabled}
        >
            {text} <span className="ml-2">{arrowIcon}</span>
        </button>
    );
};

export default TitleButton;
