import Tab from '../components/tab';
import TabWrap from '../components/tab/wrap';
import TabGroup from '../components/tab/group';
import theme from '../../style/theme';
import TabContent from '../components/tab/content';
import TabPane from '../components/tab/pane';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Tabs/Wrap',
  component: TabWrap,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //argTypes: {
    //backgroundColor: { control: 'color' },
  //},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TabWrap {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    id: "TabWrap 1",
    children: <>
        <TabGroup>
            <Tab id={'tab1'} checked={true}><div>Tab 1</div></Tab>
            <Tab id={'tab2'}><div>Tab 2</div></Tab>
            <Tab id={'tab3'}><div>Tab 3</div></Tab>
        </TabGroup>
        <TabContent>
            <TabPane id={'tab1'} checked={true}>Content 1</TabPane>
            <TabPane id={'tab2'}>Content 2</TabPane>
            <TabPane id={'tab3'}>Content 3</TabPane>
        </TabContent>
    </>
};



