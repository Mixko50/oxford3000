import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import axios from "../utils/axios";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [dark, setDark] = useState();

    useEffect(() => {
        checkTheme();
    }, [dark]);

    const checkTheme = async () => {
        const getTheme = await axios.get("/theme/check");
        setDark(getTheme.data.theme);
    };

    const theme = createMuiTheme({
        palette: {
            type: dark ? "dark" : "light",
            customColors: {
                background1: "#CDF0EA",
                background2: "#F9F9F9",
                background3: "#F7DBF0",
                background4: "#BEAEE2",
                button: "#F38BA0",
                hoverButton: "#BB8760",
                darkMode: "#4C4C6D",
                darkModePagination: "#515E63",
            },
        },
        typography: {
            fontFamily: ["Mali"].join(","),
        },
        shape: {
            borderRadius: 10,
        },
        overrides: {
            MuiCssBaseline: {
                "@global": {
                    body: {
                        backgroundColor: dark ? "#4C4C6D" : "#F7DBF0",
                    },
                },
            },
        },
    });

    const handlers = {
        toggleDark: async () => {
            setDark((dark) => !dark);
            try {
                await axios.post(axios.baseURL + "/theme/change", {
                    theme: !dark,
                });
            } catch (e) {
                console.log("Error while changing theme in database");
            }
        },
        isDark: dark,
    };

    return (
        <ThemeContext.Provider value={handlers}>
            <ThemeProvider theme={theme}>
                {children} <CssBaseline />
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
