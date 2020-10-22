import React, { Component } from 'react';
import styled from 'styled-components';
import pageFunction from './paginate';
import Button from '../button';
import ArrowRight from '../../icons/ArrowRight';
import ArrowLeft from '../../icons/ArrowLeft';

const Wrap = styled.div`
    display: block;
    text-align: right;

    > * {
        &.number &.arrow &.inactivearrow {
            display: inline-block;
            border: none;
        }
        &.number {
            padding: 0.7em 0.5em;
            width: 2.5em;
            margin: 0.5em 0.1em;
            background: #fff;
            color: ${props => props.theme.pagination.color};
            border: none;
        }

        &.arrow {
            padding: 0.8em 0.8em 0.6em 0.8em;
            margin: 0.5em 0.1em;
            background: #fff;
            border: none;
        }
        &.inactivearrow {
            padding: 0.8em 0.8em 0.6em 0.8em;
            margin: 0.5em 0.1em;
            background: #f0f0f0;
            pointer-events: none;
            border: none;
        }

        &.active {
            background: #e83948;
            border-radius: 4px 0em;
            margin: 0.5em 0.1em;
            padding: 0.7em 0.5em;
            width: 2.5em;
            outline: none;
            color: #fff;
            border: none;
            border-radius: 10px;
        }
    }
`;
const SvgWrap = styled.div`
    align-self: flex-end;
    width: 0.9em;

    svg {
        width: 100%;
        height: 100%;
        fill: ${props => props.color};
    }

    .active & {
        svg {
            fill: red;
        }
    }
`;

const _pageSize = 20;
const _totalPages = 5;

class Pagination extends Component {
    constructor(props) {
        super(props);

        this.renderPageButton = this.renderPageButton.bind(this);
    }

    renderMore() {
        const { page, paginate } = this.props;
        // handlePaginate(page, filters, column, direction) {
        const handlePaginate = pg => {
            paginate(pg);
        };
        return (
            <Wrap>
                <Button onClick={handlePaginate(page)}>Load More</Button>
            </Wrap>
        );
    }

    renderPageButton(pageNumber) {
        const { paginate, page } = this.props;

        // handlePaginate(page, filters, column, direction) {
        const handlePaginate = pg => {
            paginate(pg);
        };
        let className = '';
        if (page === pageNumber || (page <= 0 && pageNumber === 1)) {
            className = 'active';
        } else {
            className = 'number';
        }
        return (
            <Button
                key={`pagination-page-${pageNumber}`}
                value="Test Button"
                type="button"
                outline="true"
                className={className}
                onClick={() => {
                    handlePaginate(pageNumber);
                }}
            >
                {pageNumber}
            </Button>
        );
    }

    renderBackPageButton(current) {
        const { paginate, page } = this.props;
        const handlePaginate = pg => {
            paginate(pg);
        };
        let className = '';
        let color = '';
        let disabled = false;
        if (page > 1 && current.pages.length > 0) {
            className = 'arrow';
            color = '#e83948';
        } else {
            className = 'inactivearrow';
            color = '#B4B7BC';
            disabled = true;
        }
        return (
            <Button
                disabled={disabled}
                className={className}
                onClick={() => {
                    handlePaginate(page - 1);
                }}
            >
                <SvgWrap color={color}>
                    <ArrowLeft />
                </SvgWrap>
            </Button>
        );
    }

    renderNextPageButton(current) {
        const { paginate, page } = this.props;
        const handlePaginate = pg => {
            paginate(pg);
        };
        let className = '';
        let color = '';
        if (page < current.totalPages) {
            className = 'arrow';
            color = '#e83948';
        } else {
            className = 'inactivearrow';
            color = '#B4B7BC';
        }
        return (
            <Button
                className={className}
                onClick={() => {
                    handlePaginate(page + 1);
                }}
            >
                <SvgWrap color={color}>
                    <ArrowRight />
                </SvgWrap>
            </Button>
        );
    }

    renderPages() {
        const { page, totalRecords } = this.props;
        const current = pageFunction(totalRecords, page, _pageSize, _totalPages);
        const { pages } = current;

        return (
            <Wrap>
                {pages && pages.length > 1 ? (
                    <>
                        {this.renderBackPageButton(current)}
                        {pages.map(this.renderPageButton)}
                        {this.renderNextPageButton(current)}
                    </>
                ) : null}
            </Wrap>
        );
    }

    render() {
        const { type } = this.props;
        switch (type) {
            case 'paginate':
                return this.renderPages(type);
            case 'more':
                return this.renderMore(type);

            case 'none':
            default:
                return null;
        }
    }
}

export default Pagination;
