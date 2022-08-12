import { useState, useEffect } from "react"

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const API = "https://rickandmortyapi.com/api"
  
  useEffect(() => {
    fetch(`${API}/character`)
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  }, []);
  
  return (
    <div className="characters">
      {characters && characters.map(character=>(<h5>{character.name}</h5>))}
    </div>
  )
}

export default Characters