import React from "react";

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState('');
    console.log(searchValue);
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