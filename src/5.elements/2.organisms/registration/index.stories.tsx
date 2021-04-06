import React from "react";
import { Story, Meta } from "@storybook/react";

import Registration from "./";

export default {
  title: "Components/Organisms",
  component: Registration,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story = (args) => <Registration {...args} />;

export const RegistrationForm = Template.bind({});
RegistrationForm.args = {
  // primary: true,
  //   label: "Get your ARtopian merch now!",
};