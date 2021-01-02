import React from 'react'
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import HomeScreen from './screens/HomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import { Route, Redirect } from 'react-router-dom';
// import HomeFold from './components/HomeFold/HomeFold';
import ReservationScreen from './screens/ReservationScreen';



function App() {
  return (
    <React.Fragment>
      {/* <HomeFold /> */}
      {/* <DashboardScreen /> */}
      <ReservationScreen />
    </React.Fragment>
  )
}

export default App