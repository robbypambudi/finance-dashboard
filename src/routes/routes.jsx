import Login from '../pages/Auth/Login';
import Dashboard from '../pages/Dashboard';
import InvoiceBarang from '../pages/Invoice/InvoiceBarang';
import InvoicePenjual from '../pages/Invoice/InvoicePenjual';
import Kontak from '../pages/Kontak/Kontak';
import HutangPiutang from '../pages/Laporan/HutangPiutang';
import JurnalUmum from '../pages/Laporan/JurnalUmum';
import LabaRugi from '../pages/Laporan/LabaRugi';
import NeracaSaldo from '../pages/Laporan/NeracaSaldo';
import LaporanTransaksi from '../pages/Laporan/Transaksi';
import StokBarang from '../pages/Stok/Barang';
import FakturPembelian from '../pages/Transaksi/Barang/FakturPembelian';
import FakturPenjualan from '../pages/Transaksi/Barang/FakturPenjualan';
import SuratJalan from '../pages/Transaksi/Barang/SuratJalan';
import PengirimanBarang from '../pages/Transaksi/Barang/PengirimanPesanan';
import PesananPembelian from '../pages/Transaksi/Barang/PesananPembelian';
import PesananPenjualan from '../pages/Transaksi/Barang/PesananPenjualan';
import DashboardBarang from '../pages/Transaksi/Dashboard/Barang';
import TranskasiBarangEdit from '../pages/Transaksi/Dashboard/Edit';
import TransaksiBarang from '../pages/Transaksi/TransaksiBarang';
import TransaksiPembelian from '../pages/Transaksi/TransaksiPembelian';
import TransaksiPenjualan from '../pages/Transaksi/TransaksiPenjualan';
import TransaksiUmum from '../pages/Transaksi/Umum/TransaksiUmum';
import AuthRoute from './AuthRoute';
import GuestRoute from './GuestRoute';
import DetailSuratJalan from '../pages/Transaksi/Barang/DetailSuratJalan';
import PembayaranPembelian from '../pages/Transaksi/Barang/PembayaranPembelian';
import PembayaranPembelianDetail from '../pages/Transaksi/Barang/PembayaranPembelianDetail';
import HistoryPembelian from '../pages/Transaksi/Barang/HistoryPembelian';
import FakturPembelianDetail from '../pages/Transaksi/Barang/FakturPembelianDetail';
import PengirimanPesananDetail from '../pages/Transaksi/Barang/PengirimanPesananDetail';
import PembayaranPenjualan from '../pages/Transaksi/Barang/PembayaranPenjualan';
import FakturPenjualanDetail from '../pages/Transaksi/Barang/FakturPenjualanDetail';

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
    path: '/laporan/transaksi',
    element: (
      <AuthRoute>
        <LaporanTransaksi />
      </AuthRoute>
    ),
    visible: true,
  },

  // Transaksi
  {
    path: '/transaksi',
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
        <DashboardBarang />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/transaksi/penjualan',
    element: (
      <AuthRoute>
        <TransaksiPenjualan />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/pesanan/pembelian',
    element: (
      <AuthRoute>
        <PesananPembelian />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/pesanan/penjualan',
    element: (
      <AuthRoute>
        <PesananPenjualan />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/pembayaran/pembelian',
    element: (
      <AuthRoute>
        <PembayaranPembelian />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/pembayaran/penjualan',
    element: (
      <AuthRoute>
        <PembayaranPenjualan />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/pembayaran/pembelian/:id',
    element: (
      <AuthRoute>
        <PembayaranPembelianDetail />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/history/pembelian',
    element: (
      <AuthRoute>
        <HistoryPembelian />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/pengiriman/barang',
    element: (
      <AuthRoute>
        <PengirimanBarang />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/surat/jalan',
    element: (
      <AuthRoute>
        <SuratJalan />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/surat/jalan/:id',
    element: (
      <AuthRoute>
        <DetailSuratJalan />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/faktur/penjualan',
    element: (
      <AuthRoute>
        <FakturPenjualan />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/faktur/penjualan/:id',
    element: (
      <AuthRoute>
        <FakturPenjualanDetail />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/faktur/pembelian',
    element: (
      <AuthRoute>
        <FakturPembelian />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/faktur/pembelian/:id',
    element: (
      <AuthRoute>
        <FakturPembelianDetail />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/pengiriman/barang',
    element: (
      <AuthRoute>
        <PesananPenjualan />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/pengiriman/barang/:id',
    element: (
      <AuthRoute>
        <PengirimanPesananDetail />
      </AuthRoute>
    ),
    visible: true,
  },

  {
    path: '/transaksi/barang/edit/:id',
    element: (
      <AuthRoute>
        <TranskasiBarangEdit />
      </AuthRoute>
    ),
    visible: true,
  },
  {
    path: '/transaksi/barang/view/:id',
    element: (
      <AuthRoute>
        <TranskasiBarangEdit />
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
  {
    path: '/invoice/penjual/:id',
    element: (
      <AuthRoute>
        <InvoicePenjual />
      </AuthRoute>
    ),
    visible: true,
  },
];

export { routes };
