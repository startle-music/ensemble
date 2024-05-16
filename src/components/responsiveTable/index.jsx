import React from 'react';

import styled from 'styled-components';

import Checkbox from '../form/fields/checkInput';
import Text from '../text';

export const ResponsiveTableWrap = styled.div`
    font-family: ${props => props.theme.main.fontFamily};
    color: ${props => props.theme.main.color};
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0.5rem 0;
    justify-content: space-between;
    align-items: stretch;
    border-bottom: ${props => (props.border ? `1px solid ${props.theme.table.header.border}` : 'none')};
    padding: ${p => (p.rowPadding ? p.rowPadding : `0 ${p.theme.layout.padding.horizontal}`)};

    &:last-child > div {
        border-bottom: none;
    }
`;

export const Heading = styled.div`
    display: flex;
    flex: ${({ collapse }) => (collapse ? '0' : '1')};
    padding: 0.5rem;
    font-weight: bold;
    border-bottom: ${props => (props.border ? `1px solid ${props.theme.table.header.border}` : 'none')};
    align-items: center;
    width: ${props => (props.columns ? `calc(100% / ${props.columns})` : 'auto')};
    flex-grow: 1;
    overflow: hidden;

    &:first-child {
        flex-grow: 0;
    }
`;

export const Cell = styled.div`
    display: flex;
    flex: ${({ collapse }) => (collapse ? '0' : '1')};
    padding: 0.5rem;
    align-items: center;
    border-bottom: ${props => (props.border ? `1px solid ${props.theme.table.header.border}` : 'none')};
    justify-content: ${({ justify }) => justify || 'flex-start'};
    width: ${props => (props.columns ? `calc(100% - 50px / ${props.columns})` : 'auto')};
    flex-grow: 1;
    overflow: hidden;

    &:first-child {
        flex-grow: 0;
    }
`;

export default function ResponsiveTable({ data, rowPadding = null }) {
    const { headings } = data;
    const { rows } = data;

    return (
        <ResponsiveTableWrap>
            <Row border rowPadding={rowPadding}>
                <Heading collapse>
                    <Checkbox margin="0px" />
                </Heading>
                {headings.map(heading => (
                    <Heading key={heading} columns={headings.length}>
                        <Text>{heading}</Text>
                    </Heading>
                ))}
            </Row>
            {rows.map(row => (
                <Row key={row.name} rowPadding={rowPadding}>
                    <Cell collapse>
                        <Checkbox margin="0px" />
                    </Cell>
                    {Object.keys(row).map(key => (
                        <Cell
                            key={key}
                            border
                            justify={key === 'actions' ? 'flex-end' : 'flex-start'}
                            columns={headings.length}
                        >
                            {key !== 'actions' ? <Text>{row[key]}</Text> : row[key]}
                        </Cell>
                    ))}
                </Row>
            ))}
        </ResponsiveTableWrap>
    );
}
