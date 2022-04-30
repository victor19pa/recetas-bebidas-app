import React, { useContext } from "react";
import { CategoriasContext } from "../context/CategoriasContext";

const Formulario = () => {
  const { first } = useContext(CategoriasContext);

  alert(first);

  return (
    <form action="" className="col-12">
      <fieldset className="text-center">
        <legend>Busca bebidas por categoria o ingrediente</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Buscar por Ingrediente"
          />
        </div>

        <div className="col-md-4">
          <select name="categoria" id="categoria" className="form-control">
            <option value="">--Selecciona una Categoria </option>
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
