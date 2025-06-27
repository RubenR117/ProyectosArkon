import { useMemo, useContext } from 'react';

//Componentes, porque YO SÉ que devuelven JSX
import FiltroCasa from './components/FiltroCasa';
import TarjetaPersonaje from './components/TarjetaPersonaje';
import DetallesPersonaje from './components/DetallesPersonaje';

import AppContext from './context/AppContext';

import useCharacters from './hooks/useCharacter'; // El custom hook

//Componente App
const App = () => {
  const { data: characters = [], isLoading, error } = useCharacters(); // ya no se usa useEffect ni axiosInstance
const { house, setHouse, selectedCharacter, setSelectedCharacter} = useContext(AppContext);//Aquí se usa el contexto
  // Obtener casas únicas de forma segura
  const houses = useMemo(() => {
    const unique = [...new Set(characters.map(c => c.house).filter(Boolean))];
    return unique;
  }, [characters]);

  // Filtro por casas
  const filtered = house ? characters.filter(c => c.house === house) : characters;

  if (isLoading) return <p className="text-white p-4">Cargando personajes...</p>;
  if (error) return <p className="text-red-500 p-4">Error al cargar los datos.</p>;

  return (
    <div className='bg-gray-900'>
      <div className='text-4xl py-5 bg-gray-400 flex justify-center text-white p-3'>
        <h1>Harry Potter Personajes</h1>
      </div>
      <FiltroCasa houses={houses} selected={house} onChange={setHouse} />
      <div className='flex flex-wrap gap-3 justify-center'>
        {filtered.map(c => (
          <TarjetaPersonaje key={c.name} character={c} onViewMore={setSelectedCharacter} />
        ))}
      </div>
      <DetallesPersonaje character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
    </div>
  );
};

export default App;

  // useEffect(() => {
  //   // Traer todos los personajes
  //   axiosInstance.get('/characters')
  //     .then(res => {
  //       setCharacters(res.data);
  //       // extraer las casas y usarlas en el menú
  //       const unique = [...new Set(res.data.map(c => c.house).filter(h => h))];
  //       setHouses(unique);
  //     })
  //     .catch(err => console.error(err));
  // }, []);//Ese array vacío significa: “Solo ejecuta esto una vez, cuando el componente se monta por primera vez”