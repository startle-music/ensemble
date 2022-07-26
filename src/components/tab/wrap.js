import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../style/theme';

const Wrap = styled.div`
    display: block;
    position: relative;
`

const TabWrap = ({
    children,
    ...rest
}) => {
    const {props:childrenA} = children;
    const {children:childrenB} = childrenA;
    
    if(childrenB.length !== 2 || !childrenB[0] || !childrenB[1]) {
        return (
            <Wrap>
                <p>There are issues with your children</p>
            </Wrap>
        );
    }

    function switchContent(evnt) {
        const target = evnt.target.closest('a[id]');

        if (target) {
            const getSiblings = n => [...n.parentElement.children].filter(c=>c!=n)
            const targetSiblings = getSiblings(target);
            targetSiblings.forEach((sibling) => sibling.classList.remove('active'));
            target.classList.add('active');

            const matches = evnt.target.closest('.tabbed-content').querySelectorAll('div#'+target.id);

            if (matches && matches[0]) {
                const content = matches[0];
                const contentSiblings = getSiblings(content);                
                contentSiblings.forEach((sibling) => sibling.classList.remove('active'));
                content.classList.add('active');
            }
        }
    }

    return (
        <Wrap className={'tabbed-content'} {...rest} onClick={switchContent}>
            { children }
        </Wrap>
    );
}

export default TabWrap;
