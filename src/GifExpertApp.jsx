import { useState } from 'react';
import { AddCategory } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Naruto', 'Boruto', 'Kimetsu']);

    const onAddCategory = (onNewCategory) => {
        // categories.push(onNewCategory);
        setCategories([onNewCategory, ...categories]);
    }

    return (
        <>
            {/* titulo */}
            <h1>Gif Expert App</h1>
            {/* input */}
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />
            {/* Estado de Gif */}
            <hr/>
            <ol>
                {
                    categories.map(category => <li key={category}>{category}</li>)
                }
            </ol>
            {/* Gif Item */}
        </>
    )
}
