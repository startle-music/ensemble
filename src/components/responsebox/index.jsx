import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Times from '../icons/Times';
import CheckCircleLight from '../icons/CheckCircleLight';
import ExclamationCircleLight from '../icons/ExclamationCircleLight';
import TimesCircleLight from '../icons/TimesCircleLight';
import InfoCircleLight from '../icons/InfoCircleLight';

const ResponseBoxText = styled.div`
    display: flex;
    flex-wrap: nowrap;
    padding: 15px 30px 15px 15px;
    margin-bottom: 30px;
    font-size: 1rem;
    color: ${props => props.borderColor};
    border-radius: ${props => props.theme.main.borderRadius};
    width: 100%;
    background-color: ${props => props.backgroundColor};
    border: 1px solid ${props => props.borderColor};
    justify-content: space-between;
    align-items: center;
`;

const TextWrap = styled.p`
    font-size: 0.9em;
    color: ${props => props.color};
    text-align: left;
    flex-grow: 1;
`;

const LeftDiv = styled.div`
    display: flex;
`;

const XWrap = styled.button`
    width: 0.8rem;
    height: 0.8rem;

    svg {
        width: 100%;
        height: 100%;
    }
    &:hover {
        opacity: 0.8;
    }
`;

const IconWrap = styled.div`
    display: flex;
    // width: 1rem;
    justify-self: flex-start;
    align-self: center;
    margin-right: 15px;
    color: ${props => props.color};

    svg {
        fill: currentColor;
        stroke: currentColor;
    }
`;

const ResponseBoxStyled = styled.div`
    text-align: ${props => props.align};
    margin: 0.5em 0 0.5em 0;
`;

const ResponseBox = props => {
    const { type, children, clearResponseBox, data, className, icon } = props;
    const colorDictionary = {
        default: {
            backgroundColor: '#E8E9EB',
            borderColor: '#9397A2'
        },
        success: {
            backgroundColor: '#EBF6E0',
            borderColor: '#9ED464'
        },
        danger: {
            backgroundColor: '#FBE1E3',
            borderColor: '#ED6C76'
        },
        warning: {
            backgroundColor: '#FEF4E2',
            borderColor: '#FACD74'
        },
        info: {
            backgroundColor: '#DFF1F6',
            borderColor: '#7BC5DA'
        }
    };

    function onXClick(customData) {
        if (data === 'undefined') {
            clearResponseBox();
        } else {
            clearResponseBox(customData);
        }
    }

    const color = colorDictionary[type] || colorDictionary.default;

    let faIcon = faInfoCircle;

    switch (type) {
        case 'success':
            faIcon = CheckCircleLight;
            break;
        case 'danger':
            faIcon = TimesCircleLight;
            break;
        case 'warning':
            faIcon = ExclamationCircleLight;
            break;
        case 'info':
            faIcon = faInfoCircle;
            break;
        default:
            faIcon = faInfoCircle;
    }

    if (icon) {
        faIcon = icon;
    }

    let XButton = () => null;
    if (clearResponseBox !== undefined) {
        XButton = () => (
            <XWrap color={color.borderColor} onClick={() => onXClick(data)}>
                <Times />
            </XWrap>
        );
    }
    return (
        <ResponseBoxStyled className={className}>
            <ResponseBoxText backgroundColor={color.backgroundColor} borderColor={color.borderColor}>
                <LeftDiv>
                    <IconWrap color={color.borderColor}>
                        <FontAwesomeIcon icon={faIcon} size="2x" />
                    </IconWrap>
                    <TextWrap color={color.borderColor}>{children}</TextWrap>
                </LeftDiv>
                <XButton />
            </ResponseBoxText>
        </ResponseBoxStyled>
    );
};

export default ResponseBox;
