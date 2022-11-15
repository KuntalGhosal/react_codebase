import React from 'react';
import './App.css';
import { Provider, useDispatch } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom'
// redux
import { storeConfig } from './Components/Store/store';
import LandingPage from './Components/Pages/UI_Pages/LandingPage';
import { Login } from './Components/Pages/Login/Login';

export const store = storeConfig();
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

function AppRouter() {

  return (
    <React.Fragment >
      <Provider store={ store }>
        <HashRouter>
            <Switch>
            <Route
                path="/"
                component={ LandingPage }
                exact={ true }/>
             <Route
                path="/login"
                component={ Login }
                exact={ true }/>
            </Switch>
        </HashRouter>
        </Provider>
    </React.Fragment>
  )
}

export default AppRouter;
