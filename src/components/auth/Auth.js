import * as React from "react";
import BasicModal from "../../UI/BasicModal";
import BasicTabs from "../../UI/BasicTabs";

const Auth = (props) => {
  const { open, setOpen, cookie } = props;
  return (
    <BasicModal setOpenModal={setOpen} openModal={open}>
      <BasicTabs
        cookie={cookie}
        // setAuthHandler={setAuthHandler}
        setOpenModal={setOpen}
      />
    </BasicModal>
  );
};

export default Auth;
