import React from "react";
import { Story, Meta } from "@storybook/react";

import FlexContainer, { FlexProps } from "./";

export default {
  title: "Components/Atoms",
  component: FlexContainer,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<FlexProps> = (args) => (
  <FlexContainer {...args}>I'm in a container</FlexContainer>
);

export const Flex = Template.bind({});
Flex.args = {
  //   backgroundColor: "red",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
};
