import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const BasicButton = (props) => {
  const { handleOpen } = props;
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={handleOpen} variant="contained">
        Auth
      </Button>
    </Stack>
  );
};

export default BasicButton;
