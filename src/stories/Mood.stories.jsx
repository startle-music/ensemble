import Mood from '../components/form/fields/moodSelect';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Form/Field/Mood',
  component: Mood,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //argTypes: {
    //backgroundColor: { control: 'color' },
  //},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Mood {...args} />;

export const Unchecked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unchecked.args = {
    id:'field-1',
    name: 'field1',
    label: 'Switch 1',
    required: false,
    checked: false
    //inline: false,
    //disabled: false,
    //className: null
};

export const Checked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Checked.args = {
    id:'field-2',
    name: 'field2',
    label: 'Mood 2',
    defaultValue: 'thunderstruck',
    //inline: false,
    //disabled: false,
    //className: null
};


export const Readonly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Readonly.args = {
    id:'field-3',
    name: 'field3',
    label: 'Mood 3',
    defaultValue: 'thunderstruck',
    readonly: true
    //inline: false,
    //disabled: false,
    //className: null
};
