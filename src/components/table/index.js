import React from 'react';
import styled, { css } from 'styled-components';
import Pagination from '../pagination';
import { debounce } from '../../../helpers';

export const TableElementBase = css`
    padding: 10px 15px;
    background: ${props => (props.background ? props.background : props.theme.main.boxBackground)};
`;

export const TableBase = css`
    text-align: left;
    width: 100%;
    margin-bottom: 30px;
    color: ${props => props.theme.main.color};
    border-collapse: separate;
    border-spacing: 0 0.3rem;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const TrBase = css`
    opacity: ${props => (props.opacity ? props.opacity : 1)};
    border-radius: ${props => props.theme.main.borderRadius};
    min-height: 50px;

    td:first-child,
    th:first-child {
        border-radius: ${props => props.theme.main.borderRadius} 0 0 ${props => props.theme.main.borderRadius};
    }

    td:last-child,
    th:last-child {
        border-radius: 0 ${props => props.theme.main.borderRadius} ${props => props.theme.main.borderRadius} 0;
        text-align: right;
        position: sticky;
        right: 0px;
        border-left: 1px;
        padding: 10px 15px;
    }
`;

const TableStyled = styled.table`
    ${TableBase}

    .iconWrap {
        box-shadow: ${p => (p.overflowed ? `-5px 0 8px -5px ${p.theme.rowComponent.actionShadow}` : 'none')};
    }
`;

const ResponsiveTable = styled.div`
    overflow: auto;
    margin-bottom: 15px;

    td,
    th {
        white-space: nowrap;
    }
`;

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            overflowed: false
        };

        this.responsiveTable = React.createRef();
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.handleScroll();
        }, 200);

        window.addEventListener('resize', debounce(this.handleScroll));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleScroll);
    }

    handleScroll() {
        // console.log(e);
        let overflowed = false;
        const elem = this.responsiveTable.current;

        console.log(elem.offsetWidth, elem.scrollWidth, elem.scrollLeft);

        if (elem.offsetWidth < elem.scrollWidth && elem.offsetWidth + elem.scrollLeft < elem.scrollWidth) {
            overflowed = true;
        }

        this.setState(() => ({ overflowed }));
    }

    render() {
        const { children, paginate, totalRecords, page, type } = this.props;
        const { overflowed } = this.state;

        return (
            <>
                <ResponsiveTable onScroll={this.handleScroll} ref={this.responsiveTable}>
                    <TableStyled overflowed={overflowed}>{children}</TableStyled>
                </ResponsiveTable>
                <Pagination paginate={paginate} page={page} totalRecords={totalRecords} type={type} />
            </>
        );
    }
}

export default Table;
