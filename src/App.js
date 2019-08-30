import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter, Route} from 'react-router-dom';
import HeaderTop from './common/header/index';
import Login from './pages/login/index';
import Home from './pages/home/index';
import 'antd/dist/antd.css';
import "./css/reset.css";
function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <div>
                  <HeaderTop/>
                  <Route path='/' exact component={Home}></Route>
                  <Route path='/login' exact component={Login}></Route>
              </div>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
