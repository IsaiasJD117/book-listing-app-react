import React, {useState} from "react";

const SearchBar = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchQuery, page);
    }
    
    return(
        <form onSubmit={handleSearch}>
            <input
            type="text"
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            placeholder="Search Books..."
            />

            <button type="submit">Search</button>
        </form>
    )
};
export default SearchBar;