import { useNavigate } from "react-router-dom";
import { signInWithEmail, signInWithGoogle } from "../../scripts/firebase.js";

export default function SignIn() {
    const navigate = useNavigate();

    function handle_submit(e){
        e.preventDefault();
        const form = e.target;
        const form_data = new FormData(form);
        const form_json = Object.fromEntries(form_data.entries());
        signInWithEmail(form_json['user-email'], form_json['user-password']);
        navigate('/list');
    }

    return(
        <div className='SignIn'>
            <form className='sign-in-form' onSubmit={handle_submit}>
                <ul>
                    <li>
                        <label htmlFor='user-email-input'>Email</label>
                        <input type='email' name='user-email' id='user-email-input' />
                    </li>

                    <li>
                        <label htmlFor='user-password-input'>Password</label>
                        <input type='password' name='user-password' id='user-password-input' />
                    </li>

                    <li style={{display:'flex',justifyContent:'space-between'}}>
                        <button type='submit' >Email Sign In</button>
                        <button className='google-sign-in' onClick={() => signInWithGoogle()}>Google Sign In</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}