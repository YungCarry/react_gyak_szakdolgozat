import { useParams } from "react-router-dom";

const Termek = () => {
    const {id} = useParams();
    return <h1>Termek ID: {id} </h1>
};

export default Termek;