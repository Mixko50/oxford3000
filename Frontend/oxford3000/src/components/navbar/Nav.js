import {
    Box,
    makeStyles,
    Typography,
    Button,
    Tooltip,
    Fab,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { useContext, useEffect, useState } from "react";
import logo from "../../images/pin.png";
import NavbarButton from "./NavbarButton";
import { ThemeContext } from "../../contexts/ThemeContext";
import {
    faAdjust,
    faHistory,
    faIgloo,
    faRandom,
    faSignOutAlt,
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import axios from "../../utils/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
    const { toggleDark } = useContext(ThemeContext);
    const [scrolled, setScrolled] = useState(false);
    const [t] = useTranslation("home");
    const [loggedIn, setLoggedIn] = useState(false);
    const [profile, setProfile] = useState({});
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

    useEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = async () => {
        try {
            const fetchedData = await axios.get("/google/profile");
            setProfile(fetchedData.data);
            setLoggedIn(true);
        } catch {
            console.log("Error to fetch profile");
        }
    };

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
                <Box className={classes.profileBox}>
                    <Tooltip title="Switch to Dark mode">
                        <Fab
                            onClick={() => {
                                toggleDark();
                            }}
                            color="primary"
                            size="small"
                            style={{ marginRight: "15px" }}
                        >
                            <FontAwesomeIcon icon={faAdjust} />
                        </Fab>
                    </Tooltip>
                    {loggedIn ? (
                        <Box className={classes.profile}>
                            <Tooltip title={profile.name}>
                                <Box className={classes.profile}>
                                    <image
                                        className={classes.profilePic}
                                        src={profile.picture}
                                        alt="profile picture"
                                    />
                                    <Typography variant="h6">
                                        {profile.name.split(" ")[0]}
                                    </Typography>
                                </Box>
                            </Tooltip>
                            <a
                                href={axios.baseURL + "/logout"}
                                style={{ textDecoration: "none" }}
                            >
                                <Tooltip title="Logout">
                                    <Fab
                                        color="secondary"
                                        size="small"
                                        style={{ marginLeft: "15px" }}
                                    >
                                        <FontAwesomeIcon
                                            icon={faSignOutAlt}
                                            size="1x"
                                        />
                                    </Fab>
                                </Tooltip>
                            </a>
                        </Box>
                    ) : (
                        <a
                            href={axios.baseURL + "/oauth/redirect"}
                            style={{ textDecoration: "none" }}
                        >
                            <StyledButton variant="contained">
                                <Typography color="textPrimary">
                                    Login
                                </Typography>
                            </StyledButton>
                        </a>
                    )}
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
    profilePic: {
        width: 35,
        margin: "0 10px",
        borderRadius: "30px",
    },
    profile: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    profileBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
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
