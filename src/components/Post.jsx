import {Link} from 'react-router-dom';

const Post = ({title , link , image , snippet}) => {
    return (
        <div className="post block bg-gray-100 p-5 mb-10 rounded shadow-md transform hover:scale-105 transition duration-500 ease-in-out">
            <Link to={link}><h2 className='text-3xl font-black hover:text-primary transform hover:translate-x-4 transition duration-500 ease-in-out'>{title}</h2></Link>
            <div className="flex flex-col justify-center text-center md:text-left md:flex-row gap-5 items-center md:justify-start content-center">
                <Link to={link}><img 
                    className="my-5 w-100 rounded md:w-50 hover:opacity-75 transition duration-500 ease-in-out"
                    src={image} alt={title} /></Link>
                <p className='text-lg my-5'>
                    {snippet}
                </p>
            </div>
        </div>
    );
}
 
export default Post;