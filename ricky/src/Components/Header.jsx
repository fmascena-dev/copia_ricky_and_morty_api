import './Header.scss';
import Icon from './Icon';

export default function Header() {
  return (
    <header>
      <Icon />
      <section>
        <nav>
          <ul>
            <li>
              <a href="https://rickandmortyapi.com/documentation/">Docs</a>
            </li>
            <li>
              <a href="https://rickandmortyapi.com/about/">About</a>
            </li>
            <li>
              <a href="https://rickandmortyapi.com/about/https://rickandmortyapi.com/support-us/" className='support_btn'>SUPPORT US</a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
