import React from "react";
import { Story, Meta } from "@storybook/react";

import Proceed, { ButtonProps } from "./";

export default {
  title: "Components/Atoms/Buttons/Proceed",
  component: Proceed,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Proceed {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  // primary: true,
  label: "Proceed to checkout",
};
