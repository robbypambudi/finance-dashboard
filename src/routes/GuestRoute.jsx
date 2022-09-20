import Loading from '../components/Loading';
import { useAuthState } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
export default function GuestRoute({ children }) {
  const { authenticated, loading } = useAuthState();
  return (
    <>
      {loading ? (
        <Loading />
      ) : !authenticated ? (
        children
      ) : (
        <Navigate to={'/'} />
      )}
    </>
  );
}
