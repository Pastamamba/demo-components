import React, {useState, useEffect} from "react";
import {SignalSvg} from "./utils/SignalSvg.tsx";

type CustomButtonProps = {
    lightScheme: boolean;
    text: string;
    isActive?: boolean;
    isDisabled?: boolean;
};

const getTextColor = (lightScheme: boolean, isActive: boolean, isHovering: boolean, isDisabled: boolean) => {
    if (isDisabled) return "text-slate-4";
    if (isActive) return lightScheme ? "text-neutrals-white" : "text-neutrals-black";
    if (isHovering) return lightScheme ? "text-neutrals-white" : "text-neutrals-black";
    return "text-neutrals-white";
};

const getButtonColor = (lightScheme: boolean, isActive: boolean, isHovering: boolean, isDisabled: boolean) => {
    if (isDisabled) return lightScheme ? "bg-oxfordBlue-6" : "bg-oxfordBlue-2";
    if (isActive || isHovering) return lightScheme ? "bg-oxfordBlue-1" : "bg-neutrals-white";
    return lightScheme ? "bg-fireRed-1" : "bg-oxfordBlue-2";
};

const getSignalColor = (lightScheme: boolean, isActive: boolean, isHovering: boolean, isDisabled: boolean) => {
    if (isDisabled) return lightScheme ? "#9da3ac" : "#fdfdfd";
    if (isHovering) return lightScheme ? "#000000" : "#fdfdfd";
    if (isActive) return lightScheme ? "#000000" : "#fdfdfd";
    return "#000000"
};

const getSignalBg = (lightScheme: boolean, isActive: boolean, isHovering: boolean, isDisabled: boolean) => {
    if (isDisabled) return lightScheme ? "bg-neutrals-white" : "bg-slate-2";
    if (isActive) return lightScheme ? "bg-neutrals-white" : "bg-fireRed-2";
    if (isHovering) return lightScheme ? "bg-neutrals-white" : "bg-fireRed-1";
    return "bg-neutrals-white";
};

export const CustomButton: React.FC<CustomButtonProps> = ({
                                                              lightScheme,
                                                              text,
                                                              isActive = false,
                                                              isDisabled = false,
                                                          }) => {
    const [isHovering, setIsHovering] = useState(false);
    const [backgroundColorClass, setBackgroundColorClass] = useState("");
    const [textColorClass, setTextColorClass] = useState("");
    const [signalColorClass, setSignalColorClass] = useState("");
    const [signalBgClass, setSignalBgClass] = useState("");

    useEffect(() => {
        setSignalBgClass(getSignalBg(lightScheme, isActive, isHovering, isDisabled));
        setSignalColorClass(getSignalColor(lightScheme, isActive, isHovering, isDisabled));
        setBackgroundColorClass(getButtonColor(lightScheme, isActive, isHovering, isDisabled));
        setTextColorClass(getTextColor(lightScheme, isActive, isHovering, isDisabled));
    }, [lightScheme, isActive, isDisabled, isHovering]);

    return (
        <button
            className={`border-none rounded-full px-5 py-2 flex items-center text-lg justify-center gap-2.5 ${backgroundColorClass} ${textColorClass} mr-1 ml-1`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            disabled={isDisabled}
        >

            {isHovering || isActive ? <>
                <span className="ml-2">{text}</span>
                <div className={`flex items-center justify-center ${signalBgClass} rounded-full`}
                     style={{width: '56px', height: '56px'}}>
                    <SignalSvg fill={signalColorClass}/>
                </div>
            </> : <>
                <div className={`flex items-center justify-center ${signalBgClass} rounded-full`}
                     style={{width: '56px', height: '56px'}}>
                    <SignalSvg fill={signalColorClass}/>
                </div>
                <span className="ml-2">{text}</span>
            </>
            }
        </button>
    );
};
