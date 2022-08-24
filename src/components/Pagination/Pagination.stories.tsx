import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Pagination from "./Pagination";

export default {
  title: "ReactComponentLibrary/Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Test = Template.bind({});
Test.args = {
  total:10,
  limit:5,
  page:2,
};

