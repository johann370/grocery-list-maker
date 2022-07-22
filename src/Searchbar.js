import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Searchlist from './Searchlist'

const Searchbar = ({ addItem }) => {
    const [displaySearch, setDisplaySearch] = useState(false);
    const [itemsList, setItemsList] = useState(['Apples', 'Bananas', 'Oranges', 'Grapes', 'Tomato', 'Tomato Paste']);
    const [filteredList, setFilteredList] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const filterSearch = (search) => {
        setFilteredList(itemsList.filter(item => item.toString().toLowerCase().includes(search.toLowerCase())));
    };

    useEffect(() => {
        filterSearch(searchValue);
        if (searchValue === '') {
            setFilteredList([]);
        }
    }, [searchValue]);


    return (
        <div id='searchbar'>
            <div>
                <FontAwesomeIcon icon={faSearch} id='search-icon' />
                <input type='text' id='search' placeholder='Add item' value={searchValue} autoComplete='off' onClick={() => setDisplaySearch(true)} onBlur={() => setDisplaySearch(true)} onChange={(e) => setSearchValue(e.target.value)} />
            </div>
            {displaySearch ? <Searchlist itemsList={filteredList} addItem={addItem} /> : ''}
        </div>
    )
}

export default Searchbar