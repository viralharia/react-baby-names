import React from 'react';

export function NameList({namesList, onItemClick}){
    return (
        <ul>
            {
                namesList.map(entry => (
                    <li className={entry.sex} 
                        key={entry.id}
                        onClick={() => onItemClick(entry.id)}>  
                            {entry.name}
                    </li>
                ))
            }
        
        </ul>
    );
}