import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";

const Pagination = ({ page, setPage }) => {
    const classes = useStyles();

    return (
        <Box className={classes.pagination}>
            <Box>
                <Box className={classes.changePageButton}>
                    <Fab
                        color="primary"
                        onClick={() => {
                            page === 1 ? setPage(33) : setPage(page - 1);
                        }}
                    >
                        <FontAwesomeIcon icon={faLessThan} />
                    </Fab>
                    <Typography variant="h5">{page}</Typography>
                    <Fab
                        color="primary"
                        onClick={() => {
                            page === 33 ? setPage(1) : setPage(page + 1);
                        }}
                    >
                        <FontAwesomeIcon icon={faGreaterThan} />
                    </Fab>
                </Box>
            </Box>
        </Box>
    );
};

const useStyles = makeStyles((theme) => ({
    pagination: {
        marginTop: "10px",
        width: "100%",
        height: "80px",
        backgroundColor:
            theme.palette.type === "dark"
                ? theme.palette.customColors.darkModePagination
                : theme.palette.customColors.background4,
        borderRadius: theme.shape.borderRadius,
        padding: "10px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    changePageButton: {
        width: "170px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
}));

export default Pagination;
