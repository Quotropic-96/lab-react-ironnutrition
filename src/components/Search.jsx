function Search({ handleSearchFilter}) {

    const handleChange = (e) => {
        handleSearchFilter(e.target.value);
    }
    return ( 
        <div>
            <input type="text" name="search" onChange={handleChange} placeholder="What are you looking for?" />
        </div>
     );
}

export default Search;