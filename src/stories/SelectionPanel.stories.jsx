import SelectionPanel from '../components/form/fields/selectionPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLink } from '@fortawesome/free-solid-svg-icons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Form/Field/SelectionPanel',
  component: SelectionPanel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //argTypes: {
    //backgroundColor: { control: 'color' },
  //},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SelectionPanel {...args} />;

const Contents = () => {
    return (
        
        <>
            <FontAwesomeIcon icon={faLink} />
            <label htmlFor="spotifyURL">Import from Link</label>
        </>
    )
}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    id:'field-1',
    name: 'field1',
    active: true,
    panel: "link",
    onClick: () => alert('selection panel: link'),
    children: <Contents />
};

export const NoSVG = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoSVG.args = {
    id:'field-3',
    name: 'field3',
    active: true,
    panel: "link",
    onClick: () => alert('selection panel: link'),
    children: <div>Panel with no Icon</div>
};

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
    id:'field-2',
    name: 'field2',
    active: true,
    small: true,
    panel: "link",
    onClick: () => alert('selection panel: link'),
    children: <Contents />
};

