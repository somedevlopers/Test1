import { useRef, useState, useCallback, useMemo } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const prevSearch = useRef(search)

  const getMovies = useCallback (async ({ search }) => {
      
      if (search === prevSearch.current) return
      try {
        setLoading(true)
        setError(null)
        prevSearch.current = search 
        const newMovies =  await searchMovies({ search })
        setMovies(newMovies)
        setLoading(false)
      } catch(e) {
        setError(e.massage)
      } finally {
        setLoading(false)
      }
      
    }, [])
  
  const sortedMovies =  useMemo(()=> {
    return sort ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
    : movies
  }, [sort, movies]) 

    return {movies:sortedMovies, getMovies, loading, error}
    
  }