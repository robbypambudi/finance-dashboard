import { Dialog, Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { BiTask } from 'react-icons/bi';
import { GrTransaction } from 'react-icons/gr';
import { FaBoxes } from 'react-icons/fa';
import { HiViewGrid, HiUser, HiXCircle, HiLogout } from 'react-icons/hi';
import { AiFillContacts } from 'react-icons/ai';
import { AiOutlineTransaction } from 'react-icons/ai';
import { FcInTransit } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const navigation = [
  {
    name: 'Dashboard',
    href: '/',
    icon: HiViewGrid,
    current: false,
    dropdown: false,
  },

  {
    name: 'Transaksi Kas/Bank',
    href: '/pengeluaran/gudang',
    icon: AiOutlineTransaction,
    current: false,
    dropdown: false,
    dropdownList: [
      {
        name: 'Pengeluaran Gudang',
        href: '/pengeluaran/gudang',
        icon: GrTransaction,
      },
      {
        name: 'Pengeluaran Kantor',
        href: '/pengeluaran/kantor',
        icon: GrTransaction,
      },
      {
        name: 'Pengeluaran Cleaning Servis',
        href: '/pengeluaran/cs',
        icon: GrTransaction,
      },
    ],
  },
  {
    name: 'Transaksi Barang',
    href: '/transaksi',
    icon: FcInTransit,
    current: false,
    dropdown: true,
    dropdownList: [
      {
        name: 'Dashboard Barang ',
        href: '/transaksi/barang',
        icon: GrTransaction,
        dropdown: false,
      },
      {
        name: 'Transaksi Penjualan ',
        href: '/transaksi/penjualan',
        dropdown: true,
        dropdownList: [
          {
            name: 'Pesanan Penjualan',
            href: '/pesanan/penjualan',
            dropdown: false,
          },
          {
            name: 'Pembuatan PO',
            href: '/po',
            dropdown: false,
          },
          {
            name: 'Pengiriman Pesanan',
            href: '/pengiriman/barang',
            dropdown: false,
          },
          {
            name: 'Faktur Penjualan',
            href: '/faktur/penjualan',
            dropdown: false,
          },
          {
            name: 'Pembayaran',
            href: '/pembayaran/penjualan',
            dropdown: false,
          },
        ],
        icon: GrTransaction,
      },
      {
        name: 'Transaksi Pembelian',
        href: '/transaksi/pembelian',
        dropdown: true,
        dropdownList: [
          {
            name: 'Pesanan Pembelian',
            href: '/pesanan/pembelian',
            dropdown: false,
          },

          {
            name: 'Penerimaan Barang',
            href: '/surat/jalan',
            dropdown: false,
          },
          {
            name: 'Faktur Pembelian',
            href: '/faktur/pembelian',
            dropdown: false,
          },
          {
            name: 'Pembayaran',
            href: '/pembayaran/pembelian',
            dropdown: false,
          },
          {
            name: 'Retur Pembelian',
            href: '/retur/pembelian',
            dropdown: false,
          },
          {
            name: 'History Pembelian',
            href: '/history/pembelian',
            dropdown: false,
          },
        ],
        icon: GrTransaction,
      },
    ],
  },

  // Laporan
  {
    name: 'Laporan',
    href: '/laporan',
    icon: BiTask,
    dropdown: true,
    dropdownList: [
      {
        name: 'Laporan Transaksi',
        href: '/laporan/transaksi',
        icon: GrTransaction,
        current: false,
        dropdown: false,
      },
      {
        name: 'Laporan Laba Rugi',
        href: '/laporan/laba_rugi',
        icon: GrTransaction,
        current: false,
        dropdown: false,
      },
      {
        name: 'Laporan Hutang Piutang',
        href: '/laporan/hutang_piutang',
        icon: GrTransaction,
        current: false,
        dropdown: false,
      },
      {
        name: 'Laporan Neraca Saldo',
        href: '/laporan/neraca_saldo',
        icon: GrTransaction,
        current: false,
        dropdown: false,
      },
      {
        name: 'Laporan Jurnal Umum',
        href: '/laporan/jurnal_umum',
        icon: GrTransaction,
        current: false,
        dropdown: false,
      },
    ],
  },
  {
    name: 'Kontak',
    href: '/kontak',
    icon: AiFillContacts,
    dropdown: false,
  },
  {
    name: 'Stok Barang',
    href: '/stock-barang',
    icon: FaBoxes,
    dropdown: false,
  },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen, nav }) {
  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as='div'
          static
          className='fixed inset-0 z-40 flex lg:hidden'
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative flex flex-col flex-1 w-full max-w-[200px] pt-5 pb-4 dashboard'>
              <Transition.Child
                as={Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='absolute top-0 right-0 pt-2 -mr-12'>
                  <button
                    className='flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className='sr-only'>Close sidebar</span>
                    <HiXCircle
                      className='w-6 h-6 text-white'
                      aria-hidden='true'
                    />
                  </button>
                </div>
              </Transition.Child>
              <div className='flex items-center flex-shrink-0 px-4'></div>
              <nav
                className='flex-shrink-0 h-full mt-5 overflow-y-auto divide-y divide-dark-700'
                aria-label='Sidebar'
              >
                <div className='px-2 space-y-1 flex flex-col'>
                  {/*
                   */}
                  {navigation.map((item, index) => {
                    if (item.dropdown) {
                      return null;
                    } else {
                      return (
                        <Link key={index} to={item.href}>
                          <div
                            className={`p-3 rounded-md ${
                              nav === item.name
                                ? 'bg-white text-dashboard-100'
                                : 'text-white'
                            }`}
                          >
                            <item.icon size={24} key={item.name} />
                            {item.name}
                          </div>
                        </Link>
                      );
                    }
                  })}
                </div>
              </nav>
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-14' aria-hidden='true'>
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      <div className='hidden h-full lg:flex lg:flex-shrink-0'>
        <div className='flex flex-col w-64'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex flex-col flex-grow pt-5 pb-4 overflow-y-auto dashboard'>
            <div className='flex items-center flex-shrink-0 px-4 justify-center'></div>
            <div className='border-y border-y-white border-r border-r-white w-[75%] text-white flex items-center mx-1'>
              <div>
                <HiUser size={32} />
              </div>
              <div className='text-sm font-secondary'>
                <p>Robby Pambudi</p>
                <p>CEO PT Berdiri Sendiri</p>
              </div>
            </div>
            <nav
              className='flex flex-col flex-1 mt-5 overflow-y-auto divide-y divide-gray-600'
              aria-label='Sidebar'
            >
              <div className='px-2 space-y-1 flex flex-col'>
                {/*
                 */}
                {navigation.map((items, index) => {
                  if (items.dropdown) {
                    return (
                      <>
                        <Menu
                          className='  flex items-start gap-x-3 flex-col w-full '
                          as='div'
                        >
                          <Menu.Button
                            className={
                              'flex justify-start  rounded-md p-3 w-full gap-x-3 hover:bg-white text-white hover:text-black'
                            }
                          >
                            <items.icon size={24} key={items.name} />
                            {items.name}
                          </Menu.Button>
                          <Transition
                            enter='transition duration-100 ease-out'
                            enterFrom='transform scale-95 opacity-0'
                            enterTo='transform scale-100 opacity-100'
                            leave='transition duration-75 ease-out'
                            leaveFrom='transform scale-100 opacity-100'
                            leaveTo='transform scale-95 opacity-0'
                          >
                            <Menu.Items className='flex flex-col p-3 gap-y-2 w-full'>
                              {items.dropdownList.map((item, index) => {
                                if (!item.dropdown) {
                                  return (
                                    <Menu.Item>
                                      <Link
                                        to={item.href}
                                        className='bg-white px-2 py-1 rounded-md'
                                      >
                                        {item.name}
                                      </Link>
                                    </Menu.Item>
                                  );
                                } else {
                                  return (
                                    <Menu
                                      as='div'
                                      className='  flex items-start gap-x-3 flex-col '
                                    >
                                      <Menu.Button
                                        className={
                                          'flex justify-start  rounded-md px-2 py-1 w-full gap-x-3 hover:bg-white text-white hover:text-black'
                                        }
                                      >
                                        {item.name}
                                      </Menu.Button>
                                      <>
                                        <Transition
                                          enter='transition duration-100 ease-out'
                                          enterFrom='transform scale-95 opacity-0'
                                          enterTo='transform scale-100 opacity-100'
                                          leave='transition duration-75 ease-out'
                                          leaveFrom='transform scale-100 opacity-100'
                                          leaveTo='transform scale-95 opacity-0'
                                        >
                                          <Menu.Items className='flex flex-col p-3 gap-y-2'>
                                            {item.dropdownList.map(
                                              (it, index) => (
                                                <Menu.Item>
                                                  <Link
                                                    to={it.href}
                                                    className='bg-white px-2 py-1 rounded-md'
                                                  >
                                                    {it.name}
                                                  </Link>
                                                </Menu.Item>
                                              ),
                                            )}
                                          </Menu.Items>
                                        </Transition>
                                      </>
                                    </Menu>
                                  );
                                }
                              })}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </>
                    );
                  } else {
                    return (
                      <Link key={index} to={items.href}>
                        <div
                          className={`p-3 rounded-md flex items-center gap-x-3 ${
                            nav === items.name
                              ? 'bg-white text-dashboard'
                              : 'text-white'
                          }`}
                        >
                          <items.icon size={24} key={items.name} />
                          {items.name}
                        </div>
                      </Link>
                    );
                  }
                })}
              </div>
            </nav>
            <div className='bottom-10 -translate-y-6'>
              {/* Hr */}
              <div className='flex items-center  px-3 md:px-4 lg:px-6 gap-x-3'>
                <HiLogout size={24} className='text-white' />
                <p className='text-white font-secondary hover:text-gray-200 cursor-pointer'>
                  Sign Out
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
