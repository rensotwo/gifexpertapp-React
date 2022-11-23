import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        // Nos permite recibir la escritura en el input
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        // Evita que le demos enter o enviemos algo si el input esta vacio o con un solo caracter
        if( inputValue.trim().length <= 1 ) return;

        // setCategories( (categories) => [inputValue, ...categories ]);
        onNewCategory( inputValue.trim() );

        // Al enviar un dato se borra el contenido del input
        setInputValue('');
    }


    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
