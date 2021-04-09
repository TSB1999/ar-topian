import React from "react";
import { Story, Meta } from "@storybook/react";

import SubHeading, { TextProps } from "./";

export default {
  title: "Components/Atoms/Text/Subheading",
  component: SubHeading,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <SubHeading {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  // primary: true,
  label: "Bring Your Items To Life",
};
