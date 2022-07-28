import React from 'react';

import Rectangle from '../../components/databoxes/rectangle';
import DataBox from '../../components/databoxes/iconboxes';
import HDMI from '../../components/icons/HDMI';

export default {
  component: Rectangle,
  title: 'Components/Databoxes/rectangle',
};

const Children = () => {
    return (
        <DataBox leftText='asdf'
        rightText= '(40%)'
        fill= '#293'
        Icon= {HDMI}/>
    )
}

const Template = args => <Rectangle {...args} />;

export const Default = Template.bind({});
Default.args = {
    id:12,
    text:"tsdfgsdfg",
    title: 'Components/Databoxes/rectangle/default',
    children: <Children/>
};
