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
import Label from '../components/form/fields/label';
import Heading from '../components/headings';
import RadioComponent from '../components/form/fields/radio';
import ToggleArea from '../components/toggleArea';
import ScrollableList, { ListItem } from '../components/scrollableList';
import Checkbox from '../components/form/fields/checkInput';

import Card, { CardHeader, CardBody, CardFooter } from '../components/card';

import RadioPanel from '../components/form/fields/radioPanel';

import Text from '../components/text';
import DragDropList, { DraggableListItem, DraggableListItemHandle } from '../components/dragDropList';
import TextArea from '../components/form/fields/textArea';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../components/modal';

import Steps, { Step } from '../components/steps';
import Switch from '../components/form/fields/switch';

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

const TableActions = id => (
    <>
        <Button key={`aaa${id}`} onClick={() => alert('yo')} inline>
            <FontAwesomeIcon icon={faTrash} />
        </Button>
        <Button key={`bbb${id}`} inline>
            <FontAwesomeIcon icon={faPencil} />
        </Button>
        <Button key={`ccc${id}`} inline>
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
            actions: <TableActions id={1} />
        },
        {
            name: 'Jingle 2',
            type: 'Jingle',
            fileType: 'mp3',
            added: '2020-01-02',
            actions: <TableActions id={2} />
        },
        {
            name: 'Jingle 3',
            type: 'Jingle',
            fileType: 'mp3',
            added: '2020-01-03',
            actions: <TableActions id={3} />
        },
        {
            name: 'Jingle 4',
            type: 'Jingle',
            fileType: 'mp3',
            added: '2020-01-04',
            actions: <TableActions id={4} />
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

function ScrollableListExample() {
    return (
        <ScrollableList padding="0px">
            {ListData.map((item, index) => (
                <ListItem key={index} border>
                    <Card horizontal border={false} margin="0">
                        <CardHeader>
                            <RadioComponent name="radio" value="radio1" margin="0" />
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
    );
}

function ModalContent() {
    return (
        <>
            <ModalHeader>
                <Heading type="title">Modal</Heading>
            </ModalHeader>
            <ModalBody>
                <ScrollableListExample />
            </ModalBody>
            <ModalFooter>
                <Button neutral>Cancel</Button>
                <Button>Save</Button>
            </ModalFooter>
        </>
    );
}

const FormContents = ({ radio, modalOpen, step }) => (
    <>
        <Modal isOpen={modalOpen} content={<ModalContent />} wide />
        <Container padded>
            <Heading type="title">Form</Heading>
            <Steps position={step}>
                <Step title="Frequency and adverts">
                    <Form>
                        <FormRow>
                            <RegularInput label="Search" placeholder="Search" background />
                        </FormRow>
                        <FormRow inline>
                            <RadioComponent
                                label="Radio 1"
                                name="radio"
                                value="radio1"
                                inline
                                checked={radio === 'radio1'}
                            />
                            <RadioComponent
                                label="Radio 2"
                                name="radio"
                                value="radio2"
                                inline
                                checked={radio === 'radio2'}
                            />
                            <RadioComponent
                                label="Radio 3"
                                name="radio"
                                value="radio3"
                                inline
                                checked={radio === 'radio3'}
                            />
                        </FormRow>
                        <ToggleArea check="radio2" value={radio}>
                            <FormRow>
                                <ColumnWrapper>
                                    <Column span={6}>
                                        <RegularInput label="Start Date" type="date" background />
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

                        <ScrollableListExample />
                    </Form>
                </Step>
                <Step title="Step 2">
                    <Form>
                        <FormRow>
                            <ColumnWrapper>
                                <Column span={6}>
                                    <RadioPanel
                                        name="radio"
                                        index="1"
                                        checked={radio === 'radio1'}
                                        setChecked={() => {}}
                                        value="radio1"
                                        label="Radio 1"
                                        icon={faFileAudio}
                                    />
                                </Column>
                                <Column span={6}>
                                    <RadioPanel
                                        name="radio"
                                        index="2"
                                        checked={radio === 'radio2'}
                                        setChecked={() => {}}
                                        value="radio2"
                                        label="Radio 2"
                                        icon={faFileAudio}
                                    />
                                </Column>
                            </ColumnWrapper>
                        </FormRow>
                        <DragDropList background>
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
                                        <RegularInput inline background /> {` songs`}
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
                                        <RegularInput inline background /> {` minutes`}
                                    </>
                                }
                                name="time"
                                value="time"
                                inline
                                checked={false}
                                onChange={() => {}}
                            />
                        </FormRow>
                        <FormRow>
                            <ColumnWrapper>
                                <Column span={3}>
                                    <TimeSelect
                                        value={10}
                                        label="Start Time"
                                        inputBorder={theme.form.input.border}
                                        inputColour={theme.form.input.placeholder}
                                    />
                                </Column>
                                <Column span={3}>
                                    <TimeSelect
                                        value={10}
                                        label="End Time"
                                        inputBorder={theme.form.input.border}
                                        inputColour={theme.form.input.placeholder}
                                    />
                                </Column>
                            </ColumnWrapper>
                        </FormRow>
                        <FormRow>
                            <Switch label="Switch" colour="greenDay" />
                        </FormRow>
                        <FormRow>
                            <Label>News to include:</Label>
                            <FormRow inline nested>
                                <Checkbox label="National news" />
                                <Checkbox label="Local news" />
                            </FormRow>
                        </FormRow>
                    </Form>
                </Step>
            </Steps>
        </Container>
    </>
);

export const FormExample = {
    args: {
        id: 'Form Page',
        radio: 'radio2',
        modalOpen: false,
        step: 0
    },
    render: args => (
        <Page>
            <FormContents {...args} />
        </Page>
    )
};
