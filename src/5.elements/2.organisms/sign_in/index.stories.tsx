import React from "react";
import { Story, Meta } from "@storybook/react";

import SignIn from ".";

export default {
  title: "Components/Organisms",
  component: SignIn,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story = (args) => (
  <SignIn handleSignInChange handleSignInSubmit {...args} />
);

export const SignInForm = Template.bind({});
SignInForm.args = {};
