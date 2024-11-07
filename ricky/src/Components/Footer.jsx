import './Footer.scss';
import { GrStatusGoodSmall } from 'react-icons/gr';
import { FaGithub, FaTwitter, FaHeart, FaReact } from 'react-icons/fa';
import { TbBrandVite } from 'react-icons/tb';
import Netlify from './Netlify';
import Stellate from './Stellate';

export default function Footer() {
  return (
    <footer>
      <section>
        <ul>
          <li>
            <a href="https://rickandmortyapi.com/api/character">
              CHARACTERS: 826
            </a>
          </li>
          <li>
            <a href="https://rickandmortyapi.com/api/location">
              LOCATIONS: 126
            </a>
          </li>
          <li>
            <a href="https://rickandmortyapi.com/api/episode">EPISODES: 51</a>
          </li>
        </ul>
      </section>
      <section className="redes">
        <p>
          <a className="status" href="https://status.rickandmortyapi.com">
            SERVER STATUS
          </a>{' '}
          <GrStatusGoodSmall className="icon" />
        </p>
        <div className="networking">
          <a href="https://www.netlify.com">
            <Netlify />
          </a>
          <a href="https://stellate.co/?ref=powered-by">
            <Stellate />
          </a>
        </div>
        <div className="redes_sociais">
          <a href="https://github.com/afuh/rick-and-morty-api">
            <FaGithub />
          </a>
          <a href="https://x.com/rickandmortyapi?mx=2">
            <FaTwitter />
          </a>
          <a href="https://rickandmortyapi.com/support-us/">
            <FaHeart />
          </a>
        </div>
        <p className="autoria">
          <FaReact />
          <TbBrandVite /> by{' '}
          <a href="https://www.linkedin.com/in/felipe-mascena/">
            Felipe Mascena
          </a>{' '}
          - React Developer - 11/2024
        </p>
      </section>
    </footer>
  );
}
