import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

//crear context
export const ModalContext = createContext();

// Provider es donde se encontraran las funciones y state

const ModalProvider = (props) => {
  //crear state del context
  const [idReceta, setIdReceta] = useState(null);

  //ejecutar llamado a api
  // useEffect(() => {}, []);

  return (
    <ModalContext.Provider
      value={{
        setIdReceta,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
