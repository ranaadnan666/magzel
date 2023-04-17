import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { navItems } from "./Data";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import logo from "../../images/logo.png";

const drawerWidth = 300;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeMenuItem, setActiveMenuItem] = React.useState(null); // Add state for active menu item
  const [homeClicked, setHomeClicked] = React.useState(false); 
 
  const handleHomeClick = () => {
    setActiveMenuItem(null); // Reset active state
    setHomeClicked(true); // Set home clicked state
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        // variant="h5"
        sx={{ my: 2 }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <img
            width={{ md: "200px", xs: "150px" }}
            height={"60px"}
            src={logo}
            alt=""
            style={{
              objectFit: "cover",
              marginBottom: "-15px",
            }}
          />
        </Link>
      </Box>
      <Divider />
      <List sx={{ display: "flex", flexDirection: "column" }}>
        {navItems.map(({ id, title, url }) => (
          <Link
            style={{ color: "white", textDecoration: "none" }}
            key={id}
            to={url}
          >
            <Stack direction="column" alignItems="center">
              <p style={{ fontSize: "13px", color: "black" }}>{title}</p>
            </Stack>
          </Link>
        ))}

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <a href="#contact" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "  #db5156",
                color: "white",
                padding: "10.5px 25.5px",
                marginLeft: "10px",
                borderRadius: "64px",
                ":hover": {
                  bgcolor: "  #db5156",
                },
              }}
            >
              Contact Us
            </Button>
          </a>
        </Box>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "white", color: "black", padding: "10px 0px" }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1300px",
            mx: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/"
              style={{ textDecoration: "none", color: "black" }}
              onClick={handleHomeClick} // Add onClick function to handle home click

            >
              <img
                src={logo}
                alt=""
                width={{ md: "200px", xs: "150px" }}
                height="50px"
                style={{ objectFit: "cover", marginBottom: "-15px" }}
              />
            </Link>
          </Box>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {navItems.map(({ id, title, url }) => (
              <Link
                key={id}
                to={url}
                style={{ color: "black", textDecoration: "none", mr: "20px" }}
                onClick={() => setActiveMenuItem(id)}
              >
                <Button
                  variant="text"
                  sx={{
                    marginRight: "5px",
                    borderRadius: "0px",
                    fontWeight: "600",
                    color: "black",
                    ":hover": {
                      borderBottom: "2px solid red",
                    },
                    ...(activeMenuItem === id && {
                      borderBottom: "2px solid red",
                    }),
                  }}
                >
                  {title}
                </Button>
              </Link>
            ))}
            <a href="#contact" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: " #db5156",
                  color: "white",
                  padding: "10.5px 25.5px",
                  marginLeft: "10px",
                  borderRadius: "64px",
                  ":hover": { bgcolor: " #db5156" },
                }}
              >
                Contact Us
              </Button>
            </a>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              ml: "auto",
              display: { md: "none" },
              border: "1px solid #353538",
              borderRadius: "9px",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
