import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../../header';
import Item from '../../item';
import Filters from '../../filters';
import Pagination from '../../../pagination';
import { debounce } from '../../../../../helpers';
import EmptyListDisplay from '../EmptyListDisplay';
import EmptyDisplay from '../../../EmptyDisplay';
import Button from '../../../button';
import ExportIcon from '../../../../icons/export';

import { TableBase } from '../../../table';

const Wrap = styled.div`
    display: block;
`;
const TableFooter = styled.div`
    ${p => (p.csvFileUrl ? 'display: flex' : '')}
    ${p => (p.csvFileUrl ? 'justify-content: space-between' : '')}
    .exportButton {
        justify-content: center;
        display: flex;
        margin: 0.5em 0em;
        svg {
            height: 0.85em;
        }
        max-height: 44px;
        min-width: 219px;
    }
    @media (max-width: 520px) {
        .exportButton {
            width: 100%;
            justify-content: center;
        }
        justify-content: center;
    }
    flex-wrap: wrap-reverse;
`;
const Items = styled.div`
    /* > div:nth-child(odd) {
        background: rgba(255, 255, 255, 0.1);
    } */
`;
const TableWrap = styled.table`
    ${TableBase}
    width: 100%;

    .iconWrap {
        box-shadow: ${p => (p.overflowed ? `-5px 0 8px -5px ${p.theme.rowComponent.actionShadow}` : 'none')};
    }
`;

const ResponsiveTable = styled.div`
    overflow: auto;
    margin-bottom: 15px;
`;

const TableItems = styled.tbody`
    /* tr:nth-child(odd) {
        background: rgba(255, 255, 255, 0.1);
    }
    tr:last-child td:first-child {
        border-bottom-left-radius: 10px;
    }
    tr:last-child td:last-child {
        border-bottom-right-radius: 10px;
    } */

    tr {
        height: 3.2rem;
    }
`;

class ListView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            overflowed: false
        };

        this.responsiveTable = React.createRef();
        this.handleScroll = debounce(this.handleScroll.bind(this));
        this.renderExportButton = this.renderExportButton.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.handleScroll();
        }, 300);

        window.addEventListener('resize', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleScroll);
    }

    renderFilter() {
        const { filterable, filters, filter } = this.props;
        if (filterable === true) {
            return <Filters filterable={filterable} filters={filters} filter={filter} />;
        }
        return null;
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

    renderHeader() {
        const { headers, sort, sortable, sortableColumns, sortColumn, sortDirection, actions, tables } = this.props;
        return (
            <Header
                tables={tables}
                data={headers}
                actions={actions}
                sort={sort}
                sortable={sortable}
                sortColumn={sortColumn}
                sortDirection={sortDirection}
                sortable_columns={sortableColumns}
            />
        );
    }

    renderExportButton() {
        const { csvFileUrl = false, headers, baseData } = this.props;
        if (csvFileUrl) {
            if (csvFileUrl === '') {
                const filteredHeaders = headers.filter(obj => obj.display);
                const csvHeaders = filteredHeaders.map(obj => obj.title);
                const fields = filteredHeaders.map(obj => obj.field);

                const filteredRows = baseData.map(obj => {
                    const filterOneRow = obj.data.filter(obj2 => fields.includes(obj2.label));
                    return filterOneRow.map(obj3 => obj3.value);
                });
                filteredRows.unshift(csvHeaders);

                const csvContent = `data:text/csv;charset=utf-8,${filteredRows.map(e => e.join(',')).join('\n')}`;
                const encodedUri = encodeURI(csvContent);
                return (
                    <Button
                        product="neutral"
                        download="startle.csv"
                        href={encodedUri}
                        type="link"
                        className="exportButton"
                    >
                        <ExportIcon />
                        &nbsp;Download as CSV
                    </Button>
                );
            }
            return (
                <Button product="neutral" target="_blank" href={csvFileUrl} type="link" className="exportButton">
                    <ExportIcon />
                    &nbsp;Download as CSV
                </Button>
            );
        }
    }

    renderItem(item) {
        const { headers, actions, edit, editType, deleteFunction, tables, modalHeader, handleCheckbox } = this.props;
        return (
            <Item
                tables={tables}
                key={`row-item-${item.id}`}
                item={item.data}
                headers={headers}
                id={item.id}
                actions={actions}
                edit={edit}
                editType={editType}
                delete={deleteFunction}
                modalHeader={modalHeader}
                handleCheckbox={handleCheckbox}
            />
        );
    }

    renderItems() {
        const { baseData, tables, noDataDisplay } = this.props;
        console.log('List/List renderItems', baseData, tables, noDataDisplay);
        let ListItems = Items;
        if (tables === true) {
            ListItems = TableItems;
        }
        if (typeof baseData === 'object' && baseData.length > 0) {
            return <ListItems>{baseData.map(item => this.renderItem(item))}</ListItems>;
        }
    }

    renderContents() {
        const { overflowed } = this.state;
        const { baseData, tables, noDataDisplay } = this.props;

        if (!tables) {
            return (
                <div>
                    {this.renderHeader()}
                    {this.renderItems()}
                </div>
            );
        }
        if (typeof baseData !== 'object' || baseData.length <= 0) {
            if (typeof noDataDisplay !== 'undefined') {
                return noDataDisplay();
            }
            return (
                <EmptyDisplay
                    Header="There are no results for this search"
                    Message="Modify your search to find results"
                ></EmptyDisplay>
            );
        }
        return (
            <TableWrap overflowed={overflowed}>
                {this.renderHeader()}
                {this.renderItems()}
            </TableWrap>
        );
    }

    render() {
        const { pagination, paginate, totalRecords, page, csvFileUrl } = this.props;
        return (
            <Wrap>
                {this.renderFilter()}
                <ResponsiveTable onScroll={this.handleScroll} ref={this.responsiveTable}>
                    {this.renderContents()}
                </ResponsiveTable>
                <TableFooter csvFileUrl={csvFileUrl}>
                    {this.renderExportButton()}
                    <Pagination paginate={paginate} page={page} totalRecords={totalRecords} type={pagination} />
                </TableFooter>
            </Wrap>
        );
    }
}

export default ListView;
