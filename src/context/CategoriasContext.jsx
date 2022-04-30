import React, { createContext, useState } from "react";

//crear context
export const CategoriasContext = createContext();

// Provider es donde se encontraran las funciones y state

const CategoriasProvider = (props) => {
  const [first, setfirst] = useState("Hola");

  return (
    <CategoriasContext.Provider
      value={{
        first,
        setfirst,
      }}
    >
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
