import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthContext from './store/auth-context';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;


  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
       </Route>
        {!isLoggedIn && <Route path='/auth'>
          <AuthPage />
        </Route>}
        {isLoggedIn && <Route path='/profile'>
          <UserProfile />
        </Route>}
        <Route to="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
