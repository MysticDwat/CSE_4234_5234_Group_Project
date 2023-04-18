import '../styling/header.css';
import NavMenu from './NavMenu';

export default function Header() {
    return(
        <header>
            <h1>The Task List</h1>

            <div className="navigation">
                <NavMenu 
                    buttons={
                        [
                            ['/login','Login'],
                            ['/register','Sign Up'],
                            ['/settings','Settings']
                        ]
                    } 
                />

                <NavMenu 
                    buttons={
                        [
                            ['/','Home'],
                            ['/list','Task List'],
                            ['/create','Create Task'],
                            ['/about','About'],
                            ['/detail','Task Detail (TEMP)']
                        ]
                    } 
                />
            </div>
        </header>
    );
}