import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Fab, Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import Pagination from "./Pagination";

export default function VocabTable({ words }) {
    const classes = useStyles();
    const [page, setPage] = useState(1);

    return (
        <Box>
            <Box>
                {words
                    .slice((page - 1) * 100, (page - 1) * 100 + 100)
                    .map((word) => {
                        return (
                            <Box className={classes.table}>
                                <Box className={classes.vocabBox}>
                                    <Fab
                                        color="primary"
                                        style={{ marginRight: "15px" }}
                                    >
                                        <FontAwesomeIcon icon={faVolumeUp} />
                                    </Fab>
                                    <Box className={classes.wordBox}>
                                        <Typography variant="h4">
                                            {word}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography variant="h4">TEST</Typography>
                                <Box className={classes.buttonBox}>
                                    <Button variant="contained" color="primary">
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            style={{ marginRight: "10px" }}
                                        />
                                        Favorite
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                    >
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            style={{ marginRight: "10px" }}
                                        />
                                        Remember
                                    </Button>
                                </Box>
                            </Box>
                        );
                    })}
                <Pagination page={page} setPage={setPage} />
            </Box>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    container: {
        maxHeight: 440,
    },
    table: {
        display: "flex",
        minWidth: "1000px",
        justifyContent: "space-between",
        borderBottom: `1px solid ${theme.palette.text.primary}`,
        padding: "15px 0 15px 0",
    },
    vocabBox: {
        width: "280px",
        display: "flex",
        alignItems: "center",
    },
    buttonBox: {
        display: "flex",
        justifyContent: "space-between",
        width: "270px",
    },
    wordBox: {
        width: "200px",
    },
}));
