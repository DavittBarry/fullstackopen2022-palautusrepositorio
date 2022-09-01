import React from 'react'

const Search = ({ newSearch, handleInputChange }) => {
    return (
        <div>Search by name:<input value={newSearch} onChange={handleInputChange}/>
        </div>
    );
};

export default Search