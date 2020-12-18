import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.scss";
import HomeScreen from "./screens/HomeScreen";
function App() {
    return (
        <Router>
            <Route path="/" component={HomeScreen} exact />
        </Router>
    );
}

export default App;
