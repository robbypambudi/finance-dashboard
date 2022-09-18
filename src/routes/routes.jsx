import Login from '../pages/Auth/Login';
import Dashboard from '../pages/Dashboard';
import InvoiceBarang from '../pages/Invoice/InvoiceBarang';
import Kontak from '../pages/Kontak/Kontak';
import HutangPiutang from '../pages/Laporan/HutangPiutang';
import JurnalUmum from '../pages/Laporan/JurnalUmum';
import LabaRugi from '../pages/Laporan/LabaRugi';
import NeracaSaldo from '../pages/Laporan/NeracaSaldo';
import StokBarang from '../pages/Stok/Barang';
import TransaksiBarang from '../pages/Transaksi/TransaksiBarang';
import TransaksiUmum from '../pages/Transaksi/TransaksiUmum';
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

  // Laporan
  {
    path: '/laporan/neraca_saldo',
    element: (
      <AuthRoute>
        <NeracaSaldo />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/laporan/laba_rugi',
    element: (
      <AuthRoute>
        <LabaRugi />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/laporan/hutang_piutang',
    element: (
      <AuthRoute>
        <HutangPiutang />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/transaksi/umum',
    element: (
      <AuthRoute>
        <TransaksiUmum />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/transaksi/barang',
    element: (
      <AuthRoute>
        <TransaksiBarang />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/laporan/jurnal_umum',
    element: (
      <AuthRoute>
        <JurnalUmum />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/stock-barang',
    element: (
      <AuthRoute>
        <StokBarang />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/kontak',
    element: (
      <AuthRoute>
        <Kontak />
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

  // Invoice Barang
  {
    path: '/invoice/barang/:id',
    element: (
      <AuthRoute>
        <InvoiceBarang />
      </AuthRoute>
    ),
    visible: true,
  },
];

export { routes };
