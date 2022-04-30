import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

//crear context
export const ModalContext = createContext();

// Provider es donde se encontraran las funciones y state

const ModalProvider = (props) => {
  //crear state del context
  const [idReceta, setIdReceta] = useState(null);
  const [receta, setReceta] = useState({});

  //ejecutar llamado a api teniendo id de receta
  useEffect(() => {
    const obtenerReceta = async () => {
      if (!idReceta) return;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;

      const resultado = await axios.get(url);

      setReceta(resultado.data.drinks[0]);
    };
    obtenerReceta();
  }, [idReceta]);

  return (
    <ModalContext.Provider
      value={{
        receta,
        setIdReceta,
        setReceta,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
