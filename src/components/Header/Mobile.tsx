export const Mobile = () => {
  return (
    <div className='mobile'>
      <input id='toggle' type='checkbox' />
      <label htmlFor='toggle'>
        <span></span>
      </label>

      <div className='mobile-content'>
        content
      </div>
    </div>
  );
};