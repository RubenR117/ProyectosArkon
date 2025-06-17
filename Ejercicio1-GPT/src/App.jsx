import './App.css' //Importando estilaxos
import Contacto from './components/Contacto'
import Encabezado from './components/Encabezado'
import Habilidades from './components/Habilidades'
import SobreMi from './components/SobreMi'

// export { Encabezado, SobreMi, Habilidades, Contacto } //Exportando COMPONENTES, NO variables
export default function App(){
    return(
        <>
            <Encabezado />
            <SobreMi />
            <Habilidades />
            <Contacto />
        </>
    )
}
