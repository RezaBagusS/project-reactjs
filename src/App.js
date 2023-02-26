
import Header from './components/header';
import Kelas from './components/kelas';

function App() {
  return (
    <div>
      <h1> HALO SAYA DI APP</h1>
      <Header name="Reza Bagus" list="1"/>
      <Header name="Jokowi JK" list="2"/>
      <hr></hr>
      <Kelas />
    </div>
  );
}

export default App;
