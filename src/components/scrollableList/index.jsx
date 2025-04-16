import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const ScrollableListStyled = styled.ul`
    overflow-y: auto;
    max-height: 50vh;
    padding: ${props =>
        props.padding
            ? props.padding
            : `${props.theme.layout.padding.vertical.sm} ${props.theme.layout.padding.horizontal.sm}`};
    margin: ${props => (props.margin ? props.margin : `0 0 ${props.theme.layout.padding.vertical.lg}`)};
    border: 1px solid ${props => props.theme.main.border};
    list-style: none;
    background: ${props => (props.background ? props.theme.generalColors.blueWhite : props.theme.mainColors.white)};
    position: relative;
`;

export const ListItem = styled.li`
    font-family: ${props => props.theme.main.font};

    &::before {
        content: '';
        width: 100%;
        height: 1px;
        display: ${props => (props.border ? 'block' : 'none')};
        border-bottom: 1px solid ${props => props.theme.main.border};
    }

    &:first-child {
        &::before {
            display: none;
        }
    }
`;

const VirtualizedContainer = styled.div`
    position: relative;
    width: 100%;
`;

// Invisible element used to measure the first item's height
const MeasureItem = styled.div`
    position: absolute;
    visibility: hidden;
    top: 0;
    left: 0;
    width: 100%;
`;

export default function ScrollableList({ 
    padding = null, 
    margin, 
    children, 
    background,
    itemHeight = null, // Optional, will be calculated if not provided
    overscan = 5, // Number of extra items to render above and below the visible area
    virtualized = true // New prop to toggle virtualization
}) {
    const listRef = useRef(null);
    const measureRef = useRef(null);
    const [scrollTop, setScrollTop] = useState(0);
    const [listHeight, setListHeight] = useState(0);
    const [measuredItemHeight, setMeasuredItemHeight] = useState(itemHeight || 40);

    // Initialize and update list dimensions and measure first item height
    useEffect(() => {
        if (virtualized && listRef.current) {
            const updateHeight = () => {
                setListHeight(listRef.current.clientHeight);
            };
            
            updateHeight();
            window.addEventListener('resize', updateHeight);
            
            return () => {
                window.removeEventListener('resize', updateHeight);
            };
        }
    }, [virtualized]);

    // Measure the first child's height if not explicitly provided
    useEffect(() => {
        if (virtualized && !itemHeight && measureRef.current && children && React.Children.count(children) > 0) {
            const firstChildHeight = measureRef.current.clientHeight;
            if (firstChildHeight > 0) {
                setMeasuredItemHeight(firstChildHeight);
            }
        }
    }, [children, itemHeight, virtualized]);

    // Handle scroll events
    const handleScroll = (e) => {
        if (virtualized) {
            setScrollTop(e.target.scrollTop);
        }
    };

    // Only calculate virtualization values when virtualized is true
    let renderedChildren = children;
    
    if (virtualized && React.Children.count(children) > 0) {
        // Get first child for measurement
        const firstChild = React.Children.toArray(children)[0];
        
        // Calculate which items should be visible
        const childrenArray = React.Children.toArray(children);
        const totalHeight = childrenArray.length * measuredItemHeight;
        const startIndex = Math.max(0, Math.floor(scrollTop / measuredItemHeight) - overscan);
        const endIndex = Math.min(
            childrenArray.length - 1,
            Math.ceil((scrollTop + listHeight) / measuredItemHeight) + overscan
        );

        // Get visible children
        const visibleChildren = childrenArray.slice(startIndex, endIndex + 1);
        
        renderedChildren = (
            <>
                {/* Invisible first item used for measurement */}
                {!itemHeight && firstChild && (
                    <MeasureItem ref={measureRef}>
                        {firstChild}
                    </MeasureItem>
                )}
                <VirtualizedContainer style={{ height: totalHeight + 'px' }}>
                    {visibleChildren.map((child, index) => {
                        // Clone the child element (li) and add absolute positioning props
                        return React.cloneElement(child, {
                            key: startIndex + index,
                            style: {
                                position: 'absolute',
                                top: (startIndex + index) * measuredItemHeight + 'px',
                                width: '100%',
                                ...(child.props.style || {})
                            }
                        });
                    })}
                </VirtualizedContainer>
            </>
        );
    }

    return (
        <ScrollableListStyled 
            ref={listRef}
            padding={padding} 
            margin={margin} 
            background={background}
            onScroll={handleScroll}
        >
            {renderedChildren}
        </ScrollableListStyled>
    );
}
