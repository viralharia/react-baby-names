import React, {Fragment} from 'react';
import {NameList} from './name-list';

export function ShortList({names, shortList, setShortList}) {

    const shortListedNames = names.filter(entry => shortList.includes(entry.id));

    function removeShortList(id){
        setShortList(shortList.filter(item => item !== id));
    }

    const hasNames = shortListedNames.length > 0;

    return (

        <div className="favourites">
            <h4>{hasNames ? "Your shortlist" : "Click on a name to shortlist"}</h4>
            {hasNames && 
                <Fragment>
                    <NameList 
                        namesList={shortListedNames}
                        onItemClick={removeShortList}
                    />
                    <hr/>
                </Fragment>
                
            }
            
        </div>
        
        
    );
}