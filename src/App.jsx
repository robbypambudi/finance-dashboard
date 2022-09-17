import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/';
function App() {
  return (
    <>
      <Toaster
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: '8px',
            background: '#333',
            color: '#fff',
          },
        }}
      />
      <AuthProvider>
        <BrowserRouter
          // eslint-disable-next-line no-undef
          basename={process.env.PUBLIC_URL}
          forceRefresh={true}
        >
          <Routes />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
