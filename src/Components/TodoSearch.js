import React from "react";

function TodoSearch({searchValue, setSearchValue}) {
    return (
        <input 
            placeholder="Search..." 
            className='todoSearchBar'
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value)
            }}
        />
    );
}

export {TodoSearch};