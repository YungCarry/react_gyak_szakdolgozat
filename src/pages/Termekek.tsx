import { useEffect, useState } from 'react';
import apiClient from '../api/apiClient';
import {Termek} from '../types/Termek';

const Termekek = () => {
    const [data, setData] = useState<Array<Termek>>();
    useEffect(() => {
        apiClient
            .get('/termekek')
            .then((res) => {
                console.log(res.data);
            })
            .catch((e) => console.error(e));
    }, []);

    return (
        <>
            <h1>Termékek</h1>
            <table>
                <tbody>
                    {data?.map((i: Termek)=> (<tr key={i.id}>
                        <td>{i.nev}</td>
                        <td>{i.ar}</td>
                    </tr>))}
                </tbody>
            </table>
            
        </>
    );
};

export default Termekek;
