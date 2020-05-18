import React from 'react';
import {NameList} from './name-list';

export function NamePicker({names, searchValue, shortList, setShortList }){

    const filteredNames = names
        .filter(entry => {
            return entry.name.toLowerCase().includes(searchValue.toLowerCase())
        })
        .filter(entry => !shortList.includes(entry.id));

    function handleNameClick(id){
        setShortList([...shortList, id]);
    }

    return (
        <NameList namesList={filteredNames}
        onItemClick={handleNameClick}/>
        
    );
}