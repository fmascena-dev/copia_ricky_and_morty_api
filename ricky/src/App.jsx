import './App.scss';
import { GrStatusGoodSmall } from 'react-icons/gr';
import { useEffect, useState } from 'react';
//importar o axios
import axios from 'axios';
import Header from './Components/Header';
import Svg from './Components/Svg';
import Footer from './Components/Footer';
//axios é uma biblioteca JS que facilita as requisições HTTP - GET

export default function App() {
  const [info, setInfo] = useState([]);

  const getDados = async () => {
    const dados = await axios.get('https://rickandmortyapi.com/api/character');
    setInfo(dados.data.results);
    console.log(dados);
  };

  useEffect(() => {
    getDados();
  }, []);

  const getStatusClass = (characterStatus) => {
    switch (characterStatus) {
      case 'Alive':
        return 'status-alive';
      case 'Dead':
        return 'status-dead';
      default:
        return 'status-unknown';
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="titulo">
          <h1>The Rick and Morty API</h1>
          <Svg />
        </section>
        <section className="main_principal">
          {info.map((item) => (
            <div key={item.id} className="boxes">
              <div className="cards">
                <img src={item.image} alt={`${item.name}`} />
                <div className="texts">
                  <p>
                    <h2>{item.name}</h2>
                    <span>
                      <GrStatusGoodSmall
                        className={`status-icon ${getStatusClass(item.status)}`}
                      />{' '}
                      {item.status} - {item.species}
                    </span>
                  </p>
                  <p>
                    <span>Gender:</span> {item.gender}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
