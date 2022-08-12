import { useState, useReducer, useMemo, useRef, useCallback } from "react"
import useCharacters from "../Hooks/useCharacters";
import Search from "./Search";

const initialState = {
  favorites: []
}

const API = "https://rickandmortyapi.com/api/character";

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
  const [favorites, dispatch] = useReducer(favoriteReducers, initialState);
  const [search, setSearch] = useState('');
  
  const searchInput = useRef(null);
  
  const characters = useCharacters(API);
  

  const handleClick = favorite => {
    dispatch({type: 'ADD_TO_FAVORITE', payload: favorite})
  }

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value)
  }, []);

  const filteredUsers = useMemo(() => 
      characters.filter((user)=>{
      return user.name.toLowerCase().includes(search.toLowerCase());
    }),
    [characters, search]
  )
  
  return (
    <div className="characters">
      {favorites.favorites.map(favorite =>(
        <li key={favorite.id}>
          {favorite.name}
        </li>
      ))}
      <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />

      {filteredUsers && filteredUsers.map(character=>(
        <div key={character.id} >
          <h5>{character.name}</h5>
          <button type="button" onClick={() => handleClick(character)}>Add to favorites</button>
        </div>
      ))}
    </div>
  )
}

export default Characters