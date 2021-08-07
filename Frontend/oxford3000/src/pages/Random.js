import { faCheck, faStar, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography, makeStyles, Button, Fab } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";

const Random = () => {
    const classes = useStyled();
    const [wordsArray, setWordsArray] = useState([]);
    const [allWords, setAllWords] = useState([]);

    const randomNumber = () => {
        const temp = [];
        for (let i = 0; i < 5; i++) {
            temp.push(Math.floor(Math.random() * 3000));
        }
        setWordsArray(temp);
    };

    useEffect(() => {
        fetchWords();
    }, []);

    const fetchWords = async () => {
        try {
            const fetchedData = await axios.get(
                "https://oxford3000api.mixko.ml/oxford3000.json"
            );
            setAllWords(fetchedData.data);
        } catch {
            console.log("Error");
        }
    };

    return (
        <Box className={classes.section}>
            <Box margin="50px 0px">
                <Typography variant="h2" color="textPrimary">
                    Random 5 words
                </Typography>
            </Box>
            <Button
                color="primary"
                variant="contained"
                className={classes.randomButton}
                onClick={randomNumber}
            >
                <Typography variant="h6">Random</Typography>
            </Button>
            <Box marginTop="50px">
                {wordsArray && allWords
                    ? wordsArray.map((word) => {
                          return (
                              <Box className={classes.row}>
                                  <Box className={classes.vocabBox}>
                                      <Fab
                                          color="primary"
                                          style={{ marginRight: "15px" }}
                                      >
                                          <FontAwesomeIcon icon={faVolumeUp} />
                                      </Fab>
                                      <Box className={classes.wordBox}>
                                          <Typography variant="h4">
                                              {allWords[word]}
                                          </Typography>
                                      </Box>
                                  </Box>
                                  <Box className={classes.transBox}>
                                      <Typography variant="h4">TEST</Typography>
                                  </Box>
                                  <Box className={classes.buttonBox}>
                                      <Button
                                          variant="contained"
                                          color="primary"
                                      >
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
                      })
                    : null}
                <Box className={classes.saveBox}>
                    {wordsArray[0] ? (
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                        >
                            <Typography variant="h6">Save</Typography>
                        </Button>
                    ) : null}
                </Box>
            </Box>
        </Box>
    );
};

const useStyled = makeStyles((theme) => ({
    section: {
        display: "flex",
        marginTop: "60px",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        height: "auto",
    },
    randomButton: {
        width: "200px",
        height: "60px",
    },
    row: {
        display: "flex",
        minWidth: "1000px",
        justifyContent: "space-between",
        borderBottom: `1px solid ${theme.palette.text.primary}`,
        padding: "15px 0 15px 0",
    },
    vocabBox: {
        width: "320px",
        display: "flex",
        alignItems: "center",
    },
    buttonBox: {
        display: "flex",
        justifyContent: "space-between",
        width: "270px",
    },
    wordBox: {
        width: "250px",
    },
    transBox: {
        width: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    saveBox: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "20px",
    },
}));

export default Random;
