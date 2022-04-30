import React from "react";
import { Formulario, Header } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
    </>
  );
};

export default App;
