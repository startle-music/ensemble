import React from 'react';

import Button from '../components/button';
import theme from '../../style/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons';

const palette = [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' }
];
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Buttons',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //colour: palette,
  },
  parameters: {
    colour: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
};


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args}>{args.value}</Button>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  value: 'Test Button',
  rounded: false,
  disabled: false,
  colour: theme.mainColors.simplyRed
};

export const DefaultRounded = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultRounded.args = {
  value: 'Rounded Button',
  rounded: true,
  disabled: false
};


export const DefaultDisabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultDisabled.args = {
  value: 'Disabled Button',
  rounded: true,
  disabled: true
};


export const DefaultOutline = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultOutline.args = {
  value: 'Outline Button',
  rounded: true,
  disabled: false,
  outline: true
};


export const DefaultSmaller = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultSmaller.args = {
  value: 'Smaller Button',
  rounded: true,
  disabled: false,
  outline: false,
  small: true
};


export const RouterDefault = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RouterDefault.args = {
  value: 'Routing Button',
  rounded: false,
  disabled: false,
  outline: false,
  to: '/a/path',
  title: 'Do not click me, I link.'
};

export const LinkDefault = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LinkDefault.args = {
  value: 'Linking Button',
  rounded: false,
  disabled: false,
  outline: false,
  href: 'https://www.google.com',
  target: '_blank',
  title: 'Do not click me, I link.'
};

const ComponentButtonContent = () => {

    return (
        <><span></span>Component Button</>
    )
}
export const ComponentButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ComponentButton.args = {
  value: <ComponentButtonContent />,
  rounded: false,
  disabled: false,
  outline: false,
};


const IconButtonContent = () => {

    return (
        <><span style={{paddingRight: '0.8rem'}}><FontAwesomeIcon icon={faWaveSquare} /></span>Icon Button</>
    )
}
export const IconButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IconButton.args = {
  value: <IconButtonContent />,
  rounded: false,
  disabled: false,
  outline: false,
};

export const OnClickButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OnClickButton.args = {
  value: 'Click Me',
  rounded: false,
  disabled: false,
  outline: false,
  onClick: (evnt) => {
    evnt.preventDefault();
    alert('This is an on click event');
  }
};

