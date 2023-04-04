import '../styling/test.css';

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
                            <a>Login</a>
                        </li>

                        <li>
                            <a>Sign Up</a>
                        </li>

                        <li>
                            <a>Settings</a>
                        </li>
                    </ul>
                </nav>

                <nav id="site_nav" className="menu">
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>

                        <li>
                            <a href="list.html">Task List</a>
                        </li>

                        <li>
                            <a href="createNew.html">Create Task</a>
                        </li>

                        <li>
                            <a>About</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}