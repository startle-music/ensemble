import React from 'react';
import styled from 'styled-components';

import ActionPanel from '../actionPanel';

const DroppableActionPanelStyled = styled(ActionPanel)`
    background: ${props => props.theme.actionPanel.background};
    border: 2px dashed ${props => props.theme.actionPanel.border};
`;

export default function DroppableActionPanel({ icon, title = '', component = null }) {
    return <DroppableActionPanelStyled {...{ icon, title, component }} />;
}
