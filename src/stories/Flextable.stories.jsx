
import Flextable from '../components/flextable';
import Head from '../components/flextable/head';
import Header from '../components/flextable/header';
import Row from '../components/flextable/row';
import Cell from '../components/flextable/cell';

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

export const Table = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Table.args = {
    id:'field-1',
    children: <Children />,
    columns: ["12rem", "calc(100% - 24rem)", "12rem"]
    //inline: false,
    //disabled: false,
    //className: null
};

