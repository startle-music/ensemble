import React, { Component } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import CheckCircleLight from '../../icons/CheckCircleLight';
import ExclamationCircleLight from '../../icons/ExclamationCircleLight';
import TimesCircleLight from '../../icons/TimesCircleLight';
import InfoCircleLight from '../../icons/InfoCircleLight';

const IconWrap = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    display: inline-block;
    vertical-align: middle;
    color: ${props => props.theme.toast.highlight[props.type || 'default'] || props.theme.toast.highlight.default};

    svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: currentColor;
    }
`;
const ToastHeaderWrap = styled.div`
    display: block;

    h4 {
        margin-left: 1rem;
        display: inline-block;
        vertical-align: middle;
        text-transform: capitalize;
        color: ${props => props.theme.toast.color};
    }
`;
const ToastMessageWrap = styled.p`
    margin: 0 0 0 2.5rem;
    color: ${props => props.theme.toast.color};
`;

const ToastMessage = ({ message }) => <ToastMessageWrap>{message}</ToastMessageWrap>;

const ToastHeader = ({ title, type }) => {
    let Icon = InfoCircleLight;
    if (type === 'success') {
        Icon = CheckCircleLight;
    } else if (type === 'danger') {
        Icon = TimesCircleLight;
    } else if (type === 'warning') {
        Icon = ExclamationCircleLight;
    } else if (type === 'default' || type === 'info') {
        Icon = InfoCircleLight;
    }

    return (
        <ToastHeaderWrap>
            <IconWrap type={type}>
                <Icon />
            </IconWrap>
            <h4>{title}</h4>
        </ToastHeaderWrap>
    );
};

class ToastContent extends Component {
    render() {
        const { message, type = 'default', title = null } = this.props;

        let _title = title;
        if (_title === null) {
            _title = type;
        }

        return (
            <div>
                <ToastHeader {...{ title: _title, type }} />
                <ToastMessage {...{ message }} />
            </div>
        );
    }
}

const toastWrap = (message, type, title = null) =>
    toast(
        <ToastContent
            {...{
                message,
                type,
                title
            }}
        />
    );

export default toastWrap;
