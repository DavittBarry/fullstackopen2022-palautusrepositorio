const Name = ({ newName, handleInputChange }) => {
    return (
        <div>
            Name:<input 
                    value={newName}
                    onChange={handleInputChange} 
                />
        </div>
    );
};

export default Name; 