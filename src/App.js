import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Post from './components/Posts';
import Services from './components/Services';

function App() {
    const isLoggedIn = false;
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                {/* <Route exact path="/services" render={() => <Services number="5" />} /> */}
                <Route exact path="/services">
                    <Services number="10" />
                </Route>
                <Route exact path="/post/:category" component={Post} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/login">
                    {isLoggedIn ? <Redirect to="/dashboard" /> : <Home />}
                </Route>

                <Route component={Error} />
            </Switch>
        </Router>
    );
}

export default App;
