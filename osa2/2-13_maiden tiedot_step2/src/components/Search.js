import React from 'react'

const Search = ({ newSearch, handleInputChange }) => {
    return (
        <div>Search database by country name:<input value={newSearch} onChange={handleInputChange}/>
        </div>
    );
};

export default Search