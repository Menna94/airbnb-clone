import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import SearchPage from './screens/SearchPage'
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={HomeScreen} exact />
                <Route path='/search' component={SearchPage} />
            </Switch>
        </Router>
    )
}

export default App
