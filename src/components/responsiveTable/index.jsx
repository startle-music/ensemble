import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import Checkbox from '../form/fields/checkInput';
import Text from '../text';
import Heading from '../headings';

export const ResponsiveTableWrap = styled.div`
    font-family: ${props => props.theme.main.fontFamily};
    color: ${props => props.theme.main.color};
    overflow-x: auto;
    display: block;
`;

const Table = styled.div`
    display: table;
    width: 100%;
`;

const CellText = styled(Text)`
    display: inline-block;
    //margin-left: 0.5rem;

    @media (min-width: ${p => p.theme.layout.breakpoints.md}) {
        display: block;
        margin-left: 0;
    }
`;

export const Row = styled.div`
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: stretch;
    padding: ${p =>
        p.rowPadding ? p.rowPadding : `${p.theme.layout.padding.vertical.xs} ${p.theme.layout.padding.horizontal.xs}`};
    border-bottom: ${props => `1px solid ${props.theme.table.header.border}`};
    display: table-row;

    &.tableHeader {
        //display: none;
        display: table-row;
    }

    &:last-child {
        border-bottom: none;

        div {
            border-bottom: none;
        }
    }

    @media (min-width: ${p => p.theme.layout.breakpoints.md}) {
        //display: flex;
        border-bottom: ${props => (props.border ? `1px solid ${props.theme.table.header.border}` : 'none')};
        padding: ${p => (p.rowPadding ? p.rowPadding : 0)};

        &.tableHeader {
            //display: flex;
            display: table-row;
        }
    }
`;

export const TableHeading = styled.div`
    //display: flex;
    flex: ${({ collapse }) => (collapse ? '0' : '1')};
    //padding: 0.5rem;
    padding: ${props => props.theme.layout.padding.vertical.xs} ${props => props.theme.layout.padding.horizontal.xs};
    font-weight: bold;
    border-bottom: ${props => (props.border ? `1px solid ${props.theme.table.header.border}` : 'none')};
    align-items: center;
    //width: ${props => (props.columns ? `calc(100% / ${props.columns})` : 'auto')};
    flex-grow: 1;
    overflow: hidden;
    display: table-cell;
    white-space: nowrap;
    vertical-align: middle;

    &:first-child {
        flex-grow: 0;
        overflow: visible;
    }

    @media (min-width: ${p => p.theme.layout.breakpoints.md}) {
        &:first-child {
            padding-left: ${props => props.theme.layout.padding.horizontal.lg};
        }
        &:last-child {
            padding-right: ${props => props.theme.layout.padding.horizontal.lg};
        }
    }
`;

export const Cell = styled.div`
    display: block;
    flex: ${({ collapse }) => (collapse ? '0' : '1')};
    //padding: 0.5rem;
    padding: ${props => props.theme.layout.padding.vertical.xs} ${props => props.theme.layout.padding.horizontal.xs};
    align-items: center;
    //width: ${props => (props.columns ? `calc(100% - 50px / ${props.columns})` : 'auto')};
    flex-grow: 1;
    overflow: hidden;
    display: table-cell;

    white-space: nowrap;
    vertical-align: middle;

    &.actions {
        display: flex;
        justify-content: 'flex-start';
    }

    &:first-child {
        //display: flex;
        flex-grow: 0;
        overflow: visible;
    }

    @media (min-width: ${p => p.theme.layout.breakpoints.md}) {
        //display: flex;
        border-bottom: ${props => (props.border ? `1px solid ${props.theme.table.header.border}` : 'none')};
        justify-content: ${({ justify }) => justify || 'flex-start'};
        

        &.actions {
            justify-content: ${({ justify }) => justify || 'flex-start'};
        }

        &:first-child {
            padding-left: ${props => props.theme.layout.padding.horizontal.lg};
        }
        &:last-child {
            padding-right: ${props => props.theme.layout.padding.horizontal.lg};
        }
    }

    .responsiveHeading {
        margin-bottom: 0;
        display: inline-block;

        @media (min-width: ${p => p.theme.layout.breakpoints.md}) {
            display: none;
        }
    }
`;

export default function ResponsiveTable({ data, rowPadding = null, getIsChecked = () => {} }) {
    const { headings } = data;
    const { rows } = data;

    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isChecked, setIsChecked] = useState([]);

    useEffect(() => {
        getIsChecked(isChecked);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isChecked]);

    const checkAll = e => {
        setIsCheckAll(!isCheckAll);
        setIsChecked(data.rows.map(row => row.id));
        if (isCheckAll) {
            setIsChecked([]);
        }
    };

    function handleSingle(e) {
        const { checked, value } = e.target;

        console.log('checked', checked, 'value', value, isChecked);

        if (checked) {
            if (isChecked.includes(value)) return;
            setIsChecked([...isChecked, parseInt(value)]);
        } else {
            setIsCheckAll(false);
            setIsChecked(isChecked.filter(item => item !== parseInt(value)));
        }
    }

    return (
        <ResponsiveTableWrap>
            <Table>
                <Row border rowPadding={rowPadding} className="tableHeader">
                    <TableHeading>
                        <Checkbox margin="0px" onChange={checkAll} checked={isCheckAll} value="0" />
                    </TableHeading>
                    {headings.map(heading => (
                        <TableHeading key={heading} columns={headings.length}>
                            <Text fontWeight="bold">{heading}</Text>
                        </TableHeading>
                    ))}
                </Row>
                {rows.map((row, index) => (
                    <Row key={`${row.name}-${index}`} rowPadding={rowPadding}>
                        <Cell className="rowCheckbox">
                            <Checkbox
                                margin="0px"
                                checked={isChecked.includes(row.id)}
                                value={row.id}
                                onChange={e => handleSingle(e)}
                            />
                        </Cell>
                        {Object.keys(row).map((key, index2) => {
                            if (key === 'id') {
                                return null;
                            }
                            return (
                                <Cell
                                    key={`${key}-${index}-${index2}`}
                                    border
                                    justify={key === 'actions' ? 'flex-end' : 'flex-start'}
                                    className={key === 'actions' ? 'actions' : null}
                                    columns={headings.length}
                                >
                                    {/* <Heading className="responsiveHeading">{headings[index]}</Heading> */}
                                    {key !== 'actions' ? <CellText>{row[key]}</CellText> : row[key]}
                                </Cell>
                            );
                        })}
                    </Row>
                ))}
            </Table>
        </ResponsiveTableWrap>
    );
}
