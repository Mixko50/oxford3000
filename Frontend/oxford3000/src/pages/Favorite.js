import { Box, Typography } from "@material-ui/core";

const Favorite = () => {
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
                    Favortie
                </Typography>
            </Box>
        </Box>
    );
};

export default Favorite;
