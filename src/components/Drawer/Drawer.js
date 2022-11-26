import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import { Link } from "react-router-dom";
import IsAdminApi from "../Api/IsAdminApi";

const Drawer = (props) => {
  const { drawerState, setDrawerState, pages } = props;

  const { isAdmin } = IsAdminApi();

  const toggleDrawer = (cond) => () => {
    setDrawerState(cond);
  };

  const list = () => (
    <Box
      sx={{ minWidth: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((text, index) => (
          <Link key={index} to={text.toLowerCase()}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <HomeIcon /> : <CategoryIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      {isAdmin === "admin" && (
        <Link className="p-0" to="admin/changeproduct">
          <List sx={{ p: 0 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Change Product"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Link>
      )}
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor="left"
      open={Boolean(drawerState)}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      {list()}
    </SwipeableDrawer>
  );
};

export default Drawer;
