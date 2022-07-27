import React from 'react';

import TextPairs from '../../components/databoxes/textpairs'; 

export default {
  component: TextPairs,
  title: 'Components/Databoxes/textpairs',
};

const Template = args => <TextPairs {...args} />;

export const Default = Template.bind({});
Default.args = {
    id:"f",
    leftText: 'asdf',
    rightText: '(40%)',
    fill: '#293',
    title: 'Components/Databoxes/textpairs/default'
};

