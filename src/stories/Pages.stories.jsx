import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Container from '../components/containers/container';
import Page from '../components/page';
import RegularInput from '../components/form/fields/regularInput';
import Select from '../components/form/fields/select';
import theme from '../style/theme';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Page/Example',
    component: Page,
    parameters: {
        layout: 'fullscreen'
    }
};

const Template = args => <Page {...args} />;

const Icon = () => (
    <span style={{ margin: '0 0.4rem' }}>
        <FontAwesomeIcon icon={faSearch} color={theme.form.input.border} />
    </span>
);

const Contents = () => (
    <>
        <Container>
            <RegularInput
                prepend={<Icon />}
                inputBorder={theme.form.input.border}
                placeholder="Search"
                inputColour={theme.form.input.placeholder}
            />
            <Select>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </Select>
        </Container>
        <Container>
            <h1>Example Page</h1>
            <p>This is an example page to show how the page component works.</p>
        </Container>
    </>
);

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
    id: 'Example Page',
    children: <Contents />
};
