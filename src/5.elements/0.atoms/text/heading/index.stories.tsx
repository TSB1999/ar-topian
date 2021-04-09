import React from "react";
import { Story, Meta } from "@storybook/react";

import Heading, { TextProps } from "./";

export default {
  title: "Components/Atoms/Text/Heading",
  component: Heading,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Heading {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  // primary: true,
  label: "Get your ARtopian merch now!",
};
