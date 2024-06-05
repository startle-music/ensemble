import React from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Text from '../text';
import theme from '../../style/theme';

const ActionPanelStyled = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid ${p => p.theme.form.input.border};
    width: 100%;
    height: 100%;
    padding: 1rem;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;

    @media (min-width: ${p => p.theme.layout.breakpoints.xs}) {
        flex-wrap: nowrap;
        justify-content: space-between;
        text-align: left;
    }

    @media (min-width: ${p => p.theme.layout.breakpoints.md}) {
        flex-direction: column;
        justify-content: space-around;
        aspect-ratio: 12/9;
        padding: 2rem;
        justify-content: space-between;
        text-align: center;
    }
`;

const Icon = styled(FontAwesomeIcon)`
    width: 2rem;
    height: 2rem;
    margin-bottom: 1rem;

    @media (min-width: ${p => p.theme.layout.breakpoints.xs}) {
        margin-bottom: 0;
    }

    @media (min-width: ${p => p.theme.layout.breakpoints.md}) {
        margin-bottom: 1rem;
        width: 3rem;
        height: 3rem;
    }
`;

const Title = styled(Text)`
    @media (min-width: ${p => p.theme.layout.breakpoints.md}) {
        margin-bottom: 1rem;
    }
`;

/**
 *
 * @param {string} icon
 * @returns
 */
export default function ActionPanel({ icon, title = '', component = null, className, ...rest }) {
    return (
        <ActionPanelStyled className={className} {...rest}>
            <Icon icon={icon} color={theme.form.input.border} />
            <Title type="heading">{title}</Title>
            {component}
        </ActionPanelStyled>
    );
}
