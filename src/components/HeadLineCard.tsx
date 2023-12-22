import React from 'react';
import { SignalSvg } from "./utils/SignalSvg.tsx";

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
    const baseStyles = 'transition duration-300 ease-in-out overflow-hidden rounded-lg cursor-pointer';
    const textStyles = lightTheme ? 'text-black' : 'text-white';
    const bgStyles = lightTheme ? 'bg-white' : 'bg-gray-800';
    const hoverStyles = 'group hover:bg-gray-900'; // Use group to target child components on hover

    return (
        <div
            className={`${baseStyles} ${bgStyles} ${hoverStyles} p-4`}
        >
            <div className="text-center">
                <div className="group-hover:scale-50 transition-transform duration-300 ease-in-out">
                    <SignalSvg fill={lightTheme ? '#000000' : '#FFFFFF'} />
                </div>
                <div className="mt-4">
                    <h3 className={`font-semibold text-lg ${textStyles}`}>{title}</h3>
                    <p className={textStyles}>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default HeadLineCard;
