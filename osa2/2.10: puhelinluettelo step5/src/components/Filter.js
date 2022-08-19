const Filter = ({ newFilter, filterInput }) => {
    return (
        <div>
            Search by name:<input 
                                value={newFilter}
                                onChange={filterInput} 
                            />
        </div>
    );
};

export default Filter; 