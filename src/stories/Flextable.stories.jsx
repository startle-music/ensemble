
import Flextable from '../components/flextable';
import Head from '../components/flextable/head';
import Header from '../components/flextable/header';
import Row from '../components/flextable/row';
import Cell from '../components/flextable/cell';
import TextPairs from '../components/databoxes/textpairs';
import Text from '../components/text';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Flextable/Full',
  component: Flextable,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //argTypes: {
    //backgroundColor: { control: 'color' },
  //},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Flextable {...args} />;


const Children = () => {
    return (
        <>
            <Head>
                <Header>Header 1</Header>
                <Header><a>Header 2</a></Header>
                <Header><a>Header 3</a></Header>
            </Head>
            <Row>
                <Cell>Test1</Cell>
                <Cell>Test2</Cell>
                <Cell>Test3</Cell>
            </Row>
            <Row>
                <Cell>Test1</Cell>
                <Cell>Test2</Cell>
                <Cell>Test3</Cell>
            </Row>
            <Row>
                <Cell>Test1</Cell>
                <Cell>Test2</Cell>
                <Cell>Test3</Cell>
            </Row>
            <Row>
                <Cell>Test1</Cell>
                <Cell>Test2</Cell>
                <Cell>Test3</Cell>
            </Row>
        </>
    )
}

const DevicesReportTable = () => {
    return (
        <>
            <Head>
                <Header type="smalltableheader">Header 1</Header>
                <Header type="smalltableheader">Header 2</Header>
                <Header type="smalltableheader">Header 3</Header>
            </Head>
            <Row>
                <Cell><Text type="small">1 day</Text></Cell>
                <Cell><TextPairs leftText="223,234" rightText="(45/344)"/></Cell>
                <Cell><TextPairs leftText="223,234" rightText="(45/344)"/></Cell>
            </Row>
            <Row>
                <Cell><Text type="small">1 day</Text></Cell>
                <Cell><TextPairs leftText="223,234" rightText="(45/344)"/></Cell>
                <Cell><TextPairs leftText="223,234" rightText="(45/344)"/></Cell>
            </Row>
            <Row>
                <Cell><Text type="small">1 day</Text></Cell>
                <Cell><TextPairs leftText="223,234" rightText="(45/344)"/></Cell>
                <Cell><TextPairs leftText="223,234" rightText="(45/344)"/></Cell>
            </Row>
            <Row>
                <Cell><Text type="small">1 day</Text></Cell>
                <Cell><TextPairs leftText="223,234" rightText="(45/344)"/></Cell>
                <Cell><TextPairs leftText="223,234" rightText="(45/344)"/></Cell>
            </Row>
        </>
    )
}


export const Table = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Table.args = {
    id:'field-1',
    children: <Children />,
    columns: ["12rem", "calc(100% - 24rem)", "12rem"]
    //inline: false,,

    //disabled: false,
    //className: null
};

export const DevicesReport = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DevicesReport.args = {
    id:'field-2',
    children: <DevicesReportTable />,
    columns: ["12rem", "calc(100% - 24rem)", "12rem"]
    //inline: false,
    //disabled: false,
    //className: null
};


