
export default function Test() {   
    
    const { data, loading, error, fetchData } = useAxios();

    const handleClick = () => {
        fetchData('user/login', 'GET', null , null );
        console.log(data)       
    }
    

    return (
        <div>
            <div className="px-2 py-1 bg-emerald-700 text-white mt-3" onClick={handleClick}>
                NENUCO JOVANOV
            </div>
        </div>
    );
};