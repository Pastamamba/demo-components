import React from 'react';

interface TagProps {
    text: string;
    isActive?: boolean;
    isDisabled?: boolean;
}

const Tag: React.FC<TagProps> = ({ text, isActive, isDisabled }) => {
    const baseStyles = 'text-sm font-medium text-center rounded-full px-3 py-1 transition-colors cursor-pointer';
    const defaultStyles = 'bg-neutrals-white text-gray-700';
    const hoverStyles = isDisabled ? '' : 'hover:bg-fireRed-1 hover:text-neutrals-white';
    const activeStyles = 'bg-fireRed-2 hover:bg-fireRed-1 text-neutrals-white';
    const disabledStyles = 'opacity-50 bg-gray-200 text-gray-400 cursor-not-allowed';

    const styles = `${baseStyles} ${isDisabled ? disabledStyles : isActive ? activeStyles : defaultStyles} ${!isDisabled && !isActive ? hoverStyles : ''}`;

    return (
        <span className={styles} aria-disabled={isDisabled}>
            {text}
        </span>
    );
};

export default Tag;
