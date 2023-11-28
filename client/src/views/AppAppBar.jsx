import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppsBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppsBar position='fixed'>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant='h6'
            underline='none'
            color='inherit'
            href='#'
            sx={{ fontSize: 24 }}
          >
            {"pirate lab"}
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link
              color='inherit'
              variant='h6'
              underline='none'
              href='#'
              sx={rightLink}
            >
              {"Employee"}
            </Link>
            <Link
              variant='h6'
              underline='none'
              href='#'
              sx={{ ...rightLink, color: "secondary.main" }}
            >
              {"Admin"}
            </Link>
            <Link
              color='inherit'
              variant='h6'
              underline='none'
              href='#'
              sx={rightLink}
            >
              {"User"}
            </Link>
          </Box>
        </Toolbar>
      </AppsBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
