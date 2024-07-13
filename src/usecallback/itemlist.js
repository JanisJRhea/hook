import React, { useState, useCallback } from 'react';

const ItemList = () => {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

    const addItem = useCallback(() => {
        setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
    }, [setItems]);

    return (
        <div>
            <h3>Item List</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
        </div>
    );
};

export default ItemList;
