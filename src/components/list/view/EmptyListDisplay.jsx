import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const OuterDiv = styled.div`
    width: 100%;
    border-radius: 10px;
    height: 50%;
    height: 5em;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const InnerDiv = styled.div``;

class EmptyListDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;
        return (
            <tr>
                <td colSpan="100">
                    <OuterDiv>
                        <InnerDiv>{children}</InnerDiv>
                    </OuterDiv>
                </td>
            </tr>
        );
    }
}

// Connect container component to store
export default EmptyListDisplay;

// export default DigitalSignagePlaylists
