import { useArgs } from '@storybook/preview-api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTrash, faPencil, faPlay, faFileAudio } from '@fortawesome/free-solid-svg-icons';
import Container from '../components/containers/container';
import Page from '../components/page';
import RegularInput from '../components/form/fields/regularInput';
import Select from '../components/form/fields/select';
import theme from '../style/theme';
import Column, { ColumnWrapper } from '../components/columns';
import Button from '../components/button';
import ResponsiveTable from '../components/responsiveTable';
import ActionPanel from '../components/actionPanel';
import DroppableActionPanel from '../components/droppableActionPanel';
import TimeSelect from '../components/form/fields/timeSelect';

import Form, { FormRow } from '../components/form';
import Label from '../components/form/labels';
import Heading from '../components/headings';
import RadioComponent from '../components/form/fields/radio';
import ToggleArea from '../components/toggleArea';
import ScrollableList from '../components/scrollableList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Pages/Studio',
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

const tableActions = (
    <>
        <Button key="aaa" onClick={() => alert('yo')}>
            <FontAwesomeIcon icon={faTrash} />
        </Button>
        <Button key="aaa">
            <FontAwesomeIcon icon={faPencil} />
        </Button>
        <Button key="aaa">
            <FontAwesomeIcon icon={faPlay} />
        </Button>
    </>
);

const tableData = {
    headings: ['Jingle Element Name', 'Jingle Element Type', 'File Type', 'Added', ''],
    rows: [
        {
            name: 'Jingle 1',
            type: 'Jingle',
            fileType: 'mp3',
            added: '2020-01-01',
            actions: tableActions
        },
        {
            name: 'Jingle 2',
            type: 'Jingle',
            fileType: 'mp3',
            added: '2020-01-02',
            actions: tableActions
        },
        {
            name: 'Jingle 3',
            type: 'Jingle',
            fileType: 'mp3',
            added: '2020-01-03',
            actions: tableActions
        },
        {
            name: 'Jingle 4',
            type: 'Jingle',
            fileType: 'mp3',
            added: '2020-01-04',
            actions: tableActions
        }
    ]
};

const TableContents = () => (
    <>
        <Container padded>
            <ColumnWrapper>
                <Column span={4}>
                    <DroppableActionPanel
                        icon={faFileAudio}
                        title="Drag audio files here to upload"
                        component={
                            <>
                                <Button key="aaa" onClick={() => alert('yo')}>
                                    Upload File
                                </Button>
                                <form>
                                    <input type="file" hidden />
                                </form>
                            </>
                        }
                    />
                </Column>
                <Column span={4}>
                    <ActionPanel
                        icon={faFileAudio}
                        title="Drag audio files here to upload"
                        component={
                            <Button key="aaa" onClick={() => alert('yo')}>
                                Upload File
                            </Button>
                        }
                    />
                </Column>
                <Column span={4}>
                    <ActionPanel
                        icon={faFileAudio}
                        title="Drag audio files here to upload"
                        component={
                            <Button key="aaa" onClick={() => alert('yo')}>
                                Upload File
                            </Button>
                        }
                    />
                </Column>
            </ColumnWrapper>
        </Container>
        <Container padded>
            <ColumnWrapper>
                <Column span={3}>
                    <RegularInput
                        prepend={<Icon />}
                        inputBorder={theme.form.input.border}
                        placeholder="Search"
                        inputColour={theme.form.input.placeholder}
                    />
                </Column>
                <Column span={3}>
                    <Select>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                </Column>
                <Column span={3} offset={10} pull="right">
                    <Button>Test</Button>
                </Column>
            </ColumnWrapper>
        </Container>
        <Container>
            <ResponsiveTable data={tableData} />
        </Container>
    </>
);

export const TableExample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TableExample.args = {
    id: 'Table Page',
    children: <TableContents />
};

const FormContents = ({ radio }) => (
    <>
        <Container padded>
            <Heading type="title">Form</Heading>
            <Form>
                <FormRow>
                    <RegularInput
                        label="Search"
                        inputBorder={theme.form.input.border}
                        placeholder="Search"
                        inputColour={theme.form.input.placeholder}
                    />
                </FormRow>
                <FormRow>
                    <RadioComponent label="Radio 1" name="radio" value="radio1" inline checked={radio === 'radio1'} />
                    <RadioComponent label="Radio 2" name="radio" value="radio2" inline checked={radio === 'radio2'} />
                    <RadioComponent label="Radio 3" name="radio" value="radio3" inline checked={radio === 'radio3'} />
                </FormRow>
                <ToggleArea check="radio2" value={radio}>
                    <FormRow>
                        <ColumnWrapper>
                            <Column span={6}>
                                <RegularInput
                                    label="Start Date"
                                    inputBorder={theme.form.input.border}
                                    type="date"
                                    inputColour={theme.form.input.placeholder}
                                />
                            </Column>
                            <Column span={6}>
                                <TimeSelect
                                    value={new Date()}
                                    label="Start Time"
                                    inputBorder={theme.form.input.border}
                                    inputColour={theme.form.input.placeholder}
                                />
                            </Column>
                        </ColumnWrapper>
                    </FormRow>
                </ToggleArea>
                <ScrollableList>
                    <li>Item 1</li>
                </ScrollableList>
            </Form>
        </Container>
    </>
);

export const FormExample = {
    args: {
        id: 'Form Page',
        radio: 'radio2'
    },
    render: args => (
        <Page>
            <FormContents {...args} />
        </Page>
    )
};
