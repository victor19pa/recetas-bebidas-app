import React from "react";
import { Formulario, Header } from "./components";
import CategoriasProvider from "./context/CategoriasContext";

const App = () => {
  return (
    <CategoriasProvider>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
    </CategoriasProvider>
  );
};

export default App;
