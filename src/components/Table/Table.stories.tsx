import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Table from "./Table";

export default {
  title: "ReactComponentLibrary/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  striped:true
};


export const ClickMe = Template.bind({});
ClickMe.args = {
  striped:true
};

