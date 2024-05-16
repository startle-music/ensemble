import React from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Text from '../text';
import theme from '../../style/theme';

const ActionPanelStyled = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid ${theme.form.input.border};
    width: 100%;
    padding: 2rem;
    align-items: center;

    @media (min-width: ${({ collapse = 768 }) => `${collapse}px`}) {
        justify-content: space-around;
        flex-direction: column;
        aspect-ratio: 16/9;
    }
`;

const Icon = styled(FontAwesomeIcon)`
    width: 2rem;
    height: 2rem;

    @media (min-width: ${({ collapse = 768 }) => `${collapse}px`}) {
        margin-bottom: 1rem;
        width: 3rem;
        height: 3rem;
    }
`;

const Title = styled(Text)`
    @media (min-width: ${({ collapse = 768 }) => `${collapse}px`}) {
        margin-bottom: 1rem;
    }
`;

/**
 *
 * @param {string} icon
 * @returns
 */
export default function ActionPanel({ icon, title = '', component = null, className, collapse, ...rest }) {
    return (
        <ActionPanelStyled className={className} collapse={collapse} {...rest}>
            <Icon icon={icon} color={theme.form.input.border} collapse={collapse} />
            <Title type="heading" collapse={collapse}>
                {title}
            </Title>
            {component}
        </ActionPanelStyled>
    );
}
