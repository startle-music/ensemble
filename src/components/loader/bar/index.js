import React from 'react';
import styled from 'styled-components';

const Loader = styled.div`
    position: relative;
    display: none;
    z-index: 10;
    width: 100%;

    &.active {
        display: block;
    }

    .loader {
        display: block;
        position: relative;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 4px;
        z-index: 12;
        background: rgba(0, 0, 0, 0.1);

        &.fade {
            display: block;
            -webkit-animation: fadeOut 1s;
            animation: fadeOut 1s;
            animation-fill-mode: forwards;
        }
    }

    @-webkit-keyframes fadeOut {
        0% {
            opacity: 1;
        }
        99% {
            opacity: 0.01;
            width: 100%;
            height: 100%;
        }
        100% {
            opacity: 0;
            width: 0;
            height: 0;
        }
    }
    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        99% {
            opacity: 0.01;
            width: 100%;
            height: 100%;
        }
        100% {
            opacity: 0;
            width: 0;
            height: 0;
        }
    }
`;
const Bar = styled.div`
    display: block;
    position: relative;
    width: ${props => `${props.percent}%` || '0%'};
    height: 100%;
    background: rgb(0, 212, 1);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    transition: width 0.5s ease-in-out;
`;
const Message = styled.div`
    display: block;
    height: auto;
    overflow: hidden;
    transform: scaleY(0);
    transform-origin: top;
    color: transparent;
    transition: color 0.2s linear;
    background: rgb(18, 148, 231);

    &.active {
        padding: 0.7rem 1.4rem;
        padding-top: calc(0.7rem + 4px);
        margin-top: -4px;
        color: inherit;
        transform: scale(1);

        .status-success & {
            color: rgb(255, 255, 255);
            background: rgb(0, 212, 1);
        }
        .status-error & {
            color: rgb(255, 255, 255);
            background: rgb(255, 0, 58);
        }
        .status-notice & {
            color: rgb(255, 255, 255);
            background: rgb(245, 166, 35);
        }
    }
`;

class LoaderBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: props.progress || 0
        };
    }

    setTimeout() {
        const { message, active } = this.props;
        this.timer = setInterval(() => {
            if (message === '' && active === true) {
                const { progress } = this.state;
                if (progress < 94) {
                    const update = Math.random() * 3;
                    this.setState({ progress: Math.round(progress + update) });
                }
            }
        }, 477);
    }

    clearTimeout() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = 0;
        }
    }

    componentDidMount() {
        this.setTimeout();
    }

    componentWillUnmount() {
        this.clearTimeout();
    }

    /** React would like us to be "Lifting State Up" here
     *     -  https://reactjs.org/docs/lifting-state-up.html
     *  For now, they can suck it
     * */
    componentWillReceiveProps(newProps) {
        const { progress } = this.props;
        if (newProps.progress && newProps.progress !== progress) {
            this.setState({
                progress: newProps.progress
            });
        }
    }

    renderBar() {
        let className = 'loader';
        const { message } = this.props;
        const { progress } = this.state;
        if (message !== '') {
            className += ' fade';
        }
        return (
            <div className={className}>
                <Bar percent={progress} />
            </div>
        );
    }

    renderMessage() {
        const { message } = this.props;

        if (message === '') {
            return <Message />;
        }
        return <Message className="active">{message}</Message>;
    }

    render() {
        const { visible, status } = this.props;
        let className = `status-${status}`;

        if (visible === true) {
            className += ' active';
        }
        return (
            <Loader className={className}>
                {this.renderBar()}
                {this.renderMessage()}
            </Loader>
        );
    }
}

export default LoaderBar;
