import { useState, useEffect } from 'react';
//Componentes, porque devuelven JSX
import FiltroCasa from './components/FiltroCasa';
import TarjetaPersonaje from './components/TarjetaPersonaje';
import DetallesPersonaje from './components/DetallesPersonaje';
import axiosInstance from './api/axiosInstance'; //instancia personalizada, "configuración especial"

//Acá lo que está dentro de App es la lógica y el contenido que se va a renderizar
// function App() { 
const App = () => { // Arrow Function
  const [characters, setCharacters] = useState([]);
  const [house, setHouse] = useState('');
  const [houses, setHouses] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);


  useEffect(() => {
    // Traer todos los personajes
    axiosInstance.get('/characters')
      .then(res => {
        setCharacters(res.data);
        // extraer las casas y usarlas en el menú
        const unique = [...new Set(res.data.map(c => c.house).filter(h => h))];
        setHouses(unique);
      })
      .catch(err => console.error(err));
  }, []);

  // Filtro por casas
  const filtered = house ? characters.filter(c => c.house === house) : characters;

  return (
    <div className='bg-gray-900 '>
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
}

export default App;
