import Loading from "./components/Loading";
import Post from "./components/Post";
import Err from './components/Err';

import useFetch from "./useFetch";

const Blog = () => {

    const {data , loading , err} = useFetch(`${process.env.REACT_APP_API_URL}.json`);

    return (
        <div className="posts container m-auto pb-10 px-5 min-h-screen">
            {loading && <Loading />}
            {err && <Err errMsg="Sorry There's no posts" />}
            {data && data.map( post => (
                <Post 
                    key = {post.id}
                    title = {post.title}
                    link = {`/${post.id}`}
                    image = {post.img}
                    snippet = {post.snippet}
                />
            ))}
        </div>
    );
}
 
export default Blog;