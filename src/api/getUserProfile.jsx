import React, { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'

const getUserProfile = () => {

    const { setUserInfo } = useContext(UserContext);

    const handleGetUserProfile = async () => {
        const res = await fetch('http://localhost:5000/profile', {
            credentials: 'include'
        });

        const data = await res.json();
        console.log(data)
        setUserInfo(data.data);
    }

    useEffect(() => {
        handleGetUserProfile();
    }, []);

    return {}
}

export default getUserProfile
