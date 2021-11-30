import Heading from '../components/headings';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Text/Headings',
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //argTypes: {
    //backgroundColor: { control: 'color' },
  //},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Heading {...args}>{args.value}</Heading>;

export const Standard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {
    id:'standard-header',
    value: 'Test Heading'
};


export const Subtitle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Subtitle.args = {
    id:'standard-header',
    value: 'Test Subtitle',
    type: 'subtitle'
};


export const Title = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Title.args = {
    id:'standard-header',
    value: 'Test Title',
    type: 'title'
};


export const Hero = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Hero.args = {
    id:'standard-header',
    value: 'Test Hero',
    type: 'hero'
};

