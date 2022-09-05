import { Grid, Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import LanguagePopover from "../../components/LanguagePopover";
import { ColorModeContext } from "../../utils/context";
import { update } from "../../redux/reducers/settings";
import { logout } from "../../redux/reducers/auth";
import Icon from "../../components/Icon";
import Text from "../../components/Typography";
import Links from "../../components/Link";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const [translation] = useTranslation("translations");
  const colorMode = React.useContext(ColorModeContext);
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/login");
  };
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang) => {
    dispatch(update(lang));
  };

  return (
    <Grid container>
      <AppBar position="static">
        <Toolbar>
          <Links
            style={{ textDecoration: "none", color: "white" }}
            nav="/"
            value={translation("nav.title")}
          />
          <Box
            sx={{
              flexGrow: 1,
              ml: 2,
            }}
          >
            <Links
              style={{ textDecoration: "none", color: "white" }}
              nav="/crud"
              value="Crud"
            />
          </Box>

          <Text
            sx={{ textTransform: "capitalize" }}
            mode={theme.palette.mode}
            value={translation("nav.mode")}
          />

          <Icon
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
            value={
              theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )
            }
          />

          <LanguagePopover handleLanguageChange={handleLanguageChange} />

          {auth && (
            <div>
              <Icon
                size="large"
                ariaLabel="account of current user"
                ariaControls="menu-appbar"
                ariaHaspopup="true"
                onClick={handleMenu}
                color="inherit"
                value={<AccountCircle />}
              />

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>
                  {translation("logout")}
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default Header;
