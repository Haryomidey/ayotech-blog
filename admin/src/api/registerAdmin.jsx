import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const registerAdmin = () => {
    const navigate = useNavigate();
    const [admin, setAdmin] = useState({
        admin_name: '',
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdmin(prev => ({ ...prev, [name]: value }));
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('http://localhost:5000/admin/register', {
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
                navigate('/admin/login');
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }

    }

    return { admin, handleChange, handleRegister, errors, setErrors, loading };
}

export default registerAdmin;
