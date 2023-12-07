import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import styled from 'styled-components';
import { transparentize } from 'polished';
import Button from '../button';
import theme from '../../../style/theme';
import ContentWrap from '../../ContentWrap';

import ArrowDown from '../../icons/AngleDown';
import ArrowUp from '../../icons/AngleUp';
import DashIcon from '../../icons/dash-icon';
import GridIcon from '../../icons/grid-icon';
import MusicIcon from '../../icons/music-icon';
import DisplayIcon from '../../icons/display-icon';
import JukebotIcon from '../../icons/jukebot-icon';
import MegaphoneIcon from '../../icons/megaphone-icon';
import InfoIcon from '../../icons/info-icon';
import ShopIcon from '../../icons/shop-icon';
import FinanceIcon from '../../icons/finance-icon';
import DeviceIcon from '../../icons/device-icon';
import CogIcon from '../../icons/Cog';
import FilterIcon from '../../icons/Filter';
import AlbumCollection from '../../icons/AlbumCollection';
import BoomBox from '../../icons/Boombox';
import Coins from '../../icons/Coins';
import CompactDisk from '../../icons/CompactDisc';
import Copy from '../../icons/Copy';
import FileMusic from '../../icons/FileMusic';
import Futbol from '../../icons/Futbol';
import Images from '../../icons/Image';
import List from '../../icons/List';
import ListMusic from '../../icons/ListMusic';
import Lock from '../../icons/LockAlt';
import PhotoVideo from '../../icons/PhotoVideo';
import SlidersH from '../../icons/SlidersH';
import Stream from '../../icons/Stream';
import Tag from '../../icons/Tag';
import Tags from '../../icons/Tags';
import Tv from '../../icons/Tv';
import UserMusic from '../../icons/UserMusic';

const IconWrapper = styled.div`
    width: 2.5rem;
    margin: auto;
    .iconDiv {
        width: 2.5rem;
        svg {
            fill: ${p => p.theme.generalColors.lightBlueGrey};
        }
    }
`;
const EmptyDisplayWrap = styled.div``;
const HeaderWrapper = styled.h4`
    font-size: 1.3rem;
    color: ${p => p.theme.mainColors.paintItBlack};
    text-align: center;
    font-weight: normal;
`;
const MessageWrapper = styled.h5`
    text-align: center;
    font-size: 1rem;
    font-weight: normal;
    color: ${p => p.theme.generalColors.darkGrey};
`;

const ChildDiv = styled.div`
    text-align: center;
    margin-top: 1rem;
    div {
        display: flex;
        justify-content: center;
        text-align: center !important;
    }
    ul {
        text-align: center !important;
    }
`;

const icons = {
    dash: <DashIcon className="menu-icon" />,
    apps: <GridIcon className="menu-icon" />,
    Music: <MusicIcon className="menu-icon" />,
    display: <DisplayIcon className="menu-icon" />,
    jukebot: <JukebotIcon className="menu-icon" />,
    messaging: <MegaphoneIcon className="menu-icon" />,
    management: <ShopIcon className="menu-icon" />,
    marketplace: <ShopIcon className="menu-icon" />,
    support: <InfoIcon className="menu-icon" />,
    Finance: <FinanceIcon className="menu-icon" />,
    'Device Management': <DeviceIcon className="menu-icon" />,
    cog: <CogIcon className="menu-icon" />,
    filter: <FilterIcon className="menu-icon" />,
    albumCollection: <AlbumCollection className="menu-icon" />,
    boombox: <BoomBox className="menu-icon" />,
    coins: <Coins className="menu-icon" />,
    compactDisk: <CompactDisk className="menu-icon" />,
    copy: <Copy className="menu-icon" />,
    fileMusic: <FileMusic className="menu-icon" />,
    futbol: <Futbol className="menu-icon" />,
    images: <Images className="menu-icon" />,
    list: <List className="menu-icon" />,
    listMusic: <ListMusic className="menu-icon" />,
    lock: <Lock className="menu-icon" />,
    photoVideo: <PhotoVideo className="menu-icon" />,
    slidersH: <SlidersH className="menu-icon" />,
    stream: <Stream className="menu-icon" />,
    tag: <Tag className="menu-icon" />,
    tags: <Tags className="menu-icon" />,
    tv: <Tv className="menu-icon" />,
    userMusic: <UserMusic className="menu-icon" />,
    default: <MusicIcon className="menu-icon" />
};

class EmptyDisplay extends Component {
    constructor(props) {
        super(props);
        this.renderIcon = this.renderIcon.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.renderMessage = this.renderMessage.bind(this);
    }

    renderIcon() {
        const { iconType = false } = this.props;
        if (iconType) {
            const Icon = icons[iconType];
            return (
                <IconWrapper>
                    <div className="iconDiv">{Icon}</div>
                </IconWrapper>
            );
        }
        return null;
    }

    renderHeader() {
        const { Header = false } = this.props;
        if (Header) {
            return <HeaderWrapper>{Header}</HeaderWrapper>;
        }

        return null;
    }

    renderMessage() {
        const { Message = false } = this.props;
        if (Message) {
            return <MessageWrapper>{Message}</MessageWrapper>;
        }
        return null;
    }

    renderChildren() {
        const { children = false, childClassName } = this.props;
        if (children) {
            return <ChildDiv className={childClassName}>{children}</ChildDiv>;
        }
    }

    render() {
        return (
            <ContentWrap>
                <EmptyDisplayWrap className="emptyDisplayWrap">
                    {this.renderIcon()}
                    {this.renderHeader()}
                    {this.renderMessage()}
                    {this.renderChildren()}
                </EmptyDisplayWrap>
            </ContentWrap>
        );
    }
}

export default EmptyDisplay;
