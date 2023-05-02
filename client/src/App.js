import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, UserContext } from './scripts/firebase';

import './styling/css/index.css';
import Header from './components/header/Header';
import Footer from './components/Footer';

function App () {
  const [user, set_user] = useState(null);

  onAuthStateChanged (auth, (new_user) => {
    if (new_user) {
      set_user(new_user);
    } else {
      set_user(null);
    }
  });

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
