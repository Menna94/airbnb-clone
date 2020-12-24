<<<<<<< HEAD
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './components/Gift/Gift'
import HomeScreen from './screens/HomeScreen';
import DashboardScreen from './screens/DashboardScreen';


function App() {
  return (
    // <HomeScreen/>
    <DashboardScreen />
  );
=======
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import HostScreen from './screens/HostScreen';
function App() {
    return (
        <Router>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/host" component={HostScreen} exact />
        </Router>
    )
>>>>>>> main
}

export default App
