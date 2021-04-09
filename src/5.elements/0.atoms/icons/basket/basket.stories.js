import React from "react";

import BasketIcon from "./index";

export default {
  title: "Example/Icon",
  component: Basket,
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
};

const Template = (args) => <BasketIcon {...args} />;

export const Standard = Template.bind({});
// Standard.args = {
//   title: "REGISTER",
//   theme: "light",
// };
