import {CustomButton} from "./components/CustomButton.tsx";
import Button from "./components/Button.tsx";
import Card from "./components/Card.tsx";
import {useState} from "react";
import InputComponent from "./components/InputComponent.tsx";
import Tag from "./components/Tag.tsx";
import TitleButton from "./components/TitleButton.tsx";
import HeadLineCard from "./components/HeadLineCard.tsx";

export const App = () => {
    const [inputValue, setInputValue] = useState('');
    const [size, setSize] = useState('M' as 'S' | "L" | "M" | undefined);


    const handleInputChange = (newText: string) => {
        setInputValue(newText);
    };

    const handleSizeChange = (newSize: 'S' | 'M' | 'L') => {
        setSize(newSize);
    };

    // Function to determine button style based on active state
    const getSizeButtonClass = (buttonSize: 'S' | 'M' | 'L') => {
        return size === buttonSize ? "bg-blue-500 text-white" : "bg-gray-200 text-black";
    };

    return (
        <>
            <div className="flex justify-center my-4">
                {/* Size selection buttons */}
                <h2>Change size</h2>
                <button className={`px-4 py-2 m-1 ${getSizeButtonClass('S')}`} onClick={() => handleSizeChange('S')}>S</button>
                <button className={`px-4 py-2 m-1 ${getSizeButtonClass('M')}`} onClick={() => handleSizeChange('M')}>M</button>
                <button className={`px-4 py-2 m-1 ${getSizeButtonClass('L')}`} onClick={() => handleSizeChange('L')}>L</button>
            </div>

            <div className={'w-full m-10'}>
                <Tag text="Tag name"/>
                <Tag text="Tag name" isActive={true}/>
                <Tag text="Tag name" isDisabled={true}/>
            </div>

            <div style={{display: 'flex', justifyContent: "center"}}>
                <div
                    style={{display: 'flex', justifyContent: 'center', margin: "1em", gap: "20px", flexDirection: "column", width: "200px"}}
                    className="space-x-2">
                    <TitleButton text="Zobrazit více" size={size} lightTheme={true}/>
                    <TitleButton text="Zobrazit více" size={size} lightTheme={true} isActive={true}/>
                    <TitleButton text="Zobrazit více" size={size} lightTheme={true} isDisabled={true}/>
                </div>

                <div
                    style={{display: 'flex', justifyContent: 'center', margin: "1em", gap: "20px", flexDirection: "column", width: "200px"}}
                    className="space-x-2 bg-black mb-3.5">
                    <TitleButton text="Zobrazit více" size={size} lightTheme={false}/>
                    <TitleButton text="Zobrazit více" size={size} lightTheme={false} isActive={true}/>
                    <TitleButton text="Zobrazit více" size={size} lightTheme={false} isDisabled={true}/>
                </div>
            </div>

            <div style={{display: 'flex', justifyContent: "center"}}>

                <div
                    style={{display: 'flex', justifyContent: 'center', margin: "1em", flexDirection: "column", width: "200px", gap: "20px"}}>
                    <CustomButton
                        lightScheme={true}
                        text="Button Text"
                        isActive={false}
                        isDisabled={false}
                    />

                    <CustomButton
                        lightScheme={true}
                        text="Button Text"
                        isActive={true}
                        isDisabled={false}
                    />

                    <CustomButton
                        lightScheme={true}
                        text="Button Text"
                        isActive={false}
                        isDisabled={true}
                    />
                </div>

                <div
                    style={{display: 'flex', justifyContent: 'center', backgroundColor: "black", margin: "1em", flexDirection: "column", width: "200px", gap: "20px"}}>
                    <CustomButton
                        lightScheme={false}
                        text="Button Text"
                        isActive={false}
                        isDisabled={false}
                    />

                    <CustomButton
                        lightScheme={false}
                        text="Button Text"
                        isActive={true}
                        isDisabled={false}
                    />

                    <CustomButton
                        lightScheme={false}
                        text="Button Text"
                        isActive={false}
                        isDisabled={true}
                    />
                </div>
            </div>


            <div style={{display: 'flex', justifyContent: "center", margin: "20px"}}>
                <div style={{display: 'flex', justifyContent: 'center', margin: "1em", flexDirection: "column", gap: "20px"}}>

                    <Button isActive={false} size={size} isDisabled={false} direction={"left"}/>
                    <Button isActive={true} size={size} isDisabled={false} direction={"left"}/>
                    <Button isActive={false} size={size} isDisabled={true} direction={"left"}/>



                </div>

                <div style={{display: 'flex', justifyContent: 'center', margin: "1em", flexDirection: "column", gap: "20px"}}>
                    <Button isActive={false} size={size} isDisabled={false} direction={"right"}/>
                    <Button isActive={true} size={size} isDisabled={false} direction={"right"}/>
                    <Button isActive={false} size={size} isDisabled={true} direction={"right"}/>
                </div>
            </div>
                <div className="flex space-x-4">
                    <HeadLineCard
                        title="Headline goes here"
                        text="Lorem ipsum dolor sit amet consectetur."
                        lightTheme={true}
                    />
                </div>

                <div className="flex space-x-4 bg-black">
                    <HeadLineCard
                        title="Headline goes here"
                        text="Lorem ipsum dolor sit amet consectetur."
                        lightTheme={false}
                    />
                </div>

            <div>
                <Card
                    isActive={false}
                    image={"/img.png"}
                    title={"House"}
                    description={"House testtest"}
                    date={"12.1.2023"}
                    tags={["Tag1", "Tag2"]}
                />
            </div>

            <div
                style={{display: 'flex', justifyContent: 'center', margin: "1em", padding: "1em", gap: "20px", backgroundColor: "black"}}>



                <Card
                    isActive={true}
                    image={"/img.png"}
                    title={"House"}
                    description={"House testtest"}
                    date={"12.1.2023"}
                    tags={["Tag1", "Tag2"]}
                />

            </div>

            <div style={{display: 'flex', justifyContent: 'center', margin: "1em", gap: "20px"}}>
                <InputComponent
                    text={inputValue}
                    inputChange={handleInputChange}
                    lightScheme={true}
                    isDisabled={false}
                />
                <InputComponent
                    text={"Disabled"}
                    lightScheme={true}
                    isDisabled={true}
                />
            </div>

            <div
                style={{display: 'flex', justifyContent: 'center', margin: "1em", padding: "1em", gap: "20px", backgroundColor: "black"}}>
                <InputComponent
                    text={inputValue}
                    inputChange={handleInputChange}
                    lightScheme={false}
                    isDisabled={false}
                />
                <InputComponent
                    text={"Disabled"}
                    lightScheme={false}
                    isDisabled={true}
                />
            </div>
        </>
    );
}

