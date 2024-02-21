import { Link } from 'react-router-dom';
import timeConverter from '../../utils/timeConverter'

const BlogCard = ({ title, cover, snippet, _id, createdAt, author, category }) => {
    
    const { formatDate } = timeConverter();

    return (
        <li className=''>
            <Link to={`/blog/${_id}`} className='w-full max-w-full'>
                <div className='w-full tablet:h-[300px] overflow-hidden rounded-lg relative'>
                    <img src={`http://localhost:5000/${cover}`} className='w-full object-cover h-full' alt="" />
                    {category && <p className='absolute top-2 left-2 z-10 shadow-lg px-2 tablet:px-4 py-2 text-white bg-black rounded-md text-xs tablet:text-sm'>{category}</p>}
                </div>
            </Link>
            <Link to={`/blog/${_id}`} className='flex flex-wrap items-center gap-4 mt-6'>
                <h2 className='capitalize font-semibold text-sm'>{author && author.username}</h2>
                <p className='text-gray text-xs'>{formatDate(createdAt)}</p>
            </Link>
            <Link to={`/blog/${_id}`} className='font-bold tablet:text-xl w-full break-words'>
                <h2 className='my-3 whitespace-normal'>{title.length > 100 ? `${title.slice(0, 100)}...` : title}</h2>
            </Link>
            <Link to={`/blog/${_id}`} className='text-gray text-xs tablet:text-sm mt-5 w-full max-w-full'>
                <div className='w-full max-w-full break-words'>
                    {snippet.length >= 200 ? `${snippet.slice(0, 200)}...` : snippet}
                </div>
            </Link>
            <Link to={`/blog/${_id}`} className='border-b border-primary text-primary font-bold pb-1'>Read More...</Link>
        </li>
    )
}

export default BlogCard;
