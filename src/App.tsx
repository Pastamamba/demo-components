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

    const handleInputChange = (newText: string) => {
        setInputValue(newText);
    };

    return (
        <>
            <div className={'w-full m-10'}>
                <Tag text="Tag name"/>
                <Tag text="Tag name" isActive={true}/>
                <Tag text="Tag name" isDisabled={true}/>
            </div>

            <div style={{display: 'flex', justifyContent: "center"}}>
                <div
                    style={{display: 'flex', justifyContent: 'center', margin: "1em", gap: "20px", flexDirection: "column", width: "200px"}}
                    className="space-x-2">
                    <TitleButton text="Zobrazit více" lightTheme={true}/>
                    <TitleButton text="Zobrazit více" lightTheme={true} isActive={true}/>
                    <TitleButton text="Zobrazit více" lightTheme={true} isDisabled={true}/>
                </div>

                <div
                    style={{display: 'flex', justifyContent: 'center', margin: "1em", gap: "20px", flexDirection: "column", width: "200px"}}
                    className="space-x-2 bg-black mb-3.5">
                    <TitleButton text="Zobrazit více" lightTheme={false}/>
                    <TitleButton text="Zobrazit více" lightTheme={false} isActive={true}/>
                    <TitleButton text="Zobrazit více" lightTheme={false} isDisabled={true}/>
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

                    <Button isActive={false} isDisabled={false} direction={"left"}/>
                    <Button isActive={true} isDisabled={false} direction={"left"}/>
                    <Button isActive={false} isDisabled={true} direction={"left"}/>



                </div>

                <div style={{display: 'flex', justifyContent: 'center', margin: "1em", flexDirection: "column", gap: "20px"}}>
                    <Button isActive={false} isDisabled={false} direction={"right"}/>
                    <Button isActive={true} isDisabled={false} direction={"right"}/>
                    <Button isActive={false} isDisabled={true} direction={"right"}/>
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

            <div
                style={{display: 'flex', justifyContent: 'center', margin: "1em", padding: "1em", gap: "20px", backgroundColor: "black"}}>

                <Card
                    isActive={false}
                    image={"/img.png"}
                    title={"House"}
                    description={"House testtest"}
                    date={"12.1.2023"}
                    tags={["Tag1", "Tag2"]}
                />

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

