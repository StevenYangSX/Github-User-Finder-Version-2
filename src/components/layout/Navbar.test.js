import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Navbar from "./Navbar";

Enzyme.configure({ adapter: new Adapter() });

// describe("My Navbar", () => {
//   //a simple test case to be true
//   it("should be true", () => {
//     const foo = true;
//     expect(foo).toBe(true);
//   });
// });

describe("Navbar", () => {
  it("should show title", () => {
    const wrapper = shallow(<Navbar />);
    const homeLink = wrapper.find("Link").at(0);
    expect(homeLink.text()).toBe("Home");
  });
});
