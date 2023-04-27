import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { signOutUser } from './scripts/firebase';

import App from './App';
import Home from './components/Home';
import Detail from './components/Detail';
import List from './components/list/List';
import Create from './components/Create';
import SignIn from './components/account/SingIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
          {/*Site routes. Page is parent element that the menus render on top of.*/}
          <Route path='/' element={<App />} >
              <Route path='/' element={<Home />} />
              <Route path='/create' element={<Create />} />
              <Route path='/list' element={<List />} />
              <Route path='/detail/:category_id/:task_id/:name' element={<Detail />} />
              <Route path='/login' element={<SignIn />} />
              <Route path='/sign-out' element={<button onClick={() => signOutUser()}>Sign Out</button>} />
              <Route path='*' element={<p style={{fontSize: '32px'}}>404 ERROR: Page not found.</p>} />
          </Route>
      </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
