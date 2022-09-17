import DashboardShellAdmin from '../layouts/admin/DashboarsShellAdmin';
import Chart from 'react-apexcharts';

export default function Dashboard() {
  const ChartData = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  return (
    <>
      <DashboardShellAdmin nav={'Dashboard'}>
        <div className='px-4 py-2'>
          <nav>
            <p className='font-primary font-bold text-3xl py-2'>Dashboard</p>
            <div class='relative flex  items-center'>
              <div class='flex-grow border-t border-gray-400'></div>
              <span class='flex-shrink mx-4 text-gray-400'>Menu</span>
              <div class='flex-grow border-t border-gray-400'></div>
            </div>
          </nav>
          <div className='grid grid-cols-2 gap-4 font-secondary mt-10'>
            <div className='bg-white border border-gray-200 shadow-md  '>
              <div className='flex justify-between p-3'>
                <h2>Kas dan Bank</h2>
                {/* Uang */}
                Rp. 20.000.000
              </div>
              <Chart
                options={ChartData.options}
                series={ChartData.series}
                type='bar'
                width='96%'
              />
            </div>
            <div className='bg-white border border-gray-200 shadow-md '>
              <div className='flex justify-between p-3'>
                <h2>Laba Rugi</h2>
                {/* Uang */}
                Rp. 20.000.000
              </div>
              <Chart
                options={ChartData.options}
                series={ChartData.series}
                type='bar'
                width='96%'
              />
            </div>
            <div className='bg-white border border-gray-200 shadow-md '>
              <div className='flex justify-between p-3'>
                <h2>Hutang</h2>
                {/* Uang */}
                Rp. 20.000.000
              </div>
              <Chart
                options={ChartData.options}
                series={ChartData.series}
                type='bar'
                width='96%'
              />
            </div>
            <div className='bg-white border border-gray-200 shadow-md '>
              <div className='flex justify-between p-3'>
                <h2>Piutang</h2>
                {/* Uang */}
                Rp. 20.000.000
              </div>
              <Chart
                options={ChartData.options}
                series={ChartData.series}
                type='bar'
                width='96%'
              />
            </div>
          </div>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
