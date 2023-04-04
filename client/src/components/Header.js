import '../styling/test.css';
import {Link} from 'react-router-dom';

export default function Header() {
    return(
        <div className="header">
            <header>
                <h1>The Task List</h1>
            </header>

            <div className="navigation">
                <nav id="user_nav" className="menu">
                    <ul>
                        <li>
                            <Link to={'/login'}>Login</Link>
                        </li>

                        <li>
                            <Link to={'/register'}>Sign Up</Link>
                        </li>

                        <li>
                            <Link to={'/settings'}>Settings</Link>
                        </li>
                    </ul>
                </nav>

                <nav id="site_nav" className="menu">
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>

                        <li>
                            <Link to={'/list'}>Task List</Link>
                        </li>

                        <li>
                            <Link to={'/create'}>Create Task</Link>
                        </li>

                        <li>
                            <Link to={'/about'}>About</Link>
                        </li>

                        <li>
                            <Link to={'/detail'}>Task Detail (TEMP)</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}