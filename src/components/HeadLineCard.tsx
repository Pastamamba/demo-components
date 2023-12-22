import React from 'react';
import {SignalSvg} from "./utils/SignalSvg.tsx";

interface HeadLineCardProps {
    title: string;
    text: string;
    lightTheme?: boolean;
}

const HeadLineCard: React.FC<HeadLineCardProps> = ({
                                                         title,
                                                         text,
                                                         lightTheme = true
                                                     }) => {
    const baseStyles = 'transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-md cursor-pointer';
    const lightStyles = lightTheme ? 'bg-white text-black' : 'bg-gray-800 text-white';
    const hoverStyles = 'hover:bg-gray-900 hover:text-gray-100';

    return (
        <div
            className={`${baseStyles} ${lightStyles} ${hoverStyles} p-4`}
        >
            <div className="flex items-center">
                <SignalSvg fill = '#cb2b2b' />
                <div className="ml-4">
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default HeadLineCard;
