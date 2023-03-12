import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import 'css/app.css';

export const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};