import { useMemo, useContext, useCallback, useState } from 'react';
//Componentes, porque YO SÉ que devuelven JSX
import FiltroCasa from './components/FiltroCasa';
import TarjetaPersonaje from './components/TarjetaPersonaje';
import DetallesPersonaje from './components/DetallesPersonaje';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'; //componente especial de framer-motion con animaciones aca bn epikas
import Buscador from './components/Buscador';
import {AppContext} from './context/AppProvider';
import useCharacters from './hooks/useCharacter'; // El custom hook

//Componente App
const App = () => {
  const { data: characters = [], isLoading, error } = useCharacters(); // ya no se usa useEffect ni axiosInstance
  //////////////////////////////////////////Estado para guardar los likes por personaje.
  const [likes, setLikes] = useState({});
  //////////////////////////////////////////Funcion para actualizar los likes
  const onLike = useCallback((name) => {
    setLikes(prev => ({
      ...prev,
      [name]: prev[name] ? prev[name] + 1:1
    }));
  }, []);

const { state, dispatch } = useContext(AppContext);
const { house, selectedCharacter } = state;

const handleSetHouse = (house) => {
  dispatch({ type: 'SET_HOUSE', payload: house });
};

const handleViewMore = useCallback(
  (character) => {
    dispatch({ type: 'SET_SELECTED_CHARACTER', payload: character });
  },
  [dispatch]
);

  
  // Obtener casas únicas de forma segura
  const houses = useMemo(() => {
  const unique = [...new Set(characters.map(c => c.house).filter(Boolean))];
  return unique;
  }, [characters]);

  // Filtro por casas o personaje
  const filtered = characters
  .filter(c => (house ? c.house === house : true))
  .filter(c => c.name.toLowerCase().includes(state.search.toLowerCase()));

  if (isLoading) return <p className="text-white p-4">Cargando personajes...</p>;

  if (error) return <p className="text-red-500 p-4">Error al cargar los datos.</p>;

  return (
    <div className='bg-gray-900'>
      <div className='text-4xl py-5 bg-gray-400 flex justify-center text-white p-3'>
        <h1>Harry Potter Personajes</h1>
      </div>
      <Buscador value={state.search} onChange={(value) => dispatch({ type: 'SET_SEARCH', payload: value })} />
      <FiltroCasa houses={houses} selected={house} onChange={handleSetHouse} />
      
      <div className='flex flex-wrap gap-3 justify-center'>
        {filtered.map((c,key) => (
          <TarjetaPersonaje 
          key={key} 
          character={c} 
          onViewMore={handleViewMore} 
          likes={likes[c.name] || 0}
          onLike={onLike}
          />
        ))}
      </div>
        <AnimatePresence>
          {selectedCharacter && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 1 }}
              className="fixed right-0 top-0 h-126 w-50 max-w-sm shadow-md p-4 z-50 overflow-y-auto"
            >
            <DetallesPersonaje
              character={selectedCharacter}
              onClose={() => dispatch({ type: 'SET_SELECTED_CHARACTER', payload: null })}
              likes = {likes[selectedCharacter.name] || 0}
              onLike={onLike}
            />
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  );
};

export default App;