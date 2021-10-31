import { createRef, useState } from "react";
{
    /* import { useDispatch } from "react-redux"; */
}
import styled from "styled-components";

{
    /* import { getWordsAction } from "../store/actions/wordsAction"; */
}

const Keyboard = () => {
    const digits = [
        {
            num: "",
            label: "1",
            alpha: "",
            digi: "favs",
        },
        {
            num: "2",
            label: "2",
            alpha: "[abc]",
            digi: "a b c",
        },
        {
            num: "3",
            label: "3",
            alpha: "[def]",
            digi: "d e f",
        },
        {
            num: "4",
            label: "4",
            alpha: "[ghi]",
            digi: "g h i",
        },
        {
            num: "5",
            label: "5",
            alpha: "[jkl]",
            digi: "j k l",
        },
        {
            num: "6",
            label: "6",
            alpha: "[mno]",
            digi: "m n o",
        },
        {
            num: "7",
            label: "7",
            alpha: "[pqrs]",
            digi: "p q r s",
        },
        {
            num: "8",
            label: "8",
            alpha: "[tuv]",
            digi: "t u v",
        },
        {
            num: "9",
            label: "9",
            alpha: "[wxyz]",
            digi: "w x y z",
        },
        {
            num: "",
            label: "#",
            alpha: "$",
            digi: "enter",
        },
        {
            num: "",
            label: "0",
            alpha: "",
            digi: "suggest",
        },
        {
            num: "",
            label: "DEL",
            alpha: "",
            digi: "",
        },
    ];

    {
        /* const dispatch = useDispatch(); */
    }

    const [codeNum, setCodeNum] = useState("");

    const typing = (label: string) => {
        switch (label) {
            case "2":
                console.log("you pressed number 2... yayyy");
                // dispatch(getWordsAction(label));
                break;
            default:
                console.log("null");
                break;
        }
    };

    let textInput: React.RefObject<HTMLInputElement> = createRef(); // React use ref to get input value

    return (
        <div>
            <input
                data-test="keyboard-code-display"
                ref={textInput}
                value={codeNum}
                onChange={() => console.log("typing")}
            />
            <div>
                {digits.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            typing(item.label);
                            setCodeNum(item.num);
                        }}
                    >
                        <HNum>{item.label}</HNum>
                        <HDigi>{item.digi?.toUpperCase()}</HDigi>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Keyboard;

const H = styled.h4`
    color: hsla(185, 100%, 50%, 1);
    text-shadow: 1px 1px 15px hsla(165, 100%, 50%, 1);
`;

const HNum = styled(H)`
    margin: 5px;
`;

const HDigi = styled(H)`
    font-size: 10px;
`;
