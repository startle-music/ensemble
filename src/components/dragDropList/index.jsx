import React, { useState } from 'react';

import styled from 'styled-components';

import ScrollableList, { ListItem } from '../scrollableList';

const DraggableScrollableList = styled(ScrollableList)`
    & .placeholder {
        background-color: ${props => props.theme.main.background};
    }
`;

export const DraggableListItem = styled(ListItem)`
    cursor: grab;
    user-select: none;
    &:active {
        cursor: grabbing;
    }
`;

export const DraggableListItemHandle = styled.div`
    cursor: grab;
    user-select: none;
    &:active {
        cursor: grabbing;
    }

    &::before {
        content: '⋮⋮';
    }
`;

export default function DragDropList({ children }) {
    const handleDragStart = e => {
        const { id } = e.currentTarget;
        e.dataTransfer.setData('text/plain', id);
    };

    const handleDragOver = e => {
        e.preventDefault(); // Necessary to allow dropping
    };

    const handleDrop = e => {
        e.preventDefault();
        const draggedItemId = e.dataTransfer.getData('text/plain');
        const targetId = e.currentTarget.id;

        // Prevent dropping on itself
        if (draggedItemId === targetId) return;

        // Find the elements
        const draggedItemIndex = children.findIndex(child => child.key === draggedItemId);
        const targetItemIndex = children.findIndex(child => child.key === targetId);

        // Reorder the children
        const reorderedChildren = React.Children.toArray(children);
        const [reorderedItem] = reorderedChildren.splice(draggedItemIndex, 1);
        reorderedChildren.splice(targetItemIndex, 0, reorderedItem);

        // Update the state or notify the parent component to update the list
        // This part needs to be implemented according to your state management
        updateParentList(reorderedChildren);
    };

    const childrenWithProps = React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
            id: `draggable-item-${index}`,
            draggable: 'true',
            onDragStart: handleDragStart,
            onDragOver: handleDragOver,
            onDrop: handleDrop
        })
    );

    return <DraggableScrollableList>{childrenWithProps}</DraggableScrollableList>;
}
