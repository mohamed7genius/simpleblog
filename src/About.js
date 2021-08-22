import Footer from "./components/Footer"
import Header from "./components/Header"

const About = () => {
    return (
        <div className="about">
            <Header />
            <div className="container m-auto p-10 min-h-screen">
                <h2 className='text-3xl font-black text-primary transition duration-500 ease-in-out mb-10'>About</h2>
                <div className="content text-lg">
                    <p>This is a demo project.</p>
                    <p>This is made by Mohamed Ashraf (GENIUS).</p>
                    <p>It's just sample project , so don't care much about the design</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default About;