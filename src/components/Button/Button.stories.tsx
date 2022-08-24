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
  children:<h1>hello</h1>,
  size: "sm",
  variant: "error",
  disabled: true,
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  children:<h1>bbber</h1>,
  size: "lg",
  variant: "error",
  disabled: false,
  onClick: () => alert("hello")
};

