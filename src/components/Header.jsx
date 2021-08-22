import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header className=''>
            <div className="flex-col sm:flex-row container m-auto mb-10 bg-white p-10 flex item-center justify-between content-center border-b-2">
                <NavLink to="/"><h1 className='text-center text-5xl font-black text-primary transform hover:scale-105 transition duration-500 ease-in-out uppercase'>Simple BLOG</h1></NavLink>
                <nav className='mt-10 sm:mt-auto self-center'>
                    <ul className="flex justify-between gap-5 text-lg">
                        <li><NavLink activeClassName="text-primary" exact to="/" className='p-1.5 hover:text-primary transition duration-500 ease-in-out'>Home</NavLink></li>
                        <li><NavLink activeClassName="text-primary" to="/about" className='p-1.5 hover:text-primary transition duration-500 ease-in-out'>About</NavLink></li>
                        <li><NavLink activeClassName="bg-gray-500" to="/create" className='bg-primary text-white rounded p-1.5 hover:text-primary hover:bg-white transition duration-500 ease-in-out'>Create</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
 
export default Header;