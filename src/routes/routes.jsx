import Login from '../pages/Auth/Login';
import Dashboard from '../pages/Dashboard';
import Transaksi from '../pages/Transaksi';
import AuthRoute from './AuthRoute';
import GuestRoute from './GuestRoute';

const routes = [
  {
    path: '/',
    element: (
      <AuthRoute>
        <Dashboard />
      </AuthRoute>
    ),
    visible: true,
    exact: true,
  },
  {
    path: '/transaksi',
    element: (
      <AuthRoute>
        <Transaksi />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/login',
    element: (
      <GuestRoute>
        <Login />
      </GuestRoute>
    ),
    visible: true,
  },
];

export { routes };
