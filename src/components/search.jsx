import React from 'react'

const Search = ({searchTerm,setSearchTerm}) => {
  return (
    <div className='search'>
      <div >
        <img src="public/search.png" alt="search"  />
        <input type="text"
          placeholder='Type to search for the movies'
          value={searchTerm}
          onClick={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Search
