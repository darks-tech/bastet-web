import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Account = () => {
  const [isFocus, setFocus] = useState(false);

  const onBlur = () => {
    console.log('wasd')
  };

  return (
    <div className='account'>
      <input id='header-account' type='checkbox' />
      <label htmlFor='header-account'>
        <img  onFocus={onBlur} src='/avatars/gow.png' alt='ava' />
      </label>

      <div className='details'>
        <Link to='/profile'>Парақша</Link>
        <Link to='/profile'>Баптаулар</Link>
      </div>
    </div>
  );
};