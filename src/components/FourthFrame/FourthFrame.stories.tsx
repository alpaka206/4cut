import { Meta, StoryFn } from "@storybook/react";
import SecondFrame, { FourthFrameProps } from "./FourthFrame";
import "./FourthFrame.css";

export default {
  title: "Components/SecondFrame",
  component: SecondFrame,
  argTypes: {
    images: { control: { type: "object" } },
  },
} as Meta;

const Template: StoryFn<FourthFrameProps> = (args) => <SecondFrame {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: [
    "./assets/peopleimage/dog.png",
    "./assets/peopleimage/dog.png",
    "./assets/peopleimage/dog.png",
    "./assets/peopleimage/dog.png",
  ],
};

export const WithUndefinedImage = Template.bind({});
WithUndefinedImage.args = {
  images: [
    "./assets/peopleimage/dog.png",
    undefined,
    "./assets/peopleimage/dog.png",
    undefined,
  ],
};

export const AllUndefinedImages = Template.bind({});
AllUndefinedImages.args = {
  images: [undefined, undefined, undefined, undefined],
};

export const MixedImages = Template.bind({});
MixedImages.args = {
  images: [
    undefined,
    "./assets/peopleimage/dog.png",
    "./assets/peopleimage/dog.png",
    undefined,
  ],
};
