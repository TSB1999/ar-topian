import React from "react";
import { Story, Meta } from "@storybook/react";

import GridContainer, { GridProps } from "./";

export default {
  title: "Components/Atoms",
  component: GridContainer,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<GridProps> = (args) => (
  <GridContainer {...args}>
    <div>vcwe</div>
    <div>vcwe</div>
    <div>vcwe</div>
    <div>vcwe</div>
    <div>vcwe</div>
  </GridContainer>
);

export const Grid = Template.bind({});
Grid.args = {
  //   backgroundColor: "red",
  justifyContent: "center",
  alignItems: "center",
  noOfColumns: 4,
  noOfRows: 4,
};
