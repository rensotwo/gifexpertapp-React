import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {

        // Nos evita que ingresemos una categoria repetida
        if( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories ]);

    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                // Emite una nueva categoria
                onNewCategory={ onAddCategory }
            />

            {
            categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } 
                    />
                )) 
            }
        </>
    )
}