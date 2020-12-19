<<<<<<< HEAD
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
=======
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './components/Gift/Gift'
import HomeScreen from './screens/HomeScreen';


function App() {
  return (
    <HomeScreen/>
  );
>>>>>>> 1e902e2208d137fcebf1d23219c15a69f915b2fd
}

export default App;
