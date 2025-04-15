import { CardInstrumentos } from "./components/CardInstrumentos";
import { useData } from "./hooks/useData";
import { Instrumento } from "./types/instrumentos.types";

export const App = () => {
  const { instrumentos, error } = useData();

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Instrumentos</h2>
      {error && <p className="text-danger">{error}</p>}
      {instrumentos.map((inst: Instrumento) => (
        <CardInstrumentos
          key={inst.id}
          instrumento={inst}
        />
      ))}
    </div>
  );
};
