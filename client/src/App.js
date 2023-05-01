import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, UserContext, UserIDContext } from './scripts/firebase';
import useGetUserID from './scripts/useGetUserID';

import './styling/css/index.css';
import Header from './components/header/Header';
import Footer from './components/Footer';

function App () {
  const [user, set_user] = useState(null);
  const user_id = useGetUserID(user ? user.uid : null);

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
        <UserIDContext.Provider value={user_id}>
          <Header />
          <Outlet />
          <Footer />
        </UserIDContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
