// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

import { configure, shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new EnzymeAdapter() });

import React from "react";
import Home from "../pages/index";

const setup = () => shallow(<Home />);
const findByTestAttr = (wrapper: any, val: string) =>
    wrapper.find(`[data-test='${val}']`);

it(" should render the Home page without errors", () => {
    const wrapper = setup();
    const homeComp = findByTestAttr(wrapper, "comp-home");
    expect(homeComp.length).toBe(1);
});

it(" should render the Keyboard component without errors", () => {
    const wrapper = setup();
    const homeComp = findByTestAttr(wrapper, "comp-keyboard");
    expect(homeComp.length).toBe(1);
});

it(" should render the Favorites list component without errors", () => {
    const wrapper = setup();
    const homeComp = findByTestAttr(wrapper, "comp-fav");
    expect(homeComp.length).toBe(1);
});
