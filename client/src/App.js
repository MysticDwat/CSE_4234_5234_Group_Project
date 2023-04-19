import {Outlet} from 'react-router-dom';
import './styling/css/index.css';

import Header from './components/header/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={match.url}>
        // <Link to="{match.url}">
        </Link>
      </Routes>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
