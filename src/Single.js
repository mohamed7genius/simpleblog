import { useParams } from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Header";
import SinglePost from "./components/SinglePost";
import useFetch from "./useFetch";
import Loading from "./components/Loading";
import Err from './components/Err';

const Single = ({title}) => {
    const id = useParams().id;

    const { data , loading , err } = useFetch(`${process.env.REACT_APP_API_URL}/${id}.json`);

    return (
        <div className="post">
            <Header />
            <div className="container m-auto min-h-screen">
                {loading && <Loading />}
                {err && <Err errMsg={err} />}
                {data && 
                    <SinglePost 
                        title = {data.title}
                        image = {data.img}
                        body = {data.body}
                        id = {id}
                    />
                }
            </div>
            <Footer />
        </div>
    );
}
 
export default Single;