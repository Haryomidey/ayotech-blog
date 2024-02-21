import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


const getListOfUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleGetUsers = async () => { 
        setLoading(true);
        try {
            const res = await fetch('http://localhost:5000/users', {
            credentials: 'include'
            })

            const data = await res.json();
            
            if (data.message === 'Please login to perform this action') {
                navigate('/admin/login')
            }
            setUsers(data.data);
            
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        handleGetUsers();
    }, [users]);


    return {users}
}

export default getListOfUsers
