import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const SearchContext = createContext();
const Search = ({children}) => {
    const [auth , setAuth] = useState({
        keyword:"",
        result:[],
    });
  return (
    <SearchContext.Provider value={[auth, setAuth]}>
        {children}
    </SearchContext.Provider>
  )
};
const useSearch = ()=> useContext(SearchContext);

export {useSearch , Search}
