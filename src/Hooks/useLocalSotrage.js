import React from "react";

function useLocalSotrage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem('TODOS_V1');
    let parsedItem;
  
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
    
    const [item, setItem] = React.useState(parsedItem);
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    };
  
    return [item, saveItem];
}

export {useLocalSotrage};