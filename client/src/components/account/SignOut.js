import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOutUser } from '../../scripts/firebase';

export default function SignOut () {
    const navigate = useNavigate();

    useEffect(() => {
        signOutUser()
        navigate('/');
    });

    return(null);
}