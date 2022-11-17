import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import BasicModal from "../../UI/BasicModal";
import BasicTabs from "../../UI/BasicTabs";

const Auth = (props) => {
  const { open, setOpen, setAuthHandler } = props;
  return (
    <BasicModal setOpenModal={setOpen} openModal={open}>
      <BasicTabs setAuthHandler={setAuthHandler} setOpenModal={setOpen} />
    </BasicModal>
  );
};

export default Auth;
