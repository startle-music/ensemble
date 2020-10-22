import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../../button';

const StyledForm = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
`;

class SearchBar extends Component {
    render() {
        const { config, searchTable, product } = this.props;
        console.log(searchTable);
        return (
            <StyledForm className="searchtable">
                <form onSubmit={e => searchTable(e, config)} method="post" action="">
                    <input type="text" placeholder="search" name="keyword" id="keyword" size="20" />{' '}
                    <Button type="submit" product={product}>
                        Go
                    </Button>
                </form>
            </StyledForm>
        );
    }
}

// Connect container component to store
export default SearchBar;

// export default DigitalSignagePlaylists
