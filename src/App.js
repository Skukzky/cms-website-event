import './App.css';
import { useEffect } from 'react';

// react-router-dom
import { BrowserRouter } from 'react-router-dom';

// Redux
import { listen } from './redux/listener';

// Router
import { AppRoutes } from './routes';

function App() {
  useEffect(() => {
    listen();
  }, []);

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
