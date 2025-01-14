import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Termek = () => {
    const { id } = useParams();
    const [nev, setNev] = useState<string>('');
    return (
        <>
            <h1>Termék ID: {id}</h1>

            <h1>Termék név: {nev}</h1>
            <div>
                <input type="text" onChange={(e) => setNev(e.target.value)}/>
                <button>Start</button>
            </div>
        </>
    );
};

export default Termek;
