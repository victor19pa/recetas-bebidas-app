import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

//crear context
export const RecetasContext = createContext();

// Provider es donde se encontraran las funciones y state

const RecetasProvider = (props) => {
  //crear state del context
  const [recetas, setRecetas] = useState([]);
  const [search, setSearch] = useState({
    nombre: "",
    categoria: "",
  });

  //ejecutar llamado a api
  useEffect(() => {}, []);

  return (
    <RecetasContext.Provider
      value={{
        setSearch,
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
