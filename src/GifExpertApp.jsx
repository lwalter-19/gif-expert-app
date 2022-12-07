import { useState } from 'react';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Naruto', 'Boruto', 'Kimetsu']);
    const onAddCategory = () => {
        setCategories(['NuevaCategoria', ...categories]);
        // setCategories(cat => ['NuevaCategoria', ...Category]);
    }

    return (
        <>
            {/* titulo */}
            <h1>Gif Expert App</h1>
            {/* input */}
            {/* Estado de Gif */}
            <button 
                className='btn btn-outline-primary'
                onClick={onAddCategory}
            >
                Agregar
            </button>
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
