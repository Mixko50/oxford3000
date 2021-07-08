import { ButtonBase, Typography, makeStyles } from "@material-ui/core";
import DelayLink from "../routing/DelayLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarButton = ({ to, icon, text }) => {
    const classes = useStyles();
    return (
        <DelayLink to={to} className={classes.link}>
            <ButtonBase className={classes.button}>
                <FontAwesomeIcon icon={icon} className={classes.fa} size="2x" />
                <Typography>{text}</Typography>
            </ButtonBase>
        </DelayLink>
    );
};
const useStyles = makeStyles((theme) => ({
    link: (props) => ({
        textDecoration: "none",
        marginLeft: 6,
    }),
    button: (props) => ({
        padding: "6px 12px",
        color: theme.palette.text.primary,
        borderBottom: "1px solid transparent",
        transition: "0.3s all",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        margin: "0 5px 0 5px",
        "&:hover": {
            borderBottom: `1px solid ${theme.palette.text.primary}`,
        },
    }),
    fa: () => ({
        marginRight: 8,
    }),
}));

export default NavbarButton;
