import './App.css'
import ListaTareas from './components/ListaTareas';

//ARRAY DE OBJETOS llamado Tareas
const tareas = [
  {id: 1, texto: "Estudiar React"},
  {id: 2, texto: "Hacer ejercicios"},
];

function App (){
  return(
    <div>
      <h1>Mis tareas: </h1>
      <ListaTareas tareas={tareas}/> //Está renderizando el componente ListaTareas y le está pasando una prop llamada tareas.
    </div>
  );
}

export default App;

//Esto es un COMPONENTE
// function Tarjeta({nombre}) {
//   return <h2>Hola!, mi nombre es {nombre}</h2>; //Si el return solo tiene un elemento, va en la misma linea
// }

// function App(){
//   return <Tarjeta nombre="Ruben"/>
// }
// export default App
