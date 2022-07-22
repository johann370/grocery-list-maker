import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Item = ({ name, itemId, deleteItem, itemCategory }) => {
    return (
        <div className='item'>
            <input type='checkbox' className='item-check' />
            <div>
                <p className='item-name'>{name}</p>
                <p className='item-count'>Item count</p>
            </div>
            <FontAwesomeIcon icon={faXmark} className='item-x' onClick={() => deleteItem(itemId, itemCategory)} />
        </div>
    )
}

export default Item