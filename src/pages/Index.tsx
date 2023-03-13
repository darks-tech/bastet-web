import 'css/pages/index.css';

export const Index = () => {
  return (
    <div className='index container'>
      <div className='box'>
        <div className='product'>
          <img src='/posters/aot.webp' alt='poster' />
          <div>Алыптар шабуылы</div>
          <p>сэнен, хорор</p>
        </div>
        <div className='product'>
          <img src='/posters/chainsaw.png' alt='poster' />
          <div>Шынжырлы Ара Адам</div>
          <p>сэнен, хорор</p>
        </div>
      </div>
    </div>
  );
};
