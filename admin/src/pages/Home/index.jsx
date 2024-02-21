import React, {useState, useEffect, useMemo} from 'react';
import getBlogs from '../../api/getBlogs';
import { BLOGCOLUMNS } from '../../components/Table/blogColumn';

import timeConverter from '../../utils/timeConverter';

import { CiSquareMore } from "react-icons/ci";

const Home = () => {

    const { blogs } = getBlogs();
    const [blogList, setBlogList] = useState([]);
    
   const { formatDate } = timeConverter();
    const columns = useMemo(() => BLOGCOLUMNS, []);

    useEffect(() => {
        setBlogList(blogs);
    }, [blogs]);

    return (
        <main className='bg-white h-full overflow-scroll p-10 rounded-xl shadow-xl'>
            <table className='min-w-[1400px] mt-5'>
                <thead className='w-full h-[40px] pb-2'>
                    <tr className='w-full border-b text-left text-gray'>
                        {columns.map((column, index) => (
                        <th key={index}>
                            <p>{column.header}</p>
                        </th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {blogList && blogList.length >= 1 && blogList.map((row, rowIndex) => (
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
                                        <p>{row[column.accessor] === null ? 'No Name' : row[column.accessor]}</p>
                                    </div>
                                ) : colIndex === 2 ? (
                                    <div className='flex items-center gap-1 mt-1 w-[200px] mx-3 font-semibold'>
                                        <p>{row[column.accessor]}</p>
                                    </div>
                                
                                ) : colIndex === columns.length - 2 ? (
                                    <p>{formatDate(row[column.accessor])}</p> 
                                ) : colIndex === columns.length - 3 ? (
                                    <p className='w-[200px] py-3'>{row[column.accessor].slice(0, 200)}...</p> 
                                ) : colIndex === 4 ? (
                                    <div className='w-[150px] h-[150px]'>
                                        <img src={`http://localhost:5000/${row[column.accessor]}`} className='w-full h-full object-cover' alt="" />
                                    </div>
                                ) : colIndex === 5 ? (
                                    <p>{formatDate(row[column.accessor])}</p>    
                                ) : colIndex === columns.length - 1 ? (
                                    <div className="flex items-center text-2xl cursor-pointer" >
                                    {/* //  onClick={() => handleDeleteUser(row.id)} */}
                                     
                                    <CiSquareMore />
                                </div>
                                ): (
                                    <p>{row[column.accessor]}</p>
                                )
                                }
                            </td>
                        ))}
                    </tr>
                ))}
                    {!blogList && <div className='mt-4 text-2xl'>
                        No Blogs yet!!!
                    </div>}
                </tbody>
            </table>
            
        </main>
    )
}

export default Home
