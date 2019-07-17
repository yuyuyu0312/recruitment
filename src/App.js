import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from 'pages/Home/index'
import PositionList from 'pages/PositionList/index'
import Head from 'common/Head'
import Foot from 'common/Foot'
import './App.css';
function App() {
  return (
    <div className="App">
        <Head></Head>
        <Switch>
          <Redirect from="/" to="/index" exact></Redirect>
          <Route path="/index" component={Home} ></Route>
          <Route path="/positionList" component={PositionList} ></Route>
        </Switch>
        <Foot></Foot>
    </div>
  );
}

export default App;
