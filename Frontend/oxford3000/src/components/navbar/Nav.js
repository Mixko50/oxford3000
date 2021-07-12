import {
    Box,
    makeStyles,
    Typography,
    Button,
    Tooltip,
    Switch,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { useContext, useEffect, useState } from "react";
import logo from "../../images/pin.png";
import NavbarButton from "./NavbarButton";
import { ThemeContext } from "../../contexts/ThemeContext";
import {
    faHistory,
    faIgloo,
    faRandom,
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Nav = () => {
    const { toggleDark } = useContext(ThemeContext);
    const [scrolled, setScrolled] = useState(false);
    const [t, i18n] = useTranslation("home");
    const classes = useStyles({
        height: 60,
        scrolled: scrolled,
    });

    useEffect(() => {
        // Bind path scroll event
        window.addEventListener("scroll", onScroll);

        return () => {
            // Clear scroll event binding
            window.removeEventListener("scroll", onScroll);
        };
    });

    const onScroll = () => {
        if (window.pageYOffset > 60) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    return (
        <Box className={classes.outer}>
            <Box className={classes.inner}>
                <Box display="flex">
                    <img className={classes.logo} alt="Logo" src={logo} />
                    <Typography variant="h5" color="textPrimary">
                        Oxford3000
                    </Typography>
                </Box>
                <Box display="flex">
                    <NavbarButton text={t("home")} icon={faIgloo} to="/home" />
                    <NavbarButton
                        text={t("random")}
                        icon={faRandom}
                        to="/random"
                    />
                    <NavbarButton
                        text={t("history")}
                        icon={faHistory}
                        to="/history"
                    />
                    <NavbarButton
                        text={t("favorite")}
                        icon={faStar}
                        to="/favorite"
                    />
                </Box>
                <Box>
                    <Tooltip title="Switch to Dark mode">
                        <Switch
                            onChange={() => {
                                toggleDark();
                            }}
                            inputProps={{ "aria-label": "secondary checkbox" }}
                        />
                    </Tooltip>
                    <StyledButton variant="contained">
                        <Typography color="textPrimary">Login</Typography>
                    </StyledButton>
                </Box>
            </Box>
        </Box>
    );
};

const useStyles = makeStyles((theme) => ({
    outer: (props) => ({
        height: props.height,
        width: "100%",
        boxShadow: props.scrolled
            ? "0px 2.5px 5px 0px rgba(0, 0, 0, 0.24)"
            : "none",
        position: "fixed",
        backdropFilter: props.scrolled ? "blur(15px)" : "none",
        transition: "0.3s all",
        top: 0,
        zIndex: 1000,
    }),
    inner: (props) => ({
        height: "100%",
        maxWidth: theme.breakpoints.values.lg,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        display: "flex",
        justifyContent: "space-between",
        margin: "auto",
        alignItems: "center",
    }),
    logo: (props) => ({
        width: 35,
        marginRight: theme.spacing(3),
    }),
}));

const StyledButton = withStyles((theme) => ({
    root: {
        background: theme.palette.customColors.button,
        "&:hover": {
            background: theme.palette.customColors.hoverButton,
        },
    },
}))(Button);

export default Nav;
