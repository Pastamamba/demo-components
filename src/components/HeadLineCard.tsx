import React from 'react';
import {SignalSvg} from "./utils/SignalSvg.tsx";
import {CheckMarkSvg} from "./utils/CheckMarkSvg.tsx";

interface HeadLineCardProps {
    title: string;
    text: string;
    lightTheme?: boolean;
    size?: 'S' | 'M' | 'L'; // Size prop
}

const HeadLineCard: React.FC<HeadLineCardProps> = ({
                                                       title,
                                                       text,
                                                       lightTheme = true,
                                                       size = 'M'
                                                   }) => {
    // Base styles for the card
    const baseStyles = 'transition duration-300 ease-in-out overflow-hidden rounded-lg cursor-pointer flex flex-col items-start';
    // Text color based on light or dark theme
    const textStyles = lightTheme ? 'text-black' : 'text-white';
    // Background color styles
    const bgStyles = lightTheme ? 'bg-white' : 'bg-gray-800';
    // Hover styles for the SVG icon
    const svgHoverStyles = lightTheme ? 'group-hover:text-black' : 'group-hover:text-white';

    return (
        <div className={`${baseStyles} ${bgStyles} p-4 w-full`}>
            <div className={`transition-transform duration-300 ease-in-out ${svgHoverStyles}`}>
                {/* Render the SVG component with the appropriate fill color */}
                {size === 'S' ? <CheckMarkSvg fill={lightTheme ? 'black' : "white"} /> : <SignalSvg fill={'red'}/>}
            </div>
            <div className="mt-4"> {/* Add margin-top to separate SVG from the text */}
                <h3 className={`font-semibold text-lg ${textStyles}`}>{title}</h3>
                <p className={textStyles}>{text}</p>
            </div>
        </div>
    );
};

export default HeadLineCard;
