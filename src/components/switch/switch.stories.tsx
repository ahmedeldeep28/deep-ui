import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";
import React from "react";

const meta: Meta<typeof Switch> = {
  title: "Component/Switch",
  component: Switch,

  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "primary",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
  },
};
