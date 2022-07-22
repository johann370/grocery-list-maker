import React from 'react'

const SearchItem = ({ itemName, itemCategory, addItem }) => {
    return (
        <div className='search-item' onClick={() => addItem(itemName.toString(), itemCategory.toString())} >
            <p className='search-item-name'>{itemName}</p>
            <p className='search-item-category'>{itemCategory}</p>
        </div>
    )
}

export default SearchItem