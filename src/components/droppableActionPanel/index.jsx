import React, { useState } from 'react';
import styled from 'styled-components';

import ActionPanel from '../actionPanel';

const DroppableActionPanelStyled = styled(ActionPanel)`
    background: ${props => (props.over ? props.theme.actionPanel.background : 'transparent')};
    border: 2px dashed ${props => (props.over ? props.theme.actionPanel.border : props.theme.main.border)};
    position: relative;

    & > form {
        position: absolute;
    }
`;

export default function DroppableActionPanel({ icon, title = '', component = null, dropHandler = () => {} }) {
    const [over, setOver] = useState(false);

    const handleDragOver = e => {
        e.preventDefault();
        setOver(true);
    };

    const handleDragLeave = e => {
        e.preventDefault();
        setOver(false);
    };

    const handleDrop = e => {
        e.preventDefault();
        setOver(false);

        const file = e.dataTransfer.files[0];
        // console.log(file);

        // Call the dropHandler with the dropped file
        dropHandler(file);
    };

    return (
        <DroppableActionPanelStyled
            {...{ icon, title, component, over, dropHandler }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        />
    );
}
