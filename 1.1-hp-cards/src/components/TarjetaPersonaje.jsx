import React from 'react';
import defaultImg from '../assets/default.jpg';

const TarjetaPersonaje = ({ character, onViewMore, likes = 0, onLike}) => {
    console.log(`Renderizando tarjeta de: ${character.name}`);
    console.log('Imagen recibida:', typeof character.image);

  return (
<div className="bg-gray-300 shadow-lg rounded-lg hover:scale-110 duration-200 text-black text-2 w-42">
    <img 
      className="w-42 h-55 rounded-t-lg mb-2"
      src=
            {character.image ? character.image : defaultImg}
      alt={character.name}
  />
  <div className="p-2 text-center">
    <h3>{character.name}</h3>
    <p>Casa: {character.house || 'Desconocida'}</p>
  </div>
  <div className="my-2 flex justify-center space-x-4">
    <button onClick={() => onViewMore(character)} className="bg-green-800 text-amber-50 py-1 px-2 rounded-md hover:bg-green-600 hover:scale-110">Ver más</button>
    <button onClick={() => onLike(character.name)} className="bg-green-800 text-amber-50 py-1 px-2 rounded-md hover:bg-green-600 hover:scale-110">🥵{likes}</button>
  </div>
</div>
);
};
export default React.memo (TarjetaPersonaje);