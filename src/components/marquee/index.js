import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

/**
 *  Usage Example
 * ===============================
 *
 * @description Marquess uses a few params as arguments. All are
 * optional and have defaults as seen before in `defaults`.
 *
 * @param content String `content` for marquee
 * @param onHover Bool `true` or `false` value for if hover alters the behaviour
 * @param hoverEffect String if the effect for on hover is `paused` or `running`
 * @param loop Bool `true` or `false` value for if animation loops round @todo
 * @param speed Number numeric `value` for the speed of marquee scroll
 *
 * @example Using JSX with props to set.
 * <Marquess
 *    content={content}
 *    onHover={onHover}
 *    hoverEffect={hoverEffect}
 *    loop={loop}
 *    speed={speed}
 * />
 *
 */

const defaults = {
    content: '',
    onHover: true,
    hoverEffect: 'paused',
    loop: false,
    speed: 1,
    shouldScroll: false,
    isAnimating: false
};

const scroll = keyframes`
    0%   { 
        transform: translate(0, 0); 
    }
    100% { 
        transform: translate(-50%, 0); 
    }
`;
const Wrap = styled.div`
    display: block;
    width: 100%;
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
`;
const Marquee = styled.span`
    display: inline-block;
    text-indent: 0;
    animation: ${scroll} ${props => `${props.time}s`} linear infinite;
    animation-play-state: ${props => props.animate};

    /* &:hover {
        animation-play-state: ${props => props.hoverPlaystate};
    } */
`;

const MainContent = styled.span``;

const Dupe = styled.span`
    padding-left: 15px;
`;

const Temp = styled.div`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

class Marquess extends Component {
    constructor(props) {
        super(props);

        this.state = { ...defaults, ...props };

        this.handleHover = this.handleHover.bind(this);
        this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
        this.needsToScroll = this.needsToScroll.bind(this);
    }

    componentDidMount() {
        // window.addEventListener('resize', this.needsToScroll);
        // this.needsToScroll();
    }

    componentWillUnmount() {
        // window.removeEventListener('resize', this.needsToScroll);
    }

    /**
     * Checks refs to see if inner element is bigger than parent
     */
    needsToScroll() {
        const { wrap, marquee } = this;
        const { isAnimating } = this.state;

        let shouldScroll = false;
        let animate = true;

        if (wrap && marquee) {
            const wWidth = wrap.getBoundingClientRect().width;
            const mWidth = marquee.getBoundingClientRect().width;

            if (mWidth > wWidth) {
                shouldScroll = true;
            }
        }

        console.log(`is anim ${isAnimating}`);

        if (!shouldScroll) {
            animate = false;
        }

        this.setState(() => ({
            shouldScroll,
            isAnimating: animate
        }));
    }

    handleHover() {
        this.needsToScroll(true);
    }

    handleAnimationEnd() {
        // console.log('end');
        this.setState(() => ({ isAnimating: false }));
    }

    render() {
        const { speed, hoverEffect, onHover, loop, isAnimating, shouldScroll } = this.state;
        const { content, className } = this.props;
        const time = Math.round(90 * (1 / speed));
        let playstate = 'running';
        let hoverPlaystate = 'running';
        let animate = 'paused';

        if (hoverEffect === 'paused') {
            playstate = 'paused';
            hoverPlaystate = 'paused';
            if (onHover === true) {
                hoverPlaystate = 'running';
            }
        } else if (onHover === true) {
            hoverPlaystate = 'paused';
        }

        if (isAnimating) {
            animate = 'running';
        }

        // console.log(animate);

        /* if (!shouldScroll) {
            playstate = 'paused';
            hoverPlaystate = 'paused';
            animate = 'paused';
        } */

        /**
         * Temporary Launch change
         */

        return (
            <Wrap ref={wrap => (this.wrap = wrap)} className={className}>
                <Temp>
                    <MainContent>{content}</MainContent>
                </Temp>
            </Wrap>
        );

        return (
            <Wrap ref={wrap => (this.wrap = wrap)} className={className} onMouseEnter={this.handleHover}>
                <Marquee
                    ref={marquee => (this.marquee = marquee)}
                    loop={loop}
                    time={time}
                    animate={animate}
                    playstate={playstate}
                    hoverPlaystate={hoverPlaystate}
                    onAnimationIteration={this.handleAnimationEnd}
                >
                    <MainContent>{content}</MainContent>
                    {shouldScroll ? <Dupe>{content}</Dupe> : null}
                </Marquee>
            </Wrap>
        );
    }
}

export default Marquess;
