import { useRef, useState } from "react";
import { useHistory , useParams } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Err from './components/Err';
import Loading from './components/Loading';
import useFetch from "./useFetch";

const Edit = () => {
    const id = useParams().id;
    

    const {loading: loadingFetch , err: errFetch , data} = useFetch(`${process.env.REACT_APP_API_URL}/${id}.json`);
    
    const exts = ['png' , 'jpg' , 'jpeg', 'webp'];
    const history = useHistory();

    const [err , setErr ] = useState(null);
    const [loading , setLoading ] = useState(false);
    const [image , setImage ] = useState(null);
    /*const [file , setFile] = useState(null); */
    const [post , setPost ] = useState({
        title: '',
        snippet: '',
        body: '',
        img: ''
    });

    const mainImg = useRef(null);

    // Submitting the form
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setErr(null);
        
        // Simple Check

        if(err){
            return;
        }

        // Must be down
        if(post.img === ''){
            // No image
            post.img = 'https://i.ibb.co/rH7RKjF/default-placeholder.png';
        }

        for(const prop in post){
            if( post[prop] === '' ){
                setErr('Please fill in all fields!');
                setLoading(false);
                return;
            }
        }

        setErr(null);

        // Send it
        const data = {
            title: post.title,
            snippet: post.snippet,
            body: post.body,
            img: post.img
        };

        /* if(post.img === ''){
            // No image
            data.img = 'https://i.ibb.co/rH7RKjF/default-placeholder.png';
        } */

        fetch(`${process.env.REACT_APP_API_URL}/${id}.json` , {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then( res => {
                setLoading(false);
                history.push('/')})
            .catch( err => {
                setLoading(false);
                setErr(err.message);
            });
    };

    // Display Image and set it
    /* const imgChange = (img) => {
        // Change the img when uploaded
        const reader = new FileReader();
        reader.readAsDataURL(img.files[0]);
        reader.onloadend = e =>{

            // Check image type
            let ext = (e.target.result).split(';');
            ext = ext[0].split('/')[1];

            if(!exts.includes(ext)){
                // It's not an image
                setErr('Error! Please upload an image(png , jpg , webp)!'); 
            }else{
                // Remove err msg if found
                setErr(null);
                // Set it
                setImage(e.target.result);  
                //Upload it
                setLoading(true);

                const form = new FormData();
                form.append('image' , reader.result);

                fetch(`https://api.imgbb.com/1/upload?&key=ba3571b3fdc4fda51b773e9d905f3d0b&image=${(reader.result).split(',')[1]}`,{
                    method:'POST',
                    headers:{
                        'Content-Type': "multipart/form-data"
                    }
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(err => console.log(err.message));
            }
        }; 
    }; */

    (function(){
        if(data && !post.title){
            setPost(data);
            setImage(data.img);
        }

    })();
    
    return (
        <div className="create">
            <Header />
            <div className="container m-auto px-10 mb-10">
                <h2 className='text-3xl text-primary font-black transition duration-500 ease-in-out mb-10'>Create a new post</h2>
                {data && <form onSubmit={event => handleSubmit(event)} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                        
                        <label htmlFor="title" className='block text-gray-700 text-sm font-bold mb-2'>Title:</label>
                        <input 
                            type="text"
                            name='title'
                            value={post.title}
                            onChange={event => {setPost({...post , title : event.target.value})}}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary'
                        />

                        <label htmlFor="snippet" className='block text-gray-700 text-sm font-bold mb-2 mt-4'>Snippet:</label>
                        <input 
                            type="text"
                            name='snippet'
                            value={post.snippet}
                            onChange={event => {setPost({...post , snippet : event.target.value})}}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary'
                            />

                        <label htmlFor="body" className='block text-gray-700 text-sm font-bold mb-2 mt-4'>Body:</label>
                        <textarea name="body" 
                            value={post.body}
                            onChange={event => {setPost({...post , body : event.target.value})}}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary resize-none h-96'
                        ></textarea>
                    
                        {/* <label htmlFor="img" className='block text-gray-700 text-sm font-bold mb-2 mt-4'>Image:</label>
                        <input 
                            type="file"
                            name='img'
                            ref={mainImg}
                            className='hidden'
                            onChange={event => imgChange(event.target)}
                        /> */}

                        { image && <img src={image} alt='Post' className='my-5 w-100 rounded md:w-1/2 transition duration-500 ease-in-out' /> }

                        
                        {/* <div className="block shadow appearance-none border w-32 cursor-pointer text-lg text-center rounded p-5 my-5 transition duration-500 ease-in-out hover:border-primary " 
                            id="img" onClick={() => mainImg.current.click()}>{!(image)?'Upload':'Replace'}</div> 
 */}
                        {(err) && <div className='w-50 sm:-m-12'>
                            <Err errMsg={err} />
                        </div>}

                        {(loading) && <div className='w-50 sm:-m-12'>
                            <Loading />
                        </div>}

                        <button  className={`${(loading || loadingFetch)?'cursor-not-allowed':''} shadow appearance-none bg-primary my-4 text-white rounded p-2 w-full hover:text-primary hover:bg-white transition duration-500 ease-in-out`} type="submit">
                            Update
                        </button>
                </form>}
                {!data && (errFetch?<Err errMsg={errFetch} />:<Loading />)}
            </div>
            <Footer />
        </div>
    );
}
 
export default Edit;