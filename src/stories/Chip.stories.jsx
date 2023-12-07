import Chip from '../components/chip';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Chips/Chip',
  component: Chip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //argTypes: {
    //backgroundColor: { control: 'color' },
  //},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Chip {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    id:'chip-1',
    name: 'chip1',
    label: 'chip 1',
    value: 1,
    onRemove: null
};


export const CustomColor = Template.bind({});
CustomColor.args = {
    id:'chip-2',
    name: 'chip2',
    label: 'chip 2',
    value: 1,
    color: '#3265ea'
};


export const CustomSize = Template.bind({});
CustomSize.decorators = [
    (Story) => (
        <div style={{fontSize: '0.5rem'}}>
            <Story />
        </div>
    )
];
CustomSize.args = {
    id:'chip-3',
    name: 'chip3',
    label: 'chip 3',
    value: 1,
    color: '#3265ea',
    onRemove: null
};


export const CustomSizeRemoveable = Template.bind({});
CustomSizeRemoveable.decorators = [
    (Story) => (
        <div style={{fontSize: '0.5rem'}}>
            <Story />
        </div>
    )
];
CustomSizeRemoveable.args = {
    id:'chip-3',
    name: 'chip3',
    label: 'chip 3',
    value: 1,
    color: '#3265ea'
};
