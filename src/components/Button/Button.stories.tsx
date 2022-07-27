import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  label: "Hello world!",
  size: "sm",
  variants: "error",
  disabled: true,
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: "Click me!",
  size: "lg",
  variants: "error",
  disabled: false,
};
