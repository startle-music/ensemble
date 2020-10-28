import React from 'react'
import styled, { css } from 'styled-components'
import Loading from '../loader/spinner'

const btnOline = css`
    background: ${({ theme }) => theme.main.background};
    border: 1px solid ${({ theme }) => theme.main.background};
    color: ${({ theme, product }) => theme.products[product || 'default'].primary};

    &:disabled {
        opacity: 1;
        cursor: default;
    }
    &:hover {
        opacity: 1;
    }
    &:active {
        opacity: 1;
    }
`;

const btnFull = css`
    background: 'red';
    border: 1px solid red;
    color: 'white';

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }

    &:hover {
        opacity: 1;
    }
    &:active {
        opacity: 1;
    }
`;

const btnBase = css`
    padding: 0.75rem 2rem;
    font-size: ${props => (props.small === 'true' ? `0.785rem` : `1rem`)};
    text-decoration: none;
    position: relative;
    display: ${props => (props.type === 'full' ? `block` : `inline-block`)};
    text-align: center;
    box-sizing: border-box;
    font-weight: bold;
    border-radius: ${props => (props.rounded === 'true' ? '10rem' : '0')};
    cursor: pointer;
    box-shadow: none;
    ${props => (props.outline === true ? btnOline : btnFull)}

    /* if a button is followed by a button add left margin to the trailing button */
    &+button, &+a {
        margin-left: 0.4rem;
    }

    svg {
        fill: currentColor;
        height: 1.1rem;
        width: 1em;
    }
`;

const LinkBtnBase = styled.a`
    ${btnBase}
`;

const RouteLinkBase = styled.a`
    ${btnBase}
    vertical-align: middle;
`;

const SubmitBtnBase = styled.button`
    ${btnBase}
`;

const IconBtnBase = styled.button`
    ${btnBase}
    border: 0px;
    padding: 0px;
    color: white;
    background: transparent;
    box-shadow: none;
`;

const TableIconBase = css`
    ${btnBase}
    border: 0px;
    padding: 0.4rem 0rem;
    width:29px;
    
    background: 'red';
    color: 'white';
    border-radius: 0.18rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s linear;

    &:disabled{
        &:hover{
            opacity: 0.4;
        }
    }
`;

const TableIconBtnBase = styled.button`
    ${TableIconBase}
`;

const TableLinkIconBtnBase = styled.a`
    ${TableIconBase}
    vertical-align: middle;
`;

const CancelBtnBase = styled.button`
    ${btnBase}
    background: transparent;
    border-color: transparent;
    box-shadow: none;
`;

const CustomBtnColor = styled.button`
    ${btnBase}
`;

const ButtonBtnBase = styled.button`
    ${btnBase}
`;

const SubmitModalBtnBase = styled.button`
    ${btnBase}
    max-width: 8em;
    border-radius: 2em;
    display: block;
    margin: 3em auto 0em auto;
    background: #7cc530;
    border: 1px solid #7cc530;
`;

const Cancel = ({ children, ...rest }) => <CancelBtnBase {...rest}>{children}</CancelBtnBase>;
const ColorButton = ({ children, ...rest }) => <CustomBtnColor {...rest}>{children}</CustomBtnColor>;

const Button = ({ children, ...rest }) => <ButtonBtnBase {...rest}>{children}</ButtonBtnBase>;

const Icon = ({ children, ...rest }) => <IconBtnBase {...rest}>{children}</IconBtnBase>;

const TableIcon = ({ children, ...rest }) => <TableIconBtnBase {...rest}>{children}</TableIconBtnBase>;

const LinkButton = props => {
    const { children, href } = props;
    return (
        <LinkBtnBase {...props} href={href}>
            {children}
        </LinkBtnBase>
    );
};

const TableLinkButton = props => {
    const { children, to } = props;
    return (
        <TableLinkIconBtnBase {...props} to={to}>
            {children}
        </TableLinkIconBtnBase>
    );
};

const RouteLink = props => {
    const { children, to } = props;
    return (
        <RouteLinkBase to={to} {...props}>
            {children}
        </RouteLinkBase>
    );
};

const LoadingWrap = styled.div`
    position: relative;
    user-select: none;

    > *:first-child {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    > *:not(:first-child) {
        opacity: 0;
    }
`;

const Submit = props => <SubmitBtnBase {...props} value={props.value} type="submit" />;
/**
 * @TODO: Review Submit Modal button type so see if it can be made useless.
 * */
const SubmitModal = props => <SubmitModalBtnBase {...props} value={props.value} type="submit" />;

const ButtonWrap = props => {
    const { children, type, loading = false, message = null } = props;
    let content = children;
    if (loading === true) {
        content = (
            <LoadingWrap>
                <Loading />
                <div>{children}</div>
            </LoadingWrap>
        );
    }
    if (message !== null) {
        content = message;
    }

    switch (type) {
        case 'link':
            return <LinkButton {...props}>{content}</LinkButton>;
        case 'route-link':
            return <RouteLink {...props}>{content}</RouteLink>;
        case 'table-route-link':
            return <TableLinkButton {...props}>{content}</TableLinkButton>;
        case 'submit':
            return <Submit {...props} value={content} />;
        case 'submit-modal':
            return <SubmitModal {...props} value={content} />;
        case 'cancel':
            return <Cancel {...props} value={content || 'cancel'} />;
        case 'icon':
            return <Icon {...props}>{content}</Icon>;
        case 'table-icon':
            return <TableIcon {...props}>{content}</TableIcon>;
        case 'custom-color':
            return <ColorButton {...props} value={content} />;
        default:
            return <Button {...props}>{content}</Button>;
    }
};

export default ButtonWrap;
