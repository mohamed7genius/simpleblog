import { useState , useEffect } from "react";

const useFetch = (url) => {

    const [ data , setData ] = useState(null);
    const [ loading , setLoading ] = useState(true);
    const [ err , setErr ] = useState(null);

    useEffect( () => {
        const abortCont = new AbortController();

        fetch(url , {
            signal: abortCont.signal
        })
            .then(res => {
                if(!res.ok || !res.status === 200){
                    throw Error('Can\'t get the data!');
                }
                return res.json();
            })
            .then( resData => {
                var someArr = [];
                for(const prop in resData){
                    const post = {
                        id: prop,
                        ...resData[prop]
                    };
                    someArr.push(post);
                };
                if(resData.title){
                    setData(resData);
                }else{
                    someArr = someArr.reverse();
                    setData(someArr);
                }
                setErr(null);
                setLoading(false);
            })
            .catch(err => {
                setErr(err.message);
                setLoading(false);
            });

    }, [url]);

    return ({
        data,
        loading,
        err
    });
}
 
export default useFetch;