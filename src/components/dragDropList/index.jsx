import React, { useEffect, useState, useRef } from 'react';

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

const DraggableItem = styled.div`
    cursor: grab;
`;

export default function DragDropList({ setDataOrder = () => {}, children, ...rest }) {
    const [order, setOrder] = useState(React.Children.toArray(children));
    const [localDataOrder, setLocalDataOrder] = useState([]);
    const dragItem = useRef();
    const dragOverItem = useRef();

    useEffect(() => {
        setOrder(React.Children.toArray(children));
    }, [children]);

    const handleDragStart = position => {
        dragItem.current = position;
    };

    const handleDragEnter = position => {
        dragOverItem.current = position;
    };

    const handleDragOver = e => {
        e.preventDefault();
        const draggedOverIndex = dragOverItem.current;

        if (draggedOverIndex === undefined) return;

        const updatedOrder = [...order];
        const draggedItemContent = updatedOrder[dragItem.current];
        updatedOrder.splice(dragItem.current, 1);
        updatedOrder.splice(draggedOverIndex, 0, draggedItemContent);
        dragItem.current = draggedOverIndex;

        // keep track of index changes in local state, so we can update the parent state when the drop is complete
        // format is [oldIndex, newIndex]
        const updatedLocalDataOrder = [...localDataOrder];
        updatedLocalDataOrder.push([dragItem.current, draggedOverIndex]);
        setLocalDataOrder(updatedLocalDataOrder);

        setOrder(updatedOrder);
    };

    const handleDrop = () => {
        dragItem.current = null;
        dragOverItem.current = null;
        console.log('order', order);
        console.log('localDataOrder', localDataOrder);
        setDataOrder(localDataOrder);
    };

    return (
        <DraggableScrollableList {...rest}>
            {order.map((child, index) => (
                <DraggableItem
                    key={index}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragEnter={() => handleDragEnter(index)}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    {child}
                </DraggableItem>
            ))}
        </DraggableScrollableList>
    );
}
