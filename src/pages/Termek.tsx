import { useState } from "react";
import { useParams } from "react-router-dom";

const Termek = () => {
    const {id} = useParams();
    const[nev, setNev] = useState<number>(0);
    return <h1>Termek ID: {id} {nev} </h1>
};

export default Termek;