import * as React from "react";

// MUI
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

// COMPONENTS
import BasketCard from "./BasketCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
  height: 500,
  overflow: "auto",
};

export default function BasketModal(props) {
  const { basket, open, handleCloseModal, deleteBusketHandler } = props;

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => handleCloseModal(!open)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {basket.map((basketItem) => (
              <BasketCard
                key={basketItem.name}
                deleteBusketHandler={deleteBusketHandler}
                basketItem={basketItem}
              />
            ))}
            {basket.length === 0 && (
              <h1 className="text-center">No products in the basket</h1>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
