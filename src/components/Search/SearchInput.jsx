import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";

const SearchInput = ({onSearch}) => {
    const [input, setInput] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        onSearch(input)
    }
  return (
   <form onSubmit={submitHandler}>
<div className='search_input'>
<IoSearch  className='search'/>
<input type="text" placeholder='Search a country...' value={input} onChange={(e)=>setInput(e.target.value)}/>
</div>
   </form>
  )
}

export default SearchInput
