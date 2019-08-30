import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter, Route} from 'react-router-dom';
import HeaderTop from './common/header/index';
import MenuContent from './common/menu/index';
import Login from './pages/login/index';
import 'antd/dist/antd.css';
import "./css/reset.css";
function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <div style={{ height: '100%' }}>
                  <HeaderTop/>
                  <MenuContent/>
                  <Route path='/login' exact component={Login}></Route>
              </div>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
