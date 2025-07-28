
export default function FiltroCasa({ houses, selected, onChange }) {
  return (
    <select value={selected} onChange={(e) => onChange(e.target.value)} className="bg-white">
      <option value="">Todas las casas</option>
      {houses.map(h => (
        <option key={h} value={h}>{h}</option>
      ))}
    </select>
  );
}