import * as React from "react";

// MUI
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TelegramIcon from "@mui/icons-material/Telegram";
import { IconButton } from "@mui/material";

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

const ShareModal = (props) => {
  const { open, setOpen, product } = props;

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {product.name}
            </Typography>
            <a
              href={`https://t.me/share/url?url=http://192.168.230.110:3000/products/${product.slug}&text="something"`}
            >
              <IconButton>
                <TelegramIcon />
              </IconButton>
            </a>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ShareModal;

// https://t.me/share/url?url={url}&text={text}
