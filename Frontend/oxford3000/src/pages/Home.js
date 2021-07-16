import { Box, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import VocabTable from "../components/table/Table";
import axios from "axios";

const Home = () => {
    const [allWords, setAllWords] = useState([]);

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
        <Box
            display="flex"
            marginTop="60px"
            flexDirection="column"
            width="100%"
            alignItems="center"
            height="auto"
        >
            <Box marginTop="50px">
                <Typography variant="h2" color="textPrimary">
                    Oxford 3000 Words
                </Typography>
            </Box>
            <Box marginTop="60px" paddingBottom="100px">
                <VocabTable words={allWords} />
            </Box>
        </Box>
    );
};

export default Home;
