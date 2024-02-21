import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const logoutUser = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState('');


    const handleLogout = async () => {

        const res = await fetch('http://localhost:5000/logout', {
            method: "POST",
            credentials: 'include',
        });

        if (res.ok) {
            navigate('/login');
        }

    }

    return { handleLogout, errors, setErrors };
}

export default logoutUser;
