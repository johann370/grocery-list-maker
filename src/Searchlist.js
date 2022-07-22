import React from 'react'
import SearchItem from './SearchItem'

const Searchlist = ({ itemsList, addItem }) => {
    const renderItems = itemsList.map(item => <SearchItem key={item.toString()} itemName={item.toString()} itemCategory='category' addItem={addItem} />)

    return (
        <div id='searchlist'>
            {renderItems.length > 0 ? renderItems : <p>Type to search...</p>}
        </div>
    )
}

export default Searchlist