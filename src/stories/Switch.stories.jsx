import Switch from '../components/form/fields/switch';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Form/Field/Switch',
  component: Switch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //argTypes: {
    //backgroundColor: { control: 'color' },
  //},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Switch {...args} />;

export const Unchecked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unchecked.args = {
    id:'field-1',
    name: 'field1',
    label: 'Switch 1',
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
    name: 'field-3',
    label: 'Checkbox 3',
    required: false,
    value: 1,
    colour: 'yellowSubmarine'
};
