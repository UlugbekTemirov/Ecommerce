import * as React from "react";
import BasicModal from "../../UI/BasicModal";
import BasicTabs from "../../UI/BasicTabs";

const Auth = (props) => {
  const { open, setOpen, cookie, getUserHandler } = props;
  return (
    <BasicModal setOpenModal={setOpen} openModal={open}>
      <BasicTabs
        cookie={cookie}
        // setAuthHandler={setAuthHandler}
        setOpenModal={setOpen}
        getUserHandler={getUserHandler}
      />
    </BasicModal>
  );
};

export default Auth;
