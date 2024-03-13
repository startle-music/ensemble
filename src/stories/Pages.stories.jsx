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
import ScrollableList, { ListItem } from '../components/scrollableList';

import Card, { CardHeader, CardBody, CardFooter } from '../components/card';

import Text from '../components/text';
import DragDropList, { DraggableListItem, DraggableListItemHandle } from '../components/dragDropList';
import TextArea from '../components/form/fields/textArea';

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

const ListData = [
    {
        title: 'Item 1',
        description: 'Description 1',
        action: <Button>Test</Button>
    },
    {
        title: 'Item 2',
        description: 'Description 2',
        action: <Button>Test</Button>
    },
    {
        title: 'Item 3',
        description: 'Description 3',
        action: <Button>Test</Button>
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        action: <Button>Test</Button>
    },
    {
        title: 'Item 5',
        description: 'Description 5',
        action: <Button>Test</Button>
    },
    {
        title: 'Item 6',
        description: 'Description 6',
        action: <Button>Test</Button>
    },
    {
        title: 'Item 7',
        description: 'Description 7',
        action: <Button>Test</Button>
    },
    {
        title: 'Item 8',
        description: 'Description 8',
        action: <Button>Test</Button>
    },
    {
        title: 'Item 9',
        description: 'Description 9',
        action: <Button>Test</Button>
    }
];

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
                <FormRow inline>
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
                <ScrollableList padding="0px">
                    {ListData.map((item, index) => (
                        <ListItem key={index} border>
                            <Card horizontal border={false} margin="0">
                                <CardHeader>
                                    <RadioComponent
                                        name="radio"
                                        value="radio1"
                                        margin="0"
                                        checked={radio === 'radio1'}
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Heading margin="0">{item.title}</Heading>
                                    <Text>{item.description}</Text>
                                </CardBody>
                                <CardFooter>{item.action}</CardFooter>
                            </Card>
                        </ListItem>
                    ))}
                </ScrollableList>

                <DragDropList>
                    {ListData.map((item, index) => (
                        <DraggableListItem key={index}>
                            <Card horizontal border>
                                <CardHeader order="none">
                                    <DraggableListItemHandle />
                                </CardHeader>
                                <CardBody b>
                                    <Heading margin="0">{item.title}</Heading>
                                    <Text>{item.description}</Text>
                                </CardBody>
                                <CardFooter>{item.action}</CardFooter>
                            </Card>
                        </DraggableListItem>
                    ))}
                    <Button type="button">Add a playlist</Button>
                </DragDropList>
                <FormRow>
                    <TextArea name="text" onChange={() => {}} placeholder="Please enter your text here" />
                </FormRow>
                <FormRow inline>
                    <RadioComponent
                        label={
                            <>
                                <RegularInput inline /> {` songs`}
                            </>
                        }
                        name="songs"
                        value="songs"
                        inline
                        checked
                        onChange={() => {}}
                    />
                    <RadioComponent
                        label={
                            <>
                                <RegularInput inline /> {` minutes`}
                            </>
                        }
                        name="time"
                        value="time"
                        inline
                        checked={false}
                        onChange={() => {}}
                    />
                </FormRow>
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
