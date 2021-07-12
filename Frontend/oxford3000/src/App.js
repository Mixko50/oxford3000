import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Random from "./pages/Random";
import Nav from "./components/navbar/Nav";
import History from "./pages/History";
import Favorite from "./pages/Favorite";
import "./styles";
import "./languages";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
    return (
        <ThemeContextProvider>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Redirect to={{ pathname: "/home" }} />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/random">
                        <Random />
                    </Route>
                    <Route path="/history">
                        <History />
                    </Route>
                    <Route path="/favorite">
                        <Favorite />
                    </Route>
                </Switch>
            </Router>
        </ThemeContextProvider>
    );
}

export default App;
