import { useNavigate } from "react-router-dom";

const Deskripsi = () => {

    const navigate = useNavigate();

    return (
        <div>
            <p>
                Halo ini adalah deskripsi biodata saya
            </p>
            <button onClick={() => navigate('/')}>balik ke home</button>
        </div>
    )
}

export default Deskripsi;