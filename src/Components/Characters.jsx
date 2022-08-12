import { useState, useEffect, useReducer } from "react"

const initialState = {
  favorites: []
}

const favoriteReducers = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state;
  }
}

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducers, initialState);

  const API = "https://rickandmortyapi.com/api"
  
  useEffect(() => {
    fetch(`${API}/character`)
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  }, []);

  const handleClick = favorite => {
    dispatch({type: 'ADD_TO_FAVORITE', payload: favorite})

  }
  
  return (
    <div className="characters">
      {favorites.favorites.map(favorite =>(
        <li key={favorite.id}>
          {favorite.name}
        </li>
      ))}
      {characters && characters.map(character=>(
        <div key={character.id} >
          <h5>{character.name}</h5>
          <button type="button" onClick={() => handleClick(character)}>Add to favorites</button>
        </div>
      ))}
    </div>
  )
}

export default Characters