
export default function TarjetaPersonaje({ character, onViewMore }) {
  return (
<div className="bg-gray-300 shadow-lg rounded-lg hover:scale-110 duration-200 text-black text-2 w-42">
  {character.image && (
    <img
        className="w-42 h-55 rounded-t-lg mb-2"
        src={character.image}
        alt={character.name}
    />
  )}
  <h3>{character.name}</h3>
  <p>Casa: {character.house || 'Desconocida'}</p>
  <div className="my-2 flex justify-center">
    <button onClick={() => onViewMore(character)} className="bg-green-800 text-amber-50 py-1 px-2 rounded-md">Ver más</button>
  </div>
</div>
);
}
