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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import HostScreen from './screens/HostScreen';
import SearchPage from './screens/SearchPage';
import Propertieslist from './components/Properties/Propertieslist';
            
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={HomeScreen} exact />
                <Route path="/search" component={SearchPage} />
                <Route path="/host" component={HostScreen} exact />
                <Route path="/properties" component={Propertieslist} exact /> 
            </Switch>
        </Router>
    )
>>>>>>> main
}

export default App
