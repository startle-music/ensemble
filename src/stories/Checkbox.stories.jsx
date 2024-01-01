import Checkbox from '../components/form/fields/checkInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Form/Field/Checkbox',
  component: Checkbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //argTypes: {
    //backgroundColor: { control: 'color' },
  //},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Checkbox {...args} />;

export const Unchecked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unchecked.args = {
    id:'field-1',
    name: 'field1',
    label: 'Checkbox 1',
    required: false,
    checked: false,
    value: 1,
    //inline: false,
    //disabled: false,
    //className: null
};

export const Checked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Checked.args = {
    id:'field2',
    name: 'field2',
    label: 'Checkbox 2',
    required: false,
    checked: true,
    value: 1,
    //inline: false,
    //disabled: false,
    //className: null
};

export const Checkable = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Checkable.args = {
    id:'field-3',
    name: 'field3',
    label: 'Checkbox 3',
    required: false,
    value: 1,
    //inline: false,
    //disabled: false,
    //className: null
};



export const Block = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Block.args = {
    id:'field-4',
    name: 'field41',
    label: 'Checkbox 4',
    required: false,
    value: 1,
    inline: false,
    //disabled: false,
    //className: null
};


export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
    id:'field-5',
    name: 'field5',
    label: 'Checkbox 5',
    required: false,
    value: 1,
    inline: false,
    disabled: true,
    //className: null
};


export const Labelless = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Labelless.args = {
    id:'field-7',
    name: 'field7',
    required: false,
    value: 1,
    //inline: false,
    //disabled: false,
    //className: null
};

export const CustomerColour = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CustomerColour.args = {
    id:'field-8',
    name: 'field8',
    label: 'Checkbox 8',
    required: false,
    value: 1,
    color: 'red',
    backgroundColor: 'blue',
    checked: true,
    //inline: false,
    //disabled: false,
    //className: null
};

