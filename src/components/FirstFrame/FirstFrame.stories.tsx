import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import FirstFrame, { FirstFrameProps } from "./FirstFrame";
import "./FirstFrame.css";

export default {
  title: "Components/FirstFrame",
  component: FirstFrame,
  argTypes: {
    images: { control: { type: "object" } },
  },
} as Meta;

const Template: StoryFn<FirstFrameProps> = (args) => <FirstFrame {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: [
    "./assets/peopleimage/dog.png",
    "./assets/peopleimage/dog.png",
    "./assets/peopleimage/dog.png",
    "./assets/peopleimage/dog.png",
  ],
};

export const WithNullImage = Template.bind({});
WithNullImage.args = {
  images: [
    "./assets/peopleimage/dog.png",
    "null",
    "./assets/peopleimage/dog.png",
    "null",
  ],
};

export const AllNullImages = Template.bind({});
AllNullImages.args = {
  images: ["null", "null", "null", "null"],
};

export const MixedImages = Template.bind({});
MixedImages.args = {
  images: ["null", "./assets/peopleimage/dog.png", undefined, "null"],
};
