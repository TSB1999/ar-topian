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

export const Light = Template.bind({});
Light.args = {
  title: "REGISTER",
  theme: "light",
};

export const Dark = Template.bind({});
Dark.args = {
  title: "SIGN IN",
  theme: "dark",
};
