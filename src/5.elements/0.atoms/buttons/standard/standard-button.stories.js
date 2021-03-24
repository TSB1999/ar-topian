import React from "react";

import Button from "./index";

export default {
  title: "Example/Button",
  component: Button,
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "REGISTER",
  theme: "light",
};
