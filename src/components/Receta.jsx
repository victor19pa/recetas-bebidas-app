import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Receta = ({ receta }) => {
  //config modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setIdReceta(null);
    setReceta({});
  };

  const {
    setIdReceta,
    receta: recetaProvider,
    setReceta,
  } = useContext(ModalContext);

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>

        <img
          className="card-img-top"
          src={receta.strDrinkThumb}
          alt={`Imagen de ${receta.strDrink}`}
        />

        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              setIdReceta(receta.idDrink);
              handleOpen();
            }}
          >
            Ver Receta
          </button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <h2>{recetaProvider.strDrink}</h2>
              <h3 className="mt-4">Instrucciones</h3>
              <p>
                {recetaProvider.strIntructions}

                <img
                  className="img-fluid my-4"
                  src={recetaProvider.strDrinkThumb}
                  alt=""
                />
              </p>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Receta;
