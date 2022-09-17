import Loading from '../components/Loading';
import { useAuthState } from '../contexts/AuthContext';

export default function AuthRoute({ children }) {
  const { authenticated, loading, user_type } = useAuthState();

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>{loading ? <Loading /> : children}</>
  );
}
