import React from 'react';
import styled, { css } from 'styled-components';

const btnPrimary = css`
    background: ${({ theme }) => theme.button.background};
    border: ${({ theme }) => theme.button.border};
    color: ${({ theme }) => theme.button.color};

    &:disabled,
    &:disabled:hover,
    &:disabled:active {
        opacity: 0.4;
        cursor: default;
        user-select: none;
        pointer-events: none;
    }

    &:hover {
        background: ${({ theme }) => theme.button.hover.background};
        border: ${({ theme }) => theme.button.hover.border};
        color: ${({ theme }) => theme.button.hover.color};
    }
    &:active {
        background: ${({ theme }) => theme.button.active.background};
        border: ${({ theme }) => theme.button.active.border};
        color: ${({ theme }) => theme.button.active.color};

        &:hover {
            background: ${({ theme }) => theme.button.active.hover.background};
            border: ${({ theme }) => theme.button.active.hover.border};
            color: ${({ theme }) => theme.button.active.hover.color};
        }
    }
`;

const btnAction = css`
    background: ${({ theme, icon }) => (icon === true ? theme.main.background : theme.button.color)};
    border: ${({ theme }) => theme.button.background};
    color: ${({ theme }) => theme.button.background};

    &:disabled,
    &:disabled:hover,
    &:disabled:active {
        opacity: 0.4;
        cursor: default;
        user-select: none;
        pointer-events: none;
    }

    &:hover {
        background: ${({ theme, icon }) => (icon === true ? theme.main.background : theme.button.color)};
        border: ${({ theme }) => theme.button.hover.background};
        color: ${({ theme }) => theme.button.hover.background};
    }
    &:active {
        background: ${({ theme, icon }) => (icon === true ? theme.main.background : theme.button.color)};
        border: ${({ theme }) => theme.button.active.background};
        color: ${({ theme }) => theme.button.active.background};

        &:hover {
            background: ${({ theme, icon }) => (icon === true ? theme.main.background : theme.button.color)};
            border: ${({ theme }) => theme.button.active.hover.background};
            color: ${({ theme }) => theme.button.active.hover.background};
        }
    }
`;

const btnInline = css`
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.button.background};

    &:disabled,
    &:disabled:hover,
    &:disabled:active {
        opacity: 0.4;
        cursor: default;
        user-select: none;
        pointer-events: none;
    }

    &:hover {
        background: transparent;
        border: ${({ theme }) => theme.button.hover.background};
        color: ${({ theme }) => theme.button.hover.background};
    }
    &:active {
        background: transparent;
        border: ${({ theme }) => theme.button.active.background};
        color: ${({ theme }) => theme.button.active.background};

        &:hover {
            background: transparent;
            border: ${({ theme }) => theme.button.active.hover.background};
            color: ${({ theme }) => theme.button.active.hover.background};
        }
    }

    & + button,
    & + a {
        margin-left: 0;
    }
`;

const btnOutline = css`
    background: ${({ theme }) => theme.button.color};
    border: ${({ theme }) => theme.button.border};
    color: ${({ theme }) => theme.button.background};

    &:disabled,
    &:disabled:hover,
    &:disabled:active {
        opacity: 0.4;
        cursor: default;
        user-select: none;
        pointer-events: none;
    }

    &:hover {
        background: ${({ theme }) => theme.button.color};
        border: ${({ theme }) => theme.button.border};
        color: ${({ theme }) => theme.button.hover.background};
    }
    &:active {
        background: ${({ theme }) => theme.button.color};
        border: ${({ theme }) => theme.button.border};
        color: ${({ theme }) => theme.button.active.background};

        &:hover {
            background: ${({ theme }) => theme.button.color};
            border: ${({ theme }) => theme.button.border};
            color: ${({ theme }) => theme.button.active.hover.background};
        }
    }
`;

const btnBase = css`
    text-decoration: none;
    position: relative;
    text-align: center;
    box-sizing: border-box;
    font-weight: 600;
    display: ${({ display }) => display || `block`};
    font-family: ${({ theme }) => theme.main.font};
    width: ${({ width }) => width || `auto`};
    height: 3rem;
    padding: ${({ icon }) => (icon === true ? `0.6rem` : `0.667rem 1.333rem`)};
    //font-size: ${({ icon }) => (icon === true ? `1.333rem` : `1rem`)};
    font-size: 1rem;
    border-radius: ${({ rounded, theme }) => (rounded === true ? '10rem' : theme.main.borderRadius)};
    cursor: pointer;
    box-shadow: none;

    ${({ action, outline }) => (action === true ? btnAction : outline === true ? btnOutline : btnPrimary)};
    ${({ inline }) => (inline === true ? btnInline : '')};

    /* if a button is followed by a button add left margin to the trailing button */
    & + button,
    & + a {
        margin-left: 0.4rem;
    }

    svg {
        fill: currentColor;
        height: 1.1rem;
        width: 1em;
    }
`;

const BaseButton = styled.button`
    ${btnBase}
`;

const RouteLinkBase = styled.a`
    ${btnBase}
`;

const InputButtonBase = styled.input`
    ${btnBase}
`;

const RouteLinkButton = props => {
    const { children, to } = props;
    // should href be to and import nextjs route link component?
    return (
        <RouteLinkBase href={to} {...props}>
            {children}
        </RouteLinkBase>
    );
};

const LinkButton = props => {
    const { children, href } = props;
    // should href be to and import nextjs route link component?
    return (
        <RouteLinkBase href={href} {...props}>
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

const Button = props => {
    const { children, loading = false, theme = null, to = false, href = false } = props;
    const content = children;

    const attributes = {
        ...props,
        ...{
            icon: false
        }
    };

    // if content is not a string
    if (typeof content !== 'string') {
        attributes.icon = true;
    }

    // if theme is set and is an object
    if (theme !== null && typeof theme === 'object') {
        attributes.themeOveride = theme;
    }

    //
    if (to !== false) {
        return <RouteLinkButton {...attributes}>{content}</RouteLinkButton>;
    }

    if (href !== false) {
        return <LinkButton {...attributes}>{content}</LinkButton>;
    }

    return <BaseButton {...attributes}>{content}</BaseButton>;
};

export default Button;
