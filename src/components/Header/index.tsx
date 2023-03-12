import { Account } from './Account';
import { Link } from 'react-router-dom';
import 'css/components/header.css';

export const Header = () => {
  return (
    <header>
      <div className='header container'>
        <div className='logo'>BASTET <span>TV</span></div>
        <nav>
          <Link to='/'>Аниме</Link>
          <Link to='/'>Фильмдер</Link>
        </nav>
        <Account />
      </div>
    </header>
  );
};