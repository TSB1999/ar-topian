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

export const Standard = Template.bind({});
Standard.args = {
  title: "REGISTER",
  theme: "light",
};
