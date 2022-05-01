import Head from 'next/head'
import Link from 'next/link';
import { LogOut, CreditCard, Archive, DollarSign  } from 'react-feather';
import LoanChart from '../../components/loan/loan-chart';
import Input from '../../components/ui/Input';
import Menu from '../../components/ui/Menu';
import StatCard from '../../components/ui/StatCard';
import Table from '../../components/ui/Table';

export default function Loans() {
  return (
    <div className='flex flex-row'>
      <Menu />
      <main className='flex flex-col w-[78%] ml-[1%] h-screen px-5 overflow-y-scroll'>
        <div className='flex flex-row w-full pl-5 pr-14 justify-between'>
            <h1 className='text-base font-bold mb-10 mt-5'>LOANS</h1>
            <div className='flex flex-row float-right mt-5 mb-10'>
                <LogOut name='log-out' size={20}  />
            </div>
        </div>
        <div className='w-full pl-5 pr-14'>
            <Table columns={['TOTAL AMOUNT', 'DUE AMOUNT', 'DUE DATE', 'STATUS']} data={[
              {id: '1', ['TOTAL AMOUNT']: '2000', ['DUE AMOUNT']: <span className='bg-[#FAE9CC] py-2 px-4 rounded-full w-full'>$ 5000</span>,['DUE DATE']: '7-dec-2020', ['STATUS']: <span className='bg-[#CCF5DA] py-2 px-4 rounded-full w-full'>Pending</span>},
              {id: '1', ['TOTAL AMOUNT']: '2000', ['DUE AMOUNT']: <span className='bg-[#FAE9CC] py-2 px-4 rounded-full w-full'>$ 5000</span>,['DUE DATE']: '7-dec-2020', ['STATUS']: <span className='bg-[#EBC7BF] py-2 px-4 rounded-full w-full'>Rejected</span>},
              {id: '1', ['TOTAL AMOUNT']: '2000', ['DUE AMOUNT']: <span className='bg-[#FAE9CC] py-2 px-4 rounded-full w-full'>$ 5000</span>,['DUE DATE']: '7-dec-2020', ['STATUS']: <span className='bg-[#CCF5DA] py-2 px-4 rounded-full w-full'>Pending</span>},
              {id: '1', ['TOTAL AMOUNT']: '2000', ['DUE AMOUNT']: <span className='bg-[#FAE9CC] py-2 px-4 rounded-full w-full'>$ 5000</span>,['DUE DATE']: '7-dec-2020', ['STATUS']: <span className='bg-[#EBC7BF] py-2 px-4 rounded-full w-full'>Rejected</span>},
              {id: '1', ['TOTAL AMOUNT']: '2000', ['DUE AMOUNT']: <span className='bg-[#FAE9CC] py-2 px-4 rounded-full w-full'>$ 5000</span>,['DUE DATE']: '7-dec-2020', ['STATUS']: <span className='bg-[#CCF5DA] py-2 px-4 rounded-full w-full'>Pending</span>},
              {id: '1', ['TOTAL AMOUNT']: '2000', ['DUE AMOUNT']: <span className='bg-[#FAE9CC] py-2 px-4 rounded-full w-full'>$ 5000</span>,['DUE DATE']: '7-dec-2020', ['STATUS']: <span className='bg-[#EBC7BF] py-2 px-4 rounded-full w-full'>Rejected</span>},
              {id: '1', ['TOTAL AMOUNT']: '2000', ['DUE AMOUNT']: <span className='bg-[#FAE9CC] py-2 px-4 rounded-full w-full'>$ 5000</span>,['DUE DATE']: '7-dec-2020', ['STATUS']: <span className='bg-[#CCF5DA] py-2 px-4 rounded-full w-full'>Pending</span>},
              {id: '1', ['TOTAL AMOUNT']: '2000', ['DUE AMOUNT']: <span className='bg-[#FAE9CC] py-2 px-4 rounded-full w-full'>$ 5000</span>,['DUE DATE']: '7-dec-2020', ['STATUS']: <span className='bg-[#EBC7BF] py-2 px-4 rounded-full w-full'>Rejected</span>},
              {id: '1', ['TOTAL AMOUNT']: '2000', ['DUE AMOUNT']: <span className='bg-[#FAE9CC] py-2 px-4 rounded-full w-full'>$ 5000</span>,['DUE DATE']: '7-dec-2020', ['STATUS']: <span className='bg-[#CCF5DA] py-2 px-4 rounded-full w-full'>Pending</span>},
              {id: '1', ['TOTAL AMOUNT']: '2000', ['DUE AMOUNT']: <span className='bg-[#FAE9CC] py-2 px-4 rounded-full w-full'>$ 5000</span>,['DUE DATE']: '7-dec-2020', ['STATUS']: <span className='bg-[#EBC7BF] py-2 px-4 rounded-full w-full'>Rejected</span>},
            
            
            ]} />
        </div>
      </main>

    </div>
  )
}
