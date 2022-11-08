import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Route';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto ' data-theme="garden">
      <RouterProvider router={routes}>

      </RouterProvider>

    </div>
  );
}

export default App;
