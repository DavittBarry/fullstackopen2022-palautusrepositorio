const Number = ({ newNumber, handleNumberChange }) => {
    return (
        <div>
            Number:<input 
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
        </div>
    );
};

export default Number; 