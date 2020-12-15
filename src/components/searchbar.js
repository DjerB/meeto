import React from 'react';
import styled from 'styled-components';

import search from '../images/search.svg';

const SearchBar = styled.div`
	background-color: white;
    padding: 0.8% 1.5%;
    border-radius: 11px;
	display: grid;
    grid-template-columns: 5fr 5fr 3fr;
    font-family: 'Montserrat', sans-serif;
    align-items: center;
    padding: 0.6em 0.6em;
    
	.searchBar {
		display: grid;
        grid-template-columns: 1fr 7fr;
        column-gap: 1em;
        img {
            width: 60%;
            left: 40%;
            position: relative;
        }
		input {
			border: none;
			outline: none;
            font-size: 0.8em;
            width: 100%;
		}
    }
    
    .searchButtonContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2.6em;
        cursor: pointer;
        background: #1E3CD1 0% 0% no-repeat padding-box;
        border-radius: 11px;
    }

    .searchButton {
        color: #F9F9F9;
        font-weight: 600;
        font-family: 'Work Sans', sans-serif;

        transition: all 100ms ease-in-out;

        &:hover {
            background: #10258c 0% 0% no-repeat padding-box;
            color: #f3f3f3;
        }
    }
`;

const Search = () => (
    <SearchBar>
        <div className="searchBar">
            <img src={search} alt="search" height="100%" />
            <input
                id="search"
                placeholder="Search for an event..." 
                 
            />
        </div>
        <div className="searchBar">
            <img src={search} alt="search" height="100%" />
            <input
                id="searchMap"
                placeholder="London." 
            />
        </div>
        <div className="searchButtonContainer">
            <span className="searchButton">Search</span>
        </div>
    </SearchBar>
);

export default Search;