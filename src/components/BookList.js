import React, { Component,useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

{/*class BookList extends Component {
    static contextType=ThemeContext
    render() { 
        const{isLightTheme,light,dark}=this.context
        const theme= isLightTheme?light:dark
        return ( 
            <div className='book-list'  style={{color:theme.syntax,background:theme.bg} }>
                <ul>
                    <li style={{background:theme.ui}}>Game of thrones</li>
                    <li style={{background:theme.ui}}>Harry Potter</li>
                    <li style={{background:theme.ui}}>Two States</li>
                </ul>
            </div>
         );
    }
}

export default BookList;

*/}
const BookList = () => {
    //const [title, setTitle] = useState('') 
    //const handleSubmit=(e)=>{
    //    addBooks(title)
    //}

    const{isLightTheme,light,dark}= useContext(ThemeContext)
    const theme= isLightTheme?light:dark
    const{books}=useContext(BookContext);
    return ( 
        <div className='book-list'  style={{color:theme.syntax,background:theme.bg} }>
                <ul>
                    {books.map(book=>{
                        return(
                            <li key={book.id} style={{background:theme.ui}}>{book.title}</li>
                        )
                    })
                    }
                </ul>
               {/* <input type ='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <button>Add Book</button> */}
            </div>
     );
}
 
export default BookList;
