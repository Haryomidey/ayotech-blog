import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const loginAdmin = () => {
    const navigate = useNavigate();
    const [admin, setAdmin] = useState({
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdmin(prev => ({ ...prev, [name]: value }));
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('http://localhost:5000/admin/login', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(admin)
            });

            const result = await res.json();
            setErrors(result.message);

            if (result.success) {
                navigate('/admin/users');
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }

    }

    return { admin, handleChange, handleLogin, errors, setErrors, loading };
}

export default loginAdmin;
