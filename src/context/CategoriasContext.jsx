import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

//crear context
export const CategoriasContext = createContext();

// Provider es donde se encontraran las funciones y state

const CategoriasProvider = (props) => {
  //crear state del context
  const [categorias, setCategorias] = useState([]);

  //ejecutar llamado a api
  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

      const categorias = await axios.get(url);

      // console.log(categorias.data.drinks);
      setCategorias(categorias.data.drinks);
      // guardarCategorias(categorias.data.drinks);
    };
    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider
      value={{
        categorias,
      }}
    >
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
