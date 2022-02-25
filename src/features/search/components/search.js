import React from 'react';

import styled from 'styled-components';

const SearchInput = styled.input `
    border-radius: 4px;
`

function Search() {
    return (
        <form id="search-form" role="search" className="search-form">
            <SearchInput id="search-input" className="search-input" name="search" placeholder="Search" type="search"/>
        </form>
    );
}

export default Search;