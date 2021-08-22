import Blog from "./Blog";
import Footer from "./components/Footer"
import Header from "./components/Header";

const Home = () => {
    
    return (
        <div className="home">
            <Header />
            <Blog />
            <Footer />
        </div>
    );
}
 
export default Home;