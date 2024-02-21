import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const logoutAdmin = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState('');


    const handleLogout = async () => {

        const res = await fetch('http://localhost:5000/admin/logout', {
            method: "POST",
            credentials: 'include'
        });

        if (res.ok) {
            navigate('/admin/login');
        }

    }

    return { handleLogout, errors, setErrors };
}

export default logoutAdmin;
