import { useEffect, useState } from "react";
import { Instrumento } from "../types/instrumentos.types";

export const useData = () => {
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/public/data/instrumentos.json");

        if (!response.ok) throw new Error("Error en la respuesta del servidor");

        const { instrumentos } = await response.json();

        setInstrumentos(instrumentos);
      } catch (e) {
        console.log(e);
        setError("Error al obtener los datos");
      }
    };

    fetchData();
  }, []);

  return { instrumentos, error };
};
