import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiClient from '../api/apiClient';


const Termek = () => {
    const { id } = useParams();
    const [data, setData] = useState<Termek>();
    useEffect(() => {
        apiClient
            .get(`/termekek/${id}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((e) => console.error(e));
    }, []);
    return (
        <>
            
        </>
    );
};

export default Termek;
function useEffect(arg0: () => void, arg1: never[]) {
    throw new Error('Function not implemented.');
}

