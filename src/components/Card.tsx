import React, { useState } from 'react';
import Tag from "./Tag.tsx";
import TitleButton from "./TitleButton.tsx";

// Define the props interface for the Card component
interface CardProps {
    image: string;              // The URL of the image
    title: string;              // The title of the card
    description: string;        // The description text
    isActive?: boolean;         // Whether the card is active (optional)
    tags: string[];             // An array of tags
    date: string;               // The date associated with the card
    size?: 'S' | 'M' | 'L';     // Size prop ('S' for Small, 'M' for Medium, 'L' for Large)
}

// Card component
const Card: React.FC<CardProps> = ({
                                       image,
                                       title,
                                       description,
                                       tags,
                                       date,
                                       isActive,
                                       size = 'M'
                                   }) => {
    // State to track hover state
    const [isHovering, setIsHovering] = useState(false);

    // Determine the width size based on the 'size' prop
    const widthSize = size === "S" ? "w-64" : "w-96";

    // Base styles for the card
    const baseStyles = `rounded-lg overflow-hidden shadow-md max-w-xs mx-auto transition duration-200 ease-in-out ${widthSize}`;

    // Hover styles for the card
    const hoverStyles = 'hover:shadow-lg';

    // Styles for the card image
    const imageStyles = 'w-full object-cover'; // object-cover to ensure the image covers the div nicely

    // Determine the image size styles based on the 'size' prop
    const imgSizeStyles = size === 'S' ? 'max-h-40 w-64' : 'max-h-52 w-96';

    return (
        <div
            className={`${baseStyles} ${hoverStyles} relative bg-neutrals-white`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Card image */}
            <img className={`${imageStyles} ${imgSizeStyles} cursor-pointer`} src={image} alt="House" />

            {/* Tag container */}
            <div className="absolute top-0 left-0 mt-2 ml-2 flex flex-wrap gap-1">
                {tags.map((tag, index) => (
                    <Tag key={index} text={tag} isActive={isHovering ? isHovering : isActive} />
                ))}
            </div>

            {/* Card content */}
            <div className="p-4">
                <p className="text-sm text-gray-600">{date}</p>
                <h5 className="text-lg font-bold tracking-tight text-gray-900">{title}</h5>
                <p className="font-normal text-gray-700">{description}</p>
                <span className="text-indigo-600 text-sm font-medium">
                    <TitleButton text="Show More" lightTheme={true} isActive={isHovering ? isHovering : isActive} />
                </span>
            </div>
        </div>
    );
};

export default Card;
