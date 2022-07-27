import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "react/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloButton = Template.bind({});
HelloButton.args = {
  variant: "warning",
  size: "sm",
  children: "hello",
};

export const HelloButton2 = Template.bind({});
HelloButton2.args = {
  variant: "warning",
  size: "lg",
  children: "hello2",
};

export const HelloButton3 = Template.bind({});
HelloButton3.args = {
  variant: "error",
  size: "sm",
  children: "hello3",
};
