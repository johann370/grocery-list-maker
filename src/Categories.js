import React, { useEffect, useState } from 'react'
import Category from './Category'

const Categories = ({ categoriesDict, deleteItem, deleteCategory }) => {

    const [renderCategories, setRenderCategories] = useState(Object.keys(categoriesDict).map((category) => <Category key={category.toString()} categoryId={category.toString()} name={category} deleteCategory={deleteCategory} itemsList={categoriesDict[category.toString()]} deleteItem={deleteItem} />));

    useEffect(() => {
        setRenderCategories(Object.keys(categoriesDict).map((category) => <Category key={category.toString()} categoryId={category.toString()} name={category} deleteCategory={deleteCategory} categoriesDict={categoriesDict} deleteItem={deleteItem} />));
    }, [categoriesDict]);

    return (
        <div id='categories'>
            {renderCategories}
        </div>
    )
}

export default Categories