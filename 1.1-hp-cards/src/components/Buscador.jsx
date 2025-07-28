const Buscador = ({value, onChange}) => {
    return (
        <div className="my-2 flex justify-center">
            <input 
                type="text"
                placeholder="Buscar personaje..."
                className="p-2 rounded border bg-white"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default Buscador;