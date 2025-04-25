import React from "react"
import './App.css'
import { useCatFact } from "./hooks/"
import { CatImage } from "./components/CatImage"

function App() {
  const {fact, refreshFact} = useCatFact()

  const handleClick = async ()=> {
   refreshFact()
  }

  return (
    <div className="cat_info_container">
    <h1>The Amazing World of Cats</h1>
    <button onClick={handleClick}>New fact</button>
    {fact && <p>{fact}</p>}
    <CatImage fact={fact}/>
    
    </div>
  )
}

export default App