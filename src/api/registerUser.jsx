import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const registerUser = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('http://localhost:5000/register', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            const result = await res.json();

            if (!result.success) {
                toast.error(result.message);
            }
            
            if (result.success) {
                toast.success(result.message);
                navigate('/login');
            }
        } catch (error) {
            console.log(error); 
        } finally {
            setLoading(false);
        }

    }

    return { user, handleChange, handleRegister, loading };
}

export default registerUser;
