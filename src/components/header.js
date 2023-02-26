
// FUNCTIONAL COMPONENT salah satu cara render isi halaman

// import framework css
// import {elemen yg ingin di import, 2 , 3} from "react-bootstrap";

// import {Nav, Navbar, Container} from "react-bootstrap"; contoh ===

function Header(props) {
    // console.log('Properti kiriman : '+ props.name);
    // console.log('Properti kiriman : '+ props.list);

  return (
    <div>
        <hr></hr>
        <h2>{props.list}. SELAMAT : {props.name}</h2>
        <p>kamu lolos tahap screening</p>
    </div>
  );
}

export default Header;
