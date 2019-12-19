import React from 'react';
import logo from './logo.svg';
import './App.css';
import { history } from './index';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Link } from 'react-router-dom';


function App() {
  return (
    <ConnectedRouter history={history}>
    <div className="App">
      <header style={{alignSelf: 'flex-start'}} className="App-header">
        <img style={{height: '100px', width: '100px'}} src={logo} className="App-logo" alt="logo" />
        <div>
          <Link className={'link'} to={'first-page'}>First page</Link>
          <Link className={'link'} to={'second-page'}>Second page</Link>
          <Link className={'link'} to={'third-page'}>Third page</Link>
          <Link className={'link'} to={'fourth-page'}>Fourth page</Link>
          <Link className={'link'} to={'fifth-page'}>Fifth page</Link>
          <div
            className={'link'}
            onClick={() => {
              console.log('set');
              document.getElementById("worker").setAttribute("src","service-worker.js");
              setTimeout(() => {
                console.log('remove');
                document.getElementById("worker").setAttribute("src", undefined);
              }, 2000);
            }}
          >
            RELOAD SERVICE WORKER
          </div>
          <iframe title={'adfadsf'} style={{zIndex: '-1', opacity: 0,}} name="worker" id="worker" width="0" height="0"> </iframe>
        </div>
        <Switch>
          <Route
            path={'/'}
            exact
            render={() => {
              return (
                <div>
                  Root page
                  new Contents
                </div>
              )
            }}
          />
          <Route
            path={'/first-page'}
            exact
            render={() => {
              return (
                <div>
                  First page
                </div>
              )
            }}
          />
          <Route
            path={'/second-page'}
            exact
            render={() => {
              return (
                <div>
                  Second page
                </div>
              )
            }}
          />
          <Route
            path={'/third-page'}
            exact
            render={() => {
              return (
                <div>Third page 3</div>
              )
            }}
          />
          <Route
            path={'/fourth-page'}
            exact
            render={() => {
              return (
                <div>Fourth page 4</div>
              )
            }}
          />
          <Route
            path={'/fifth-page'}
            exact
            render={() => {
              return (
                <div>Fifth page 555555</div>
              )
            }}
          />
        </Switch>
      </header>
    </div>
    </ConnectedRouter>
  );
}

export default App;
