import React, { Component } from 'react';
import styled from 'styled-components';

import Arrow from '../../../icons/arrow-icon';
import SortIcon from '../../../icons/Sort';
import SortDownIcon from '../../../icons/SortDown';
import SortUpIcon from '../../../icons/SortUp';

const Wrap = styled.div`
    display: flex;
    position: relative;
`;

const Item = styled.div`
    flex: 1;
    padding: 10px 35px 10px 15px;
    cursor: pointer;
    position: relative;
    user-select: none;
    > svg {
        display: block;
        position: absolute;
        top: 10px;
        right: 10px;
    }
`;
const TableWrap = styled.thead`
    font-size: 1.1rem;
    background-color: #fff;
    border-bottom: 2px solid #e7e7e7;
    tr:last-child th:first-child {
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
    }
    tr:last-child th:last-child {
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
    }
    th:last-child {
        position: sticky;
        right: 0px;
        background: white;
        border-left: 1px;
        padding: 10px 15px 10px 0px;
    }
    th {
        max-width: 15rem;
    }
`;

const TableItem = styled.th`
    padding: 15px;
    cursor: ${props => (props.isClickable ? 'pointer' : 'default')};
    position: relative;
    user-select: none;
    //font-size: 0.8em;
    font-weight: bold;
    white-space: nowrap;
    > svg {
        display: block;
        position: absolute;
        top: 10px;
        right: 10px;
    }
`;

const SortWrap = styled.div`
    align-self: flex-end;
    width: 0.8rem;
    height: 0.8rem;
    display: inline-block;
    margin: 0 0 0 0.8em;
    transform: translateY(0.15em);

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

class Header extends Component {
    constructor(props) {
        super(props);

        this.sort = this.sort.bind(this);
    }

    sort(item) {
        const { sortable, sort } = this.props;
        const { field } = item;
        if (sortable === true) {
            sort(field);
        }
    }

    renderSortArrow(column, sortable) {
        console.log('renderSortArrow', column);
        if (column === '' || sortable !== true) {
            return null;
        }
        const { sortDirection, sortColumn } = this.props;
        if (sortColumn === column) {
            if (sortDirection > 0) {
                return (
                    <SortWrap color="#30a4c5">
                        <SortUpIcon />
                    </SortWrap>
                );
            }
            return (
                <SortWrap color="#30a4c5">
                    <SortDownIcon />
                </SortWrap>
            );
        }
        return (
            <SortWrap color="#b7c9db">
                <SortIcon />
            </SortWrap>
        );
    }

    renderItem(item) {
        const { tables, sortable } = this.props;
        let ItemItem = Item;
        if (tables) {
            ItemItem = TableItem;
        }
        return (
            <ItemItem
                key={`row-header-${item.field}`}
                column={item.field}
                onClick={sortable ? () => this.sort(item) : null}
                isClickable={sortable}
            >
                <span style={{ whiteSpace: 'nowrap' }}>
                    {item.title}
                    {this.renderSortArrow(item.field, sortable)}
                </span>
            </ItemItem>
        );
    }

    render() {
        const { data, tables } = this.props;
        if (data && data.length !== 0) {
            if (data[data.length - 1].field !== '') {
                data.push({
                    display: true,
                    editable: false,
                    options: [],
                    field: '',
                    title: '',
                    type: 'hidden'
                });
            }
        }
        let children = null;
        if (typeof data === 'object' && data.length > 0) {
            children = data.filter(({ display }) => display).map(item => this.renderItem(item));
        }

        if (tables) {
            return (
                <TableWrap>
                    <tr>{children}</tr>
                </TableWrap>
            );
        }
        return <Wrap>{children}</Wrap>;
    }
}

export default Header;
