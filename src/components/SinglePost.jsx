import { useState } from "react";
import { Link , useHistory } from "react-router-dom";
import Err from "./Err";
const SinglePost = ({title , image , body , id}) => {

    const history = useHistory();
    const [ err , setErr ] = useState(null);

    const handleDelete = () => {
        fetch(`${process.env.REACT_APP_API_URL}/${id}.json` , {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then( res => {
                if(res.status !== 200 || !res.ok){
                    throw Error('Cann\'t delete the post');
                }
                history.push('/')})
            .catch( err => {
                setErr(err.message);
            });
    }

    return (
        <div className="single-post block p-5 mb-10 rounded shadow-md transition duration-500 ease-in-out">
            {err && <Err errMsg={err} /> }
            <div className="flex justify-between">
                <h2 className='text-3xl font-black text-primary transition duration-500 ease-in-out'>{title}</h2>
                <div className="flex gap-2">
                    <button className='shadow appearance-none bg-primary my-4 text-white rounded py-2 px-5 hover:text-primary hover:bg-white transition duration-500 ease-in-out'>
                    <Link to={`/edit/${id}`}>Edit</Link>
                    </button>
                    <button
                        onClick={handleDelete} 
                        className='shadow appearance-none bg-red-800 my-4 text-white rounded py-2 px-5 hover:text-primary hover:bg-white transition duration-500 ease-in-out'>
                        Delete
                    </button>
                </div>   
            </div>
            <img 
                className="my-5 w-100 rounded transition duration-500 ease-in-out"
                src={image} alt={title} />
            <p className='text-lg my-5'>
                {body}
            </p>
        </div>
    );
}
 
export default SinglePost;