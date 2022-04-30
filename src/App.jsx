import React from "react";
import { Formulario, Header, ListaRecetas } from "./components";
import CategoriasProvider from "./context/CategoriasContext";
import ModalProvider from "./context/ModalContext";
import RecetasProvider from "./context/RecetasContext";

const App = () => {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <ListaRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
};

export default App;
