import { configure, shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new EnzymeAdapter() });

export const findByTestAttr = (wrapper: any, val: string) =>
wrapper.find(`[data-test='${val}']`);