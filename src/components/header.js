
// FUNCTIONAL COMPONENT salah satu cara render isi halaman

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
