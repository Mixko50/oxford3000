import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Pagination from "./Pagination";

export default function VocabTable({ words }) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const pagination = useRef(null);

    const pageCaller = async () => {
        let page = await pagination.current.getPage();
        return page;
    };

    return (
        <Box>
            <Box>
                {words
                    .slice(pageCaller() * 100, pageCaller() * 100 + 100)
                    .map((word) => {
                        return (
                            <Box className={classes.table}>
                                <Box className={classes.vocabBox}>
                                    <Typography variant="h4">{word}</Typography>
                                </Box>
                                <Typography variant="h4">TEST</Typography>
                                <Button variant="contained" color="primary">
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        style={{ marginRight: "10px" }}
                                    />
                                    Favorite
                                </Button>
                            </Box>
                        );
                    })}
                <Pagination page={page} ref={pagination} />
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
        minWidth: "900px",
        justifyContent: "space-between",
        borderBottom: `1px solid ${theme.palette.text.primary}`,
        padding: "15px 0 15px 0",
    },
    vocabBox: {
        width: "280px",
    },
}));
