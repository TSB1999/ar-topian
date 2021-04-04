import { Story, Meta } from "@storybook/react";

import { ButtonPair, TextProps } from "./";

export default {
  title: "Components/Molecules/ButtonPair",
  component: ButtonPair,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <ButtonPair {...args} />;

export const AuthPrompt = Template.bind({});
AuthPrompt.args = {
  lightLabel: "REGISTER",
  darkLabel: "SIGN IN",
};

export const Authenticated = Template.bind({});
Authenticated.args = {
  lightLabel: "INFO",
  darkLabel: "HOME",
};

export const Registration = Template.bind({});
Registration.args = {
  lightLabel: "BACK",
  darkLabel: "REGISTER",
};

export const SignIn = Template.bind({});
SignIn.args = {
  lightLabel: "BACK",
  darkLabel: "SIGN IN",
};
