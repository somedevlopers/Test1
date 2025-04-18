import { useEffect, useRef, useState } from "react";

export function useSearch() {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)

    useEffect(()=> {
        if (isFirstInput.current) {
            isFirstInput.current = search === ''
            return
        }
        if (search === '') {
            setError('Busqueda vacia')
            return
        }
         if (search.length < 3) {
            setError('La busqueda requiere al menos 3 caracteres')
        }

        setError(null)
    },[search])

    return {search, updateSearch, error}
} 