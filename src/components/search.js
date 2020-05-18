import React, {useEffect, useRef} from 'react'

export function Search({searchValue, setSearchValue}){

    

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus()
    },[]);

    function handleChange(e){
        setSearchValue(e.target.value);
    }

    return (        
        <input 
        ref={inputRef}
        type="text" placeholder="Type a name..." 
        value={searchValue}
        onChange={handleChange}/>       
        
    );
}