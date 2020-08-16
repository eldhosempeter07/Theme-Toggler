import React, { createContext,useState } from 'react'
import {v1 as uuidv1} from 'uuid'
export const BookContext = createContext()

const BookContextProvider=(props)=> {
    const [books, setBooks] = useState([
        {title:'Game Of Throne',id:1},
        {title:'Harry Potter',id:2},
        {title:'Mein Kamf',id:3}
    ]);
    //const addBooks = (title) => {
     //   setBooks([...books,{title, id: uuidv1() }])
    //}
        
    return (
            <BookContext.Provider value={{books}}>
                {props.children}
            </BookContext.Provider>      
    );
}

export default BookContextProvider
