import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Termek = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [nev, setNev] = useState<string>('');
    const submit = () => {
        alert("Clicked")
        navigate('/elso')
    };
    return (
        <>
            <h1>Termék ID: {id}</h1>

            <h1>Termék név: {nev}</h1>
            <div>
                <input type="text" onChange={(e) => setNev(e.target.value)}/>
                <button onClick={submit}>Start</button>
            </div>
        </>
    );
};

export default Termek;
