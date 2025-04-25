import { useEffect, useState } from "react"

const CAT_IMAGE_URL = 'https://cattas.com'

export function useCatImage({fact}) {
  const [imageURL, setimageURL] = useState()  
  
  useEffect(()=> {
    if (!fact) return 
    
    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFirstWords}`)
    .then(response => {
      const {url} = response
      setimageURL(url)
      
    });
  },[fact])

  return {imageURL}
  
}
