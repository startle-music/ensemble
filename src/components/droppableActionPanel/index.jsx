import React, { useState } from 'react';
import styled from 'styled-components';

import ActionPanel from '../actionPanel';

const DroppableActionPanelStyled = styled(ActionPanel)`
    background: ${props =>
        props.over ? props.theme.actionPanel.over.background : props.theme.actionPanel.base.background};
        border: 2px dashed ${props =>
            props.over ? props.theme.actionPanel.over.border : props.theme.actionPanel.base.border};
    position: relative;
    /* background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='${props =>
        props.over
            ? props.theme.actionPanel.over.border
            : props.theme.actionPanel.base
                  .border}' stroke-width='4' stroke-dasharray='%2c 14' stroke-dashoffset='3' stroke-linecap='square'/%3e%3c/svg%3e"); */

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

        const { files } = e.dataTransfer;
        // console.log(file);

        // Call the dropHandler with the dropped file
        dropHandler(files);
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
