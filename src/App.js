import React, {Fragment, useState} from 'react';
import {NamePicker} from './components/name-picker';
import {Search} from  './components/search';
import {ShortList} from './components/shortlist';
import {ResetSearch} from './components/reset-search';


function App({names}) {
  const [searchValue, setSearchValue] = useState("");
  const [shortList, setShortList] = useState([]);

  return (
    <Fragment>
      <h1>Baby-Name Picker</h1>
      <header>
        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
      </header>      

      <main>
        <ShortList names = {names} 
          shortList = {shortList} 
          setShortList={setShortList} 
        />
        
        <NamePicker names = {names} searchValue={searchValue} 
          shortList = {shortList}
          setShortList = {setShortList}
        />

        <ResetSearch searchValue= {searchValue}
          setSearchValue = {setSearchValue}
        />
      </main>
      
      
    </Fragment>
  );
}

export default App;


