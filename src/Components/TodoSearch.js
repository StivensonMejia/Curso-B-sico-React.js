import React, { useContext } from "react";
import {TodoContext} from "../App/Context";

function TodoSearch() {
    const {
        searchValue, 
        setSearchValue,
    } = useContext(TodoContext);
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