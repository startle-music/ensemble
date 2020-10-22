import React, { Component } from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import Icon from '../../icons/Search';
import CloseIcon from '../../icons/TimesCircleLight';
import { debounce } from '../../../helpers';

const Wrap = styled.div`
    display: block;
    position: relative;
    margin-bottom: 1.625rem;
    height: 2.8rem;
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
        height: 2.8rem;
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
    padding: 0.8rem 0 0.6rem 3.6rem;

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
    padding: 0.4em;
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
    padding: 0.6rem;
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
        this.handleFilterWrapper = this.handleFilterWrapper.bind(this);
        this.clearTextWrapper = this.clearTextWrapper.bind(this);
        this.renderInput = this.renderInput.bind(this);
        this.state = { value: props.value };
        const { handleFilter } = this.props;
        this.handleFilter = debounce(handleFilter, 500);
    }

    componentDidMount() {}

    handleFilterWrapper(e) {
        this.setState({ value: e.target.value });
        this.handleFilter(e.target.value);
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
        const { placeholder = 'Search Table' } = this.props;
        const { value } = this.state;
        return (
            <div className="input-wrapper">
                <Input
                    autoComplete="off"
                    type="input"
                    name="search"
                    placeholder={placeholder}
                    onChange={this.handleFilterWrapper}
                    value={value}
                />
            </div>
        );
    }

    clearTextWrapper() {
        const { clearText } = this.props;
        this.setState({
            value: ''
        });
        clearText();
    }

    renderClose() {
        const { clearText } = this.props;
        const { value } = this.state;
        if (typeof value === 'undefined' || value === null || value.length === 0) {
            return null;
        }
        return (
            <CloseWrap className="close-wrapper">
                <button
                    className="close-icon"
                    type="button"
                    onClick={() => {
                        this.clearTextWrapper();
                    }}
                >
                    <CloseIcon />
                </button>
            </CloseWrap>
        );
    }

    render() {
        const { handleFilter } = this.props;
        return (
            <Wrap className="searchBar" onSubmit={handleFilter}>
                {this.renderIcon()}
                {this.renderInput()}
                {this.renderClose()}
            </Wrap>
        );
    }
}

export default Search;
