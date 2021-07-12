import { Box, Typography } from "@material-ui/core";

const History = () => {
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
                    History
                </Typography>
            </Box>
        </Box>
    );
};

export default History;
