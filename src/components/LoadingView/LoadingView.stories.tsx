import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LoadingView from "./LoadingView";

export default {
  title: "ReactComponentLibrary/LoadingView",
  component: LoadingView,
} as ComponentMeta<typeof LoadingView>;

const Template: ComponentStory<typeof LoadingView> = (args) => <LoadingView {...args} />;

export const Test = Template.bind({});
Test.args = {
  title:'hello',
  body:"my friend"
};

