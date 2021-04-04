import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./";

export default {
  title: "Components/Atoms/Buttons/Submit",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const SignIn = Template.bind({});
SignIn.args = {
  // primary: true,
  label: "SIGN IN",
  theme: "dark",
};

export const Register = Template.bind({});
Register.args = {
  label: "REGISTER",
  theme: "light",
};
