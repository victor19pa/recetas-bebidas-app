import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

//crear context
export const RecetasContext = createContext();

// Provider es donde se encontraran las funciones y state

const RecetasProvider = (props) => {
  //crear state del context
  const [consultar, setConsultar] = useState(false);
  const [recetas, setRecetas] = useState([]);
  const [search, setSearch] = useState({
    nombre: "",
    categoria: "",
  });

  const { nombre, categoria } = search;

  //ejecutar llamado a api
  useEffect(() => {
    if (consultar) {
      const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;

        const resultado = await axios.get(url);

        setRecetas(resultado.data.drinks);

        console.log(recetas);
      };
      obtenerRecetas();
    }
  }, [search]);

  return (
    <RecetasContext.Provider
      value={{
        setSearch,
        setConsultar,
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
