
//COMPONENTE ListaTareas
//Prop tareas, esta prop contiene el array de elementos
function ListaTareas ({tareas}){
  return (
    <ul>
      {tareas.map((tarea) => (     //El MÉTODO .map() recorre el array tareas y por cada objeto (ej. { id: 1, ---- }) retorna un elemento JSX <li>.
        <li key={tarea.id}>{tarea.texto}</li>
      ))}
    </ul>
  );
}

export default ListaTareas;