import React from 'react';

import styled from 'styled-components';

const SearchInput = styled.input `
    border-radius: 4px;
`

function Search() {
    return (
        <form role="search" name="searchbox" className="search-container">
            <SearchInput placeholder="Search" type="text"/>
        </form>
    );
}

export default Search;