import React from "react";
import { Story, Meta } from "@storybook/react";

import Landing_Section, { LandingProps } from "./";

export default {
  title: "Components/Organisms",
  component: Landing_Section,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<LandingProps> = (args) => <Landing_Section {...args} />;

export const Landing = Template.bind({});
Landing.args = {
  // primary: true,
  label: "Get your ARtopian merch now!",
};
