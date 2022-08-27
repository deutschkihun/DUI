import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Search from "./Search";

export default {
  title: "ReactComponentLibrary/Search",
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = () => <Search />;

export const Test = Template.bind({});
Test.args = {
  total:10,
  limit:5,
  page:2,
};

