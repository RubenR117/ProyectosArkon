import '../App.css';

//COMPONENTE
export default function DetallesPersonaje({ character, onClose, likes, onLike}) {
  return (
    <div className={`sidebar ${character ? 'open' : ''} space-x-4 space-y-1`}>
      {character && (
        <>
          {character.image && (
            <img
              src={character.image}
              alt={character.name}
              style={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }}
            />
          )}
          <h2>{character.name}</h2>
          <p><strong>Especie:</strong> {character.species}</p>
          <p><strong>Genero:</strong> {character.gender}</p>
          <p><strong>Casa:</strong> {character.house || 'Desconocida'}</p>
          <p><strong>Actor:</strong> {character.actor}</p>
          <p><strong>Vive?:</strong> {character.alive ? 'Simon' : 'Nel :('}</p>
          <button className="close-button bg-green-800 text-amber-50 py-1 px-2 rounded- hover:bg-green-600 hover:scale-110" onClick={onClose}>Cerrar</button>
          <button onClick={() => onLike(character.name)} className="bg-green-800 text-amber-50 py-1 px-2 rounded-md hover:bg-green-600 hover:scale-110">🥵 {likes}</button>
        </>
      )}
    </div>
  );
}
