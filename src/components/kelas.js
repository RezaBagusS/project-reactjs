import React from "react";

// KARENA INI CLASS COMPONENT, JIKA INGIN MNGAMBIL PROPS MAKA PERLU ADA :

// constructor(props){
//     super(props);
// }

// dan variabelnya ditambah this.variabelnya

class Kelas extends React.Component {
    render () {
        return (
            <div>
                <h1>
                    INI KELAS KOMPONEN
                </h1>
                <marquee>
                    HALO BROTHER!!
                </marquee>
            </div>
        )
    }
}

export default Kelas;