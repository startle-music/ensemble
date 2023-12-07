import Radio from '../components/form/fields/radio';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Form/Field/Radio',
  component: Radio,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //argTypes: {
    //backgroundColor: { control: 'color' },
  //},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Radio {...args} />;

export const Unchecked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unchecked.args = {
    id:'field-1',
    name: 'field1',
    label: 'Radio 1',
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
    label: 'Radio 2',
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
    label: 'Radio 3',
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
    label: 'Radio 4',
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
    label: 'Radio 5',
    required: false,
    value: 1,
    inline: false,
    disabled: true,
    //className: null
};

