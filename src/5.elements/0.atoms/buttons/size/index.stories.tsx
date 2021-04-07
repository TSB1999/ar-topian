import React from "react";
import { Story, Meta } from "@storybook/react";

import Button, { ButtonProps } from "./";

export default {
  title: "Components/Atoms/Buttons/Size",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Selected = Template.bind({});
Selected.args = {
  label: "S",
  selected: true,
};

export const unselected = Template.bind({});
unselected.args = {
  label: "S",
};
