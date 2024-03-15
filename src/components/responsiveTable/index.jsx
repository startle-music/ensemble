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
    padding: 0 2rem;

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
`;

export const Cell = styled.div`
    display: flex;
    flex: ${({ collapse }) => (collapse ? '0' : '1')};
    padding: 0.5rem;
    align-items: center;
    border-bottom: ${props => (props.border ? `1px solid ${props.theme.table.header.border}` : 'none')};
`;

export default function ResponsiveTable({ data }) {
    const { headings } = data;
    const { rows } = data;

    return (
        <ResponsiveTableWrap>
            <Row border>
                <Heading collapse>
                    <Checkbox />
                </Heading>
                {headings.map(heading => (
                    <Heading key={heading}>
                        <Text>{heading}</Text>
                    </Heading>
                ))}
            </Row>
            {rows.map(row => (
                <Row key={row.name}>
                    <Cell collapse>
                        <Checkbox />
                    </Cell>
                    {Object.keys(row).map(key => (
                        <Cell key={key} border>
                            {key !== 'actions' ? <Text>{row[key]}</Text> : row[key]}
                        </Cell>
                    ))}
                </Row>
            ))}
        </ResponsiveTableWrap>
    );
}
