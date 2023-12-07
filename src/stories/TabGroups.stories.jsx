import Tab from '../components/tab';
import TabGroup from '../components/tab/group';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Tabs/Group',
  component: TabGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //argTypes: {
    //backgroundColor: { control: 'color' },
  //},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TabGroup {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    id: "TabGroup 1",
    children: <>
        <Tab id={'tab1'} checked={true}><div>Tab 1</div></Tab>
        <Tab id={'tab2'}><div>Tab 2</div></Tab>
        <Tab id={'tab3'}><div>Tab 3</div></Tab>
    </>
};

export const Long = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Long.args = {
    id: "TabGroup 2",
    children: <>
        <Tab id={'tab1'} checked={true}><div>Tab 1</div></Tab>
        <Tab id={'tab2'}><div>Tab 2</div></Tab>
        <Tab id={'tab3'}><div>Tab 3</div></Tab>
        <Tab id={'tab4'}><div>Tab 4</div></Tab>
        <Tab id={'tab5'}><div>Tab 5</div></Tab>
        <Tab id={'tab6'}><div>Tab 6</div></Tab>
        <Tab id={'tab7'}><div>Tab 7</div></Tab>
        <Tab id={'tab8'}><div>Tab 8</div></Tab>
        <Tab id={'tab9'}><div>Tab 9</div></Tab>
        <Tab id={'tab10'}><div>Tab 10</div></Tab>
        <Tab id={'tab11'}><div>Tab 11</div></Tab>
    </>
};


