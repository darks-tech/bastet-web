import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Index } from 'pages';
import { Root } from 'components/Root';

export const App = () => {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Root />,
      errorElement: <div>error</div>,

      children: [
        { path: '', element: <Index /> }
      ],
    }
  ]);

  return <RouterProvider router={router} />
};