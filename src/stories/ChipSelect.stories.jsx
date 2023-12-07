import { ChipSelect } from '../components/form/fields';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Form/Field/ChipSelect',
  component: ChipSelect,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //argTypes: {
    //backgroundColor: { control: 'color' },
  //},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ChipSelect {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    options: [
        {
            'label': '1',
            value: 1,
        },
        {
            'label': '2',
            value: 2,
        },
        {
            'label': '3',
            value: 3,
        },
    ],
    chips: [],
    name: 'ChipSelectInput1',
    id: "ChipSelectInput1",
    label: 'Chip Select Input 1',
    required: true
};
