import React, { useEffect, useState } from 'react';

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
        colour: ${props => props.theme.main.color};
    }
`;

export default function DragDropList({ children }) {
    const [orderedChildren, setOrderedChildren] = useState(children);
    const [draggedItemId, setDraggedItemId] = useState(null);

    function updateParentList(reorderedChildren) {
        // This function should be implemented according to your state management
        setOrderedChildren(reorderedChildren.map(child => React.cloneElement(child)));
    }

    const handleDragStart = e => {
        // Directly set the ID of the dragged item into state
        console.log('drag start', e.currentTarget.id);
        setDraggedItemId(e.currentTarget.id);
    };

    const handleDragOver = e => {
        e.preventDefault(); // Necessary to allow dropping
    };

    const handleDrop = e => {
        e.preventDefault();
        const targetId = e.currentTarget.id;

        console.log('draggedItemId', draggedItemId);

        if (draggedItemId === targetId) {
            setDraggedItemId(null); // Reset on drop to self
            return;
        }

        const draggedItemIndex = React.Children.toArray(orderedChildren).findIndex(
            child => child.props.id === draggedItemId
        );
        const targetItemIndex = React.Children.toArray(orderedChildren).findIndex(child => child.props.id === targetId);

        console.log('Dropped on:', e.currentTarget.id); // Check drop target
        console.log('Dragged item ID:', draggedItemId); // Verify dragged item ID

        if (draggedItemIndex < 0 || targetItemIndex < 0) {
            console.error('Invalid indices', draggedItemIndex, targetItemIndex);
            return; // Exit if indices are invalid
        }

        const reorderedChildren = React.Children.toArray(children);
        const [reorderedItem] = reorderedChildren.splice(draggedItemIndex, 1);
        reorderedChildren.splice(targetItemIndex, 0, reorderedItem);

        updateParentList(reorderedChildren); // Assuming updateList updates the state in the parent component
        setDraggedItemId(null); // Reset the dragged item ID state
    };

    useEffect(() => {
        // set initial children with an id prop
        const initialChildren = React.Children.map(children, (child, index) =>
            React.cloneElement(child, {
                id: `draggable-item-${index}`,
                draggable: 'true',
                onDragStart: handleDragStart,
                onDragOver: handleDragOver,
                onDrop: handleDrop
            })
        );

        setOrderedChildren(initialChildren);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children]);

    console.log(2, React.Children.toArray(orderedChildren));

    return <DraggableScrollableList>{orderedChildren}</DraggableScrollableList>;
}
