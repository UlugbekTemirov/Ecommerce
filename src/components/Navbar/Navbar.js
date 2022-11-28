import * as React from "react";

// MUI
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// REACT-ROUTER-DOM
import { Link, useNavigate } from "react-router-dom";

// COMPONENTS
import BasicButton from "../../UI/BasicButton";
import Cookies from "universal-cookie";
import Basket from "../Basket/Basket";
import BackStage from "../../UI/BackStage";

// URL
import { URL } from "../../globals/global";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// NAVBAR COMPONENT
const Navbar = (props) => {
  const {
    basket,
    setDrawerState,
    pages,
    handleOpen,
    deleteBusketHandler,
    searchHandler,
  } = props;

  // MODAL STATE
  const [open, setOpen] = React.useState(false);

  // MODAL OPENER FUNCTION
  const handleOpenModal = () => {
    setOpen(true);
    handleMobileMenuClose();
  };

  // MODAL CLOSER FUNCTION
  const handleCloseModal = (value) => {
    setOpen(value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // MOBILE MENU HANDLERS
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const cookie = new Cookies();
  const navigate = useNavigate();

  const logoutHandler = () => {
    handleMenuClose();
    cookie.remove("jwt", { path: "/" });
    localStorage.clear();
    navigate("/");
  };

  // BUSKET STATE
  const [isBusketOpen, setIsBusketOpen] = React.useState(false);

  // BUSKET OPEN/CLOSE HANDLER
  const busketOpenHandler = () => {
    setIsBusketOpen(true);
    handleMobileMenuClose();
  };

  // LOCAL STORAGE GET NAME
  const name = localStorage.getItem("name");

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to={`profile/${name && name.toLowerCase().trim(" ")}`}>
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      </Link>
      <MenuItem onClick={logoutHandler}>Logout</MenuItem>
    </Menu>
  );

  const closeBusketHandler = () => {
    setIsBusketOpen(false);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={handleOpenModal}>
        <IconButton size="large" aria-label="show 2 new items" color="inherit">
          <Badge badgeContent={basket.length} color="error">
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Shopping Busket</p>
      </MenuItem>
      {open && (
        <Basket
          handleCloseModal={handleCloseModal}
          open={open}
          mobileView={true}
          basket={basket}
          deleteBusketHandler={deleteBusketHandler}
          closeBusketHandler={closeBusketHandler}
        />
      )}
    </Menu>
  );

  const openDrawerHandler = () => {
    setDrawerState(true);
  };

  const jwt = cookie.get("jwt");

  const getClassName = (e) => {
    if (e.target.id !== "shoppingCard") {
      closeBusketHandler();
    }
  };

  return (
    <React.Fragment>
      {isBusketOpen && <BackStage closeBusketHandler={closeBusketHandler} />}
      <Box sx={{ flexGrow: 1, mb: 10 }}>
        <AppBar onClick={(e) => getClassName(e)} position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={openDrawerHandler}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="div"
              variant="h6"
              noWrap
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Ecommerce
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => searchHandler(e.target.value)}
              />
            </Search>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link key={page} to={page.toLowerCase()}>
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            {Boolean(jwt) && (
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  position: { md: "relative", xs: "initial" },
                }}
              >
                <IconButton
                  onClick={busketOpenHandler}
                  size="large"
                  aria-label="show 2 new items"
                  color="inherit"
                  id="shoppingCard"
                >
                  <Badge
                    id="shoppingCard"
                    badgeContent={basket.length}
                    color="error"
                  >
                    <AddShoppingCartIcon id="shoppingCard" />
                  </Badge>
                </IconButton>
                {isBusketOpen && (
                  <Basket
                    mobileView={false}
                    basket={basket}
                    deleteBusketHandler={deleteBusketHandler}
                    closeBusketHandler={closeBusketHandler}
                  />
                )}
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="error">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={6} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Box>
            )}
            {Boolean(jwt) && (
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            )}

            {!Boolean(jwt) && <BasicButton handleOpen={handleOpen} />}
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
