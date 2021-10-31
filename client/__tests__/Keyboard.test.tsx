import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../jestUtils";
import Keyboard from "../components/Keyboard";

const defaultProps = {
    guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

/**
 * Factory function to create a ShallowWrapper for the Keyboard component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Keyboard {...props} />);
};

{
    /* test("does not throw warning with expected props", () => {
    checkProps(Keyboard, defaultProps);
}); */
}

describe("if there are no digits typed on input", () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });
    test("renders without error", () => {
        const component = findByTestAttr(wrapper, "keyboard-code-display");
        expect(component.length).toBe(1);
    });

    {
        /* test("renders instructions to guess a word", () => {
        const instructions = findByTestAttr(wrapper, "guess-instructions");
        expect(instructions.text().length).not.toBe(0);
    }); */
    }
});
describe("if there are on or more digits typed on input", () => {
    let wrapper: any;
    const guessedWords = { codeNum: "23456" };
    beforeEach(() => {
        wrapper = setup({ guessedWords });
    });
    it("renders without error", () => {
        const component = findByTestAttr(wrapper, "keyboard-code-display");
        expect(component.length).toBe(1);
    });
    it("shows the code in numbers on the input display", () => {
        const keyboardInput = findByTestAttr(wrapper, "keyboard-code-display");

        expect(keyboardInput.value).toBe(undefined);
    });
    {
        /* test("correct number of guessed words", () => {
        const guessedWordNodes = findByTestAttr(wrapper, "guessed-word");
        expect(guessedWordNodes.length).toBe(guessedWords.length);
    }); */
    }
});
