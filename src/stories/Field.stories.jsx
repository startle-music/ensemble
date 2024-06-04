import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Field from '../components/form/fields/regularInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Form/Field/Text',
    component: Field
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    // backgroundColor: { control: 'color' },
    // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Field {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    id: 'field-1',
    name: 'field1',
    label: 'Field Label',
    defaultValue: 'A Default Value',
    required: true,
    rounded: false
};

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
    id: 'field-2',
    name: 'field1',
    label: 'Field Label',
    defaultValue: 'A Default Value',
    required: true,
    disabled: true
};

export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
    id: 'field-2',
    name: 'field1',
    label: 'Field Label',
    defaultValue: 'A Default Value',
    required: true,
    status: 'success'
};

export const Warning = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Warning.args = {
    id: 'field-2',
    name: 'field1',
    label: 'Field Label',
    defaultValue: 'A Default Value',
    required: true,
    status: 'warning'
};

export const Danger = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Danger.args = {
    id: 'field-2',
    name: 'field1',
    label: 'Field Label',
    defaultValue: 'A Default Value',
    required: true,
    status: 'danger'
};

const Icon = () => <FontAwesomeIcon icon={faUser} />;
export const Prepend = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Prepend.args = {
    id: 'field-2',
    name: 'field1',
    label: 'Field Label',
    defaultValue: 'A Default Value',
    required: true,
    prepend: <Icon />
};

export const Append = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Append.args = {
    id: 'field-2',
    name: 'field1',
    label: 'Field Label',
    defaultValue: 'A Default Value',
    required: true,
    append: <Icon />
};
export const PreAppend = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PreAppend.args = {
    id: 'field-2',
    name: 'field1',
    label: 'Field Label',
    defaultValue: 'A Default Value',
    required: true,
    status: 'success',
    rounded: false,
    append: <Icon />,
    prepend: <Icon />
};

export const Caption = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Caption.args = {
    id: 'field-2',
    name: 'field1',
    label: 'Field Label',
    defaultValue: 'A Default Value',
    required: true,
    status: 'danger',
    caption: 'This is incorrect or something.'
};
export const NoLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoLabel.args = {
    id: 'field-2',
    name: 'field1',
    required: true,
    caption: 'This has No Label!'
};
