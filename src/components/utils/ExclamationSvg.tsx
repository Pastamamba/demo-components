import React from 'react';

interface ExclamationSvgProps {
    fill?: string;
}

const ExclamationSvg: React.FC<ExclamationSvgProps> = ({ fill = 'red' }) => {
    return (
        <svg width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill={fill} d="M12 7h1v7h-1zm1.5 9.5a1 1 0 1 0-1 1 1.002 1.002 0 0 0 1-1zm9.3-4A10.3 10.3 0 1 1 12.5 2.2a10.297 10.297 0 0 1 10.3 10.3zm-1 0a9.3 9.3 0 1 0-9.3 9.3 9.31 9.31 0 0 0 9.3-9.3z"/>
            <path fill="none" d="M0 0h24v24H0z"/>
        </svg>
    );
};

export default ExclamationSvg;
