import React from 'react';

import DataBox from '../../components/databoxes/iconboxes';
import HDMI from '../../components/icons/HDMI'; 
import HeadphoneJack from '../../components/icons/HeadphoneJack';
import StartlePlayer from '../../components/icons/StartlePlayer'; 

export default {
  component: DataBox,
  title: 'Components/Databoxes/iconboxes',
};

const Template = args => <DataBox {...args} />;

export const Default = Template.bind({});
Default.args = {
    id:"f",
    leftText: 'asdf',
    rightText: '(40%)',
    fill: '#293',
    Icon: HDMI,
    title: 'Components/Databoxes/iconboxes/default'
};

export const HeadPhoneJack = Template.bind({});
HeadPhoneJack.args = {
    id:"ff",
    leftText: 'asdf',
    rightText: '(40%)',
    fill: '#293',
    Icon: HeadphoneJack,
    title: 'Components/Databoxes/iconboxes/HeadphoneJack'
};

export const StartlePlayerDisplay = Template.bind({});
StartlePlayerDisplay.args = {
    id:"ff",
    leftText: 'asdf',
    rightText: '(40%)',
    fill: '#293',
    Icon: StartlePlayer,
    title: 'Components/Databoxes/iconboxes/StartlePlayer'
};

