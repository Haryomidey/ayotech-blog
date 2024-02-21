import { toast } from 'react-toastify';

const deleteUser = () => {

    const handleDeleteUser = async (id) => {
        const res = await fetch('http://localhost:5000/user/'+id, {
            method: "DELETE",
            credentials: "include"
        });

        console.log(id);

        const data = await res.json();
        toast.success(data.message);
    }

    return { handleDeleteUser };
}

export default deleteUser;
