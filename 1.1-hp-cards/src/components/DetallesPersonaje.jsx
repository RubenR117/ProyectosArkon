import '../App.css';

//COMPONENTE
export default function DetallesPersonaje({ character, onClose }) {
  return (
    <div className={`sidebar ${character ? 'open' : ''}`}>
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
          <button className="close-button bg-green-800 text-amber-50 py-1 px-2 rounded-md" onClick={onClose}>Cerrar</button>
        </>
      )}
    </div>
  );
}
