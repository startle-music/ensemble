import Text from '../components/text';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Text/General',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //argTypes: {
    //backgroundColor: { control: 'color' },
  //},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Text {...args}>{args.value}</Text>;

export const Standard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {
    id:'standard-header',
    value: 'Regular text stuff.'
};


export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
    id:'standard-header',
    value: 'This is some small text.',
    type: 'small'
};


export const Help = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Help.args = {
    id:'standard-header',
    value: 'This is some help text.',
    type: 'help'
};
