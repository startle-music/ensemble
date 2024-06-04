import React from 'react';

import styled from 'styled-components';

import Checkbox from '../form/fields/checkInput';
import Text from '../text';
import Heading from '../headings';

export const ResponsiveTableWrap = styled.div`
    font-family: ${props => props.theme.main.fontFamily};
    color: ${props => props.theme.main.color};

    @media (min-width: ${p => p.theme.layout.breakpoints.md}) {
        display: table;
        width: 100%;
    }
`;

const CellText = styled(Text)`
    display: inline-block;
    margin-left: 0.5rem;

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

    &.tableHeader {
        display: none;
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
        display: table-row;

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

    &.actions {
        display: flex;
        justify-content: 'flex-start';
    }

    &:first-child {
        display: flex;
        flex-grow: 0;
        overflow: visible;
    }

    @media (min-width: ${p => p.theme.layout.breakpoints.md}) {
        //display: flex;
        border-bottom: ${props => (props.border ? `1px solid ${props.theme.table.header.border}` : 'none')};
        justify-content: ${({ justify }) => justify || 'flex-start'};
        display: table-cell;

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

export default function ResponsiveTable({ data, rowPadding = null }) {
    const { headings } = data;
    const { rows } = data;

    return (
        <ResponsiveTableWrap>
            <Row border rowPadding={rowPadding} className="tableHeader">
                <TableHeading>
                    <Checkbox margin="0px" />
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
                        <Checkbox margin="0px" />
                    </Cell>
                    {Object.keys(row).map((key, index2) => (
                        <Cell
                            key={`${key}-${index}-${index2}`}
                            border
                            justify={key === 'actions' ? 'flex-end' : 'flex-start'}
                            className={key === 'actions' ? 'actions' : null}
                            columns={headings.length}
                        >
                            <Heading className="responsiveHeading">{headings[index]}</Heading>
                            {key !== 'actions' ? <CellText>{row[key]}</CellText> : row[key]}
                        </Cell>
                    ))}
                </Row>
            ))}
        </ResponsiveTableWrap>
    );
}
