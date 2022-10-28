import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Task, { TaskAttrs } from "./Task";

export default {
  component: Task,
  title: "APP/Task"
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Default = Template.bind({});

Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0)
  }
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...(Default.args.task as TaskAttrs),
    state: "TASK_PINNED"
  }
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...(Default.args.task as TaskAttrs),
    state: "TASK_ARCHIVED"
  }
};
