import React from "react";
import { Story, Meta } from "@storybook/react";

import Navbar_Section from "./";

export default {
  title: "Components/Organisms",
  component: Navbar_Section,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story = (args) => <Navbar_Section {...args} />;

export const Navbar = Template.bind({});
Navbar.args = {
  // primary: true,
  label: "Get your ARtopian merch now!",
};
