import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./";

export default {
  title: "Components/Atoms/Buttons/Proceed",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  // primary: true,
  label: "Proceed to checkout",
};
