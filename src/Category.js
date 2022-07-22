import React, { useEffect, useState } from 'react'
import Item from './Item'

const Category = ({ name, categoryId, deleteCategory, categoriesDict, deleteItem }) => {
    const [renderItems, setRenderItems] = useState();

    useEffect(() => {
        if (!categoriesDict) {
            return;
        }
        if (categoriesDict[categoryId].length <= 0) {
            deleteCategory(categoryId);
        }
        setRenderItems(categoriesDict[categoryId].map((item) => <Item key={item.toString()} itemId={item.toString()} name={item.toString()} deleteItem={deleteItem} itemCategory={categoryId} />));
    }, [categoriesDict]);


    return (
        <div className='category'>
            <h1 className='category-name'>{name}</h1>
            {renderItems}
        </div>
    )
}

export default Category