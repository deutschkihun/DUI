import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Modal from "./Modal";

export default {
    title: "ReactComponentLibrary/Modal",
    component: Modal,
  } as ComponentMeta<typeof Modal>;
  
const Template: ComponentStory<typeof Modal> = (args) => <Modal />;
  
export const HelloWorld = Template.bind({});
