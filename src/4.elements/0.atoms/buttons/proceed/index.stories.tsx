import React from "react";
import { Story, Meta } from "@storybook/react";

import ProceedButton, { ButtonProps } from ".";

export default {
  title: "Components/Atoms/Buttons/Proceed",
  component: ProceedButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <ProceedButton {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  // primary: true,
  label: "Proceed to checkout",
  icon: "",
};
