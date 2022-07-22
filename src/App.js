import { useEffect, useState } from "react";
import Categories from "./Categories";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

const App = () => {
  const [categoriesDict, setCategoriesDict] = useState({
    'Fruits': ['Apples', 'Bananas', 'Oranges', 'Mangoes'],
    'Vegetables': ['Broccoli', 'Carrots', 'Onions'],
    'Spices': ['Salt', 'Pepper', 'Garlic Powder'],
  });

  const addItem = (itemName, itemCategory) => {
    if (Object.keys(categoriesDict).includes(itemCategory)) {
      let updatedDict = { ...categoriesDict, [itemCategory]: [...categoriesDict[itemCategory], itemName] };
      setCategoriesDict(updatedDict);
    } else {
      let updatedDict = { ...categoriesDict, [itemCategory]: [itemName] };
      setCategoriesDict(updatedDict);
    }
  }

  const deleteItem = (itemId, itemCategory) => {
    let updatedItems = categoriesDict[itemCategory].filter(item => item.toString() !== itemId);
    setCategoriesDict({ ...categoriesDict, [itemCategory]: updatedItems });
  };

  const deleteCategory = (categoryId) => {
    let updatedDict = { ...categoriesDict }
    delete updatedDict[categoryId];
    setCategoriesDict(updatedDict);
  };

  return (
    <div>
      <Navbar />
      <main>
        <h1>SHOPPING LIST</h1>
        <Searchbar addItem={addItem} />
        <Categories categoriesDict={categoriesDict} deleteItem={deleteItem} deleteCategory={deleteCategory} />
      </main>
    </div>
  )
}

export default App;
