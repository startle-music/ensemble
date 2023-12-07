import React, { Component } from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import Icon from '../../icons/Search';
import CloseIcon from '../../icons/Times';

const Wrap = styled.div`
    display: block;
    position: relative;
    margin-bottom: 1.625rem;
    width: 100%;
    max-width: 25rem;
    border: none;
    background: ${({ theme }) => theme.main.contrastColor};
    font-size: 1.6rem;
    font-weight: lighter;
    border-radius: 0.5rem;

    .input-wrapper {
        display: block;
        width: 100%;
        border-radius: 0.5rem;
        outline: none;
        border: 0px;
    }
`;

const Input = styled.input`
    display: block;
    position: relative;
    width: 100%;
    min-width: 8rem;
    border-radius: 0.5rem;
    background: transparent;
    outline: none;
    border: 0px;
    box-shadow: none;
    font-size: 1.2rem;
    padding: 1.2rem 0 1.2rem 3.6rem;

    &:focus {
        box-shadow: 0 0 4px red;
    }

    &::placeholder {
        color: ${({ theme }) => theme.text.input.placeholder};
    }
`;

const IconWrap = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.7em;
    cursor: pointer;

    color: ${({ theme }) => theme.text.input.placeholder};

    svg {
        width: 1em;
        height: 1em;
        fill: currentColor;
    }
`;
const CloseWrap = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    padding: 1.1rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text.input.placeholder};

    button {
        display: flex;
        color: inherit;
    }

    svg {
        width: 1em;
        height: 1em;
        fill: currentColor;
    }
`;

class Search extends Component {
    constructor(props) {
        super(props);
        this.renderIcon = this.renderIcon.bind(this);
    }

    renderIcon() {
        const { showIcon = false, handleFilter } = this.props;
        if (showIcon) {
            return (
                <IconWrap onClick={handleFilter}>
                    <Icon />
                </IconWrap>
            );
        }
        return null;
    }

    renderInput() {
        const { handleFilter, value } = this.props;
        return (
            <div className="input-wrapper">
                <Input type="input" name="search" placeholder="Filter Sites" onChange={handleFilter} value={value} />
            </div>
        );
    }

    renderClose() {
        const { clearText, value } = this.props;
        if (value === null || value.length === 0) {
            return null;
        }
        return (
            <CloseWrap className="close-wrapper">
                <button className="close-icon" type="button" onClick={clearText}>
                    <CloseIcon />
                </button>
            </CloseWrap>
        );
    }

    render() {
        const { handleFilter } = this.props;
        return (
            <Wrap onSubmit={handleFilter}>
                {this.renderIcon()}
                {this.renderInput()}
                {this.renderClose()}
            </Wrap>
        );
    }
}

export default Search;
