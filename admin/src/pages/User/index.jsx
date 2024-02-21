import React, { useEffect, useMemo, useState } from 'react';
import getListOfUsers from '../../api/getListOfUsers';
import { USERCOLUMNS } from '../../components/Table/userColumn';
import timeConverter from '../../utils/timeConverter';

import { MdDelete } from "react-icons/md";
import deleteUser from '../../api/deleteUser';

const User = () => {

    const { users } = getListOfUsers();
    const { handleDeleteUser } = deleteUser();
    const [usersList, setUsersList] = useState([]);

    const { formatDate } = timeConverter();
    const columns = useMemo(() => USERCOLUMNS, []);

    useEffect(() => {
        setUsersList(users);
    }, [users]);

    return (
        <main className='bg-white overflow-scroll max-w-full h-full p-10 rounded-xl shadow-xl'>
            <table className='min-w-[900px] mt-5'>
                <thead className='w-full pb-2'>
                    <tr className='w-full border-b text-left text-gray'>
                        {columns.map((column, index) => (
                        <th key={index}>
                            <p>{column.header}</p>
                        </th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {usersList && usersList.map((row, rowIndex) => (
                    <tr className='border-b h-[40px] w-full' key={rowIndex}>
                        {columns.map((column, colIndex) => (
                            <td key={colIndex}>
                                {colIndex === 0 ? (
                                <div className="flex items-center">
                                    <p>{rowIndex +  1}</p>
                                </div>
                                ) : colIndex === 1 ? (
                                <div className='flex items-center gap-1 mt-1'>
                                    <img src={'User'} alt="" />
                                    <p>{row[column.accessor]}</p>
                                </div>
                                ) : colIndex === columns.length - 1 ? (
                                <div className="flex items-center text-2xl cursor-pointer text-[#D9534F]" onClick={() => handleDeleteUser(row.id)}>
                                    <MdDelete />
                                </div>
                                ) : colIndex === 3 ? (
                                    <p>{formatDate(row[column.accessor])}</p>    
                                ) : (
                                    <p>{row[column.accessor]}</p>
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
                    {!usersList && <div className='mt-4 text-2xl'>
                        No users yet!!!
                    </div>}
                </tbody>
            </table>
        </main>
    )
}

export default User;