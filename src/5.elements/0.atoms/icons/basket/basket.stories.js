import React from "react";

import Basket from "./index.js";

export default {
  title: "Example/Icon",
  component: Basket,
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
};

const Template = (args) => <Basket {...args} />;

export const Standard = Template.bind({});
// Standard.args = {
//   title: "REGISTER",
//   theme: "light",
// };
