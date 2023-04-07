import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h3>Halo ini NAVBAR di Home</h3>
            <button onClick={() => navigate('/About')}>Pindah ke About</button>
        </div>
    )
}

export default Navbar;