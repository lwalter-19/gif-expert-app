import { useState } from 'react';
import { AddCategory } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Naruto', 'Boruto', 'Kimetsu']);
    const onAddCategory = () => {
        setCategories(['NuevaCategoria', ...categories]);
    }

    return (
        <>
            {/* titulo */}
            <h1>Gif Expert App</h1>
            {/* input */}
            <AddCategory 
                setCategories={setCategories}
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
