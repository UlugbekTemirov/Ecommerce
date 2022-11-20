import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

// COMPONENTS
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

export default function LabTabs(props) {
  const { setOpenModal, setAuthHandler, cookie } = props;

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Login" value="1" />
            <Tab label="Register" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Login
            cookie={cookie}
            setAuthHandler={setAuthHandler}
            setOpenModal={setOpenModal}
          />
        </TabPanel>
        <TabPanel value="2">
          <Register
            cookie={cookie}
            setAuthHandler={setAuthHandler}
            setOpenModal={setOpenModal}
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
