import React, { useState } from 'react';
import Tag from "./Tag.tsx";
import TitleButton from "./TitleButton.tsx";

interface CardProps {
    image: string;
    title: string;
    description: string;
    isActive?: boolean;
    tags: string[];
    date: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, tags, date, isActive }) => {
    const [isHovering, setIsHovering] = useState(false);
    const baseStyles = 'rounded-lg overflow-hidden shadow-md max-w-xs mx-auto transition duration-200 ease-in-out w-96';
    const hoverStyles = 'hover:shadow-lg';
    const imageStyles = 'w-full object-cover'; // object-cover to ensure the image covers the div nicely
    const tagContainerStyles = 'absolute top-0 left-0 mt-2 ml-2';

    return (
        <div
            className={`${baseStyles} ${hoverStyles} relative bg-neutrals-white`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <img className={`${imageStyles} max-h-52 w-96 cursor-pointer`} src={image} alt="House" />
            <div className={`${tagContainerStyles} flex flex-wrap gap-1`}>
                {tags.map((tag, index) => (
                    <Tag key={index} text={tag} isActive={isHovering ? isHovering : isActive}/>
                ))}
            </div>
            <div className="p-4">
                <p className="text-sm text-gray-600">{date}</p>
                <h5 className="text-lg font-bold tracking-tight text-gray-900">{title}</h5>
                <p className="font-normal text-gray-700">{description}</p>
                <span className="text-indigo-600 text-sm font-medium">
                    <TitleButton text="Zobrazit více" lightTheme={true} isActive={isHovering ? isHovering : isActive} />
                </span>
            </div>
        </div>
    );
};

export default Card;
