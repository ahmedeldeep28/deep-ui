import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, Radio } from ".";

const meta: Meta<typeof RadioGroup> = {
  title: "Component/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <RadioGroup {...args}>
        <Radio value="option-one">option one</Radio>
        <Radio value="option-two">option two</Radio>
      </RadioGroup>
    );
  },
};