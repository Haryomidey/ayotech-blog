import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const loginUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('http://localhost:5000/login', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(user)
            });

            const result = await res.json();

            if (!result.success) {
                toast.error(result.message);
            }
            
            if (result.success) {
                navigate('/');
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }

    }

    return { user, handleChange, handleLogin, loading };
}

export default loginUser;
