import React, { useState, useRef, useEffect, useCallback } from 'react';
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

// Container for measuring item heights
const MeasureContainer = styled.div`
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
    itemHeight = null, // Optional, will be used as default if not measuring individual items
    overscan = 5, // Number of extra items to render above and below the visible area
    virtualized = true // Toggle virtualization
}) {
    const listRef = useRef(null);
    const measureRef = useRef(null);
    const itemsRef = useRef({});
    const [scrollTop, setScrollTop] = useState(0);
    const [listHeight, setListHeight] = useState(0);
    const [defaultItemHeight, setDefaultItemHeight] = useState(itemHeight || 40);
    const [itemHeights, setItemHeights] = useState([]);
    const [itemPositions, setItemPositions] = useState([]);
    const [totalListHeight, setTotalListHeight] = useState(0);

    // Initialize and update list dimensions
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

    // Calculate item positions based on their heights
    const calculateItemPositions = useCallback((heights) => {
        const positions = [];
        let currentPosition = 0;
        
        heights.forEach(height => {
            positions.push(currentPosition);
            currentPosition += height;
        });
        
        setItemPositions(positions);
        setTotalListHeight(currentPosition);
    }, []);

    // Measure all children heights
    useEffect(() => {
        if (!virtualized || !children) return;
        
        const childrenArray = React.Children.toArray(children);
        if (childrenArray.length === 0) return;

        // If itemHeight is provided, use it for all items
        if (itemHeight) {
            const heights = Array(childrenArray.length).fill(itemHeight);
            setItemHeights(heights);
            calculateItemPositions(heights);
            return;
        }

        // Wait a bit to ensure refs are attached
        const timeoutId = setTimeout(() => {
            const newHeights = [];
            let allMeasured = true;
            
            childrenArray.forEach((_, index) => {
                const element = itemsRef.current[index];
                if (element) {
                    newHeights[index] = element.getBoundingClientRect().height;
                } else {
                    newHeights[index] = defaultItemHeight;
                    allMeasured = false;
                }
            });
            
            setItemHeights(newHeights);
            calculateItemPositions(newHeights);

            // If we couldn't measure all items, we'll try again with a longer timeout
            if (!allMeasured && measureRef.current) {
                const firstChildHeight = measureRef.current.getBoundingClientRect().height;
                if (firstChildHeight > 0) {
                    setDefaultItemHeight(firstChildHeight);
                }
            }
        }, 50);
        
        return () => clearTimeout(timeoutId);
    }, [children, itemHeight, virtualized, calculateItemPositions, defaultItemHeight]);

    // Find the visible range based on item positions
    const getVisibleRange = useCallback(() => {
        if (itemPositions.length === 0) {
            return { startIndex: 0, endIndex: 0 };
        }
        
        // Binary search to find the first visible item
        let startIndex = 0;
        let endIndex = itemPositions.length - 1;
        
        while (startIndex <= endIndex) {
            const middle = Math.floor((startIndex + endIndex) / 2);
            if (itemPositions[middle] <= scrollTop) {
                if (middle === itemPositions.length - 1 || itemPositions[middle + 1] > scrollTop) {
                    startIndex = middle;
                    break;
                }
                startIndex = middle + 1;
            } else {
                endIndex = middle - 1;
            }
        }
        
        // Find the last visible item
        let visibleEndIndex = startIndex;
        const scrollBottom = scrollTop + listHeight;
        
        while (
            visibleEndIndex < itemPositions.length - 1 && 
            itemPositions[visibleEndIndex + 1] < scrollBottom
        ) {
            visibleEndIndex++;
        }
        
        // Add overscan
        const rangeStartIndex = Math.max(0, startIndex - overscan);
        const rangeEndIndex = Math.min(itemPositions.length - 1, visibleEndIndex + overscan);
        
        return { startIndex: rangeStartIndex, endIndex: rangeEndIndex };
    }, [itemPositions, scrollTop, listHeight, overscan]);

    // Handle scroll events
    const handleScroll = (e) => {
        if (virtualized) {
            setScrollTop(e.target.scrollTop);
        }
    };

    // Only calculate virtualization values when virtualized is true
    let renderedChildren = children;
    
    if (virtualized && React.Children.count(children) > 0) {
        const childrenArray = React.Children.toArray(children);
        const { startIndex, endIndex } = getVisibleRange();
        
        // Get visible children based on calculated range
        const visibleChildren = childrenArray.slice(startIndex, endIndex + 1);
        
        renderedChildren = (
            <>
                {/* Invisible container to measure items */}
                <MeasureContainer ref={measureRef}>
                    {React.Children.map(children, (child, index) => (
                        <div
                            key={`measure-${index}`}
                            ref={el => {
                                itemsRef.current[index] = el;
                            }}
                        >
                            {React.cloneElement(child, {
                                style: { position: 'static', visibility: 'hidden' }
                            })}
                        </div>
                    ))}
                </MeasureContainer>
                
                <VirtualizedContainer style={{ height: totalListHeight + 'px' }}>
                    {visibleChildren.map((child, index) => {
                        const actualIndex = startIndex + index;
                        // Clone the child element (li) and add absolute positioning props
                        return React.cloneElement(child, {
                            key: `item-${actualIndex}`,
                            style: {
                                position: 'absolute',
                                top: itemPositions[actualIndex] + 'px',
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
