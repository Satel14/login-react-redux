import { useSelector } from 'react-redux';
import LoginPage from './components/LoginPage/LoginPage.js'
import { BrowserRouter as Router, Switch,  Route} from 'react-router-dom';
import './App.css';
import  ProfilePage  from './components/ProfilePage/ProfilePage';

function App() {
  const state = useSelector(state => state.auth);

  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path='/profile'>
          <ProfilePage login={state.login} />
        </Route>
        <Route path='/'>
          <h1>Login</h1>
          <LoginPage />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;