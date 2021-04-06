import { Story, Meta } from "@storybook/react";
import React from "react";

import SortingFilter, { FilterProps } from "./";

export default {
  title: "Components/Molecules/SortingFilter",
  component: SortingFilter,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<FilterProps> = (args) => <SortingFilter {...args} />;

export const AuthPrompt = Template.bind({});
AuthPrompt.args = {
  setting: "high --> low",
};
