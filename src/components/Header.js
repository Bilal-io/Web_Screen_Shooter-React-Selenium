import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";

const styles = {
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  logo: {
    height: 44,
    width: 50,
    color: "#0a0a0a",
    marginRight: 8
  }
};

class Header extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <SvgIcon viewBox="" className={classes.logo}>
              <path d="M48,0H0V34H20.73l-1.6,8H15v2H33V42H28.86l-1.65-8H48" />
              <circle
                cx="24"
                cy="17"
                r="6.73"
                fill="#231f20"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <line
                x1="24"
                y1="7.26"
                x2="24"
                y2="13.71"
                fill="#231f20"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <line
                x1="14.26"
                y1="17"
                x2="20.71"
                y2="17"
                fill="#231f20"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <line
                x1="24"
                y1="26.74"
                x2="24"
                y2="20.29"
                fill="#231f20"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <line
                x1="33.74"
                y1="17"
                x2="27.29"
                y2="17"
                fill="#231f20"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </SvgIcon>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              WEB SCREEN SHOOTER!
            </Typography>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                component="a"
                color="inherit"
                href="https://github.com/Bilal-io/Web_Screen_Shooter-React-Selenium"
                aria-label="GitHub repository"
                data-ga-event-category="AppBar"
                data-ga-event-action="github"
                target="_blank"
              >
                <SvgIcon>
                  <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
                </SvgIcon>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
