import React from "react";
import { Story, Meta } from "@storybook/react";

import Container_, { ContainerProps } from "./";

export default {
  title: "Components/Atoms",
  component: Container_,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ContainerProps> = (args) => (
  <Container_ {...args}>I'm in a container</Container_>
);

export const Container = Template.bind({});
Container.args = {
  backgroundColor: "red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
