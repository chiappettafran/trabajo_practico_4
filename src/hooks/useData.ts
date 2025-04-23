import { useEffect, useState } from "react";
import { Instrumento } from "../types/instrumentos.types";

export const useData = () => {
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/instrumento/all");
        if (!response.ok) throw new Error("Error en la respuesta del servidor");

        const data = await response.json();
        setInstrumentos(data);
      } catch (e) {
        console.log(e);
        setError("Error al obtener los datos");
      }
    };

    fetchData();
  }, []);

  return { instrumentos, error };
};
