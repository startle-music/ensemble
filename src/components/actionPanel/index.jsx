import react from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Text from '../text';
import theme from '../../style/theme';

const ActionPanelStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    border: 1px solid ${theme.form.input.border};
    width: 100%;
    aspect-ratio: 16/9;
    padding: 2rem;
`;

const Icon = styled(FontAwesomeIcon)`
    width: 2rem;
    height: 2rem;
    margin-bottom: 1rem;
`;

const Title = styled(Text)`
    margin-bottom: 1rem;
`;

/**
 *
 * @param {string} icon
 * @returns
 */
export default function ActionPanel({ icon, title = '', component = null, className }) {
    return (
        <ActionPanelStyled className={className}>
            <Icon icon={icon} color={theme.form.input.border} />
            <Title type="heading">{title}</Title>
            {component}
        </ActionPanelStyled>
    );
}
