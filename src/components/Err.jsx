import x from '../assets/x.svg';

const Err = ({errMsg}) => {
    return (
        <div className="err w-full p-10 flex justify-center">
            <p className='flex items-center align-center justify-center bg-red-300 px-5 py-1.5 rounded'>
                <img src={x} alt="error" className='mr-1 mt-1'/>
                <span className='text-2xl text-gray-700'>{errMsg}</span>
            </p>
        </div>
    );
}
 
export default Err;