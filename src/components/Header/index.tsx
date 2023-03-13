import { Account } from './Account';
import { Link } from 'react-router-dom';
import 'css/components/header.css';
import { Mobile } from './Mobile';

export const Header = () => {
  return (
    <header>
      <div className='header container'>
        <div className='logo'>BASTET <span>TV</span></div>
        <nav>
          <Link to='/'>Басты</Link>
        </nav>
        <Account />
        <Mobile />
      </div>
    </header>
  );
};