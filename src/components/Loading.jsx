import loading from '../assets/loading.svg';

const Loading = () => {
    return (
        <div className="loading w-full p-10 flex justify-center">
            <p className='flex items-center align-center justify-center'>
                <img src={loading} alt="Loading...." className='animate-spin mr-1 mt-1'/>
                <span className='animate-pulse text-2xl text-gray-700'>Loading</span>
            </p>
        </div>
    );
}
 
export default Loading;