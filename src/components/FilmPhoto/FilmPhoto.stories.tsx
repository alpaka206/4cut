import { Meta, StoryFn } from "@storybook/react";
import FilmPhoto, { FilmPhotoProps } from "./FilmPhoto";
import "./FilmPhoto.css";

export default {
  title: "Components/FilmPhoto",
  component: FilmPhoto,
  argTypes: {
    date: { control: "text" },
    rotate: { control: "text" },
    src: { control: "text" },
    className: { control: "text" },
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<FilmPhotoProps> = (args) => <FilmPhoto {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: "2024-07-24",
  src: "./assets/peopleimage/dog.png",
};

export const Rotated = Template.bind({});
Rotated.args = {
  date: "2024-07-24",
  rotate: "45deg",
  src: "./assets/peopleimage/dog.png",
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  date: "2024-07-24",
  src: "./assets/peopleimage/dog.png",
  className: "custom-class",
};

export const Clickable = Template.bind({});
Clickable.args = {
  date: "2024-07-24",
  src: "./assets/peopleimage/dog.png",
  onClick: () => alert("FilmPhoto clicked!"),
};
