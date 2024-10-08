import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/test',
    element: <div>Hello test!</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
