import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs.js';

export const useFetchGifs = ( category ) => {

    const [ images, setImages ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading(false);
    }

    // El useEffect ejecuta procesos secundarios
    useEffect( () => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
}
