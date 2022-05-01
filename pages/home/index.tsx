import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Home as HomeIcon, CreditCard, User, Feather, Archive, LogOut  } from 'react-feather';
import LoanForm from '../../components/loan/loan-form';
import Input from '../../components/ui/Input';
import Menu from '../../components/ui/Menu';
import StatCard from '../../components/ui/StatCard';
import Table from '../../components/ui/Table';
import { getUser, logout } from '../../utils/getUser';


export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const user = getUser();
    if(!user) router.push('/');
    })
  return (
    <div className='flex flex-row'>
      <Menu />
      <main className='flex flex-row justify-between w-[78%] ml-[1%] h-screen px-2'>
        <div className='w-[60%] h-full py-5 px-10'>
          <h1 className='text-base font-bold mb-10'>DASHBOARD</h1>
          <div className='grid gap-16 grid-cols-2 w-full'>
            <StatCard Icon={CreditCard} title="TOTAL LOAN" color='white' content={'$12 k'} />
            <StatCard Icon={CreditCard} title="TOTAL PAID" color='white' content={'$1200'}  />
          </div>
          <div className='mt-10'>
            <Table columns={['TOTAL AMOUNT', 'DUE AMOUNT', 'DUE DATE']} data={[
              {id: '1', ['TOTAL AMOUNT']: '2000', ['DUE AMOUNT']: <span className='bg-[#FAE9CC] py-2 px-4 rounded-full w-full'>$ 5000</span>, ['DUE DATE']: <span className='bg-[#CCF5DA] py-2 px-4 rounded-full w-full'>28-Dec-2022</span>},
              {id: '1', ['TOTAL AMOUNT']: '2000', ['DUE AMOUNT']: <span className='bg-[#FAE9CC] py-2 px-4 rounded-full w-full'>$ 5000</span>, ['DUE DATE']: <span className='bg-[#CCF5DA] py-2 px-4 rounded-full w-full'>28-Dec-2022</span>},
              {id: '1', ['TOTAL AMOUNT']: '2000', ['DUE AMOUNT']: <span className='bg-[#FAE9CC] py-2 px-4 rounded-full w-full'>$ 5000</span>, ['DUE DATE']: <span className='bg-[#EBC7BF] py-2 px-4 rounded-full w-full'>28-Dec-2022</span>},
              {id: '1', ['TOTAL AMOUNT']: '2000', ['DUE AMOUNT']: <span className='bg-[#FAE9CC] py-2 px-4 rounded-full w-full'>$ 5000</span>, ['DUE DATE']: <span className='bg-[#CCF5DA] py-2 px-4 rounded-full w-full'>28-Dec-2022</span>},
              {id: '1', ['TOTAL AMOUNT']: '2000', ['DUE AMOUNT']: <span className='bg-[#FAE9CC] py-2 px-4 rounded-full w-full'>$ 5000</span>, ['DUE DATE']: <span className='bg-[#EBC7BF] py-2 px-4 rounded-full w-full'>28-Dec-2022</span>},
              {id: '1', ['TOTAL AMOUNT']: '2000', ['DUE AMOUNT']: <span className='bg-[#FAE9CC] py-2 px-4 rounded-full w-full'>$ 5000</span>, ['DUE DATE']: <span className='bg-[#CCF5DA] py-2 px-4 rounded-full w-full'>28-Dec-2022</span>},
              {id: '1', ['TOTAL AMOUNT']: '2000', ['DUE AMOUNT']: <span className='bg-[#FAE9CC] py-2 px-4 rounded-full w-full'>$ 5000</span>, ['DUE DATE']: <span className='bg-[#EBC7BF] py-2 px-4 rounded-full w-full'>28-Dec-2022</span>},
            ]} />
          </div>
        </div>
        <div className='w-[37%] pr-10'>
        <div className='flex flex-row float-right mt-5 mb-10'>
            <LogOut onClick={() => { logout(router) }} size={20} className="cursor-pointer"  />
        </div>
        <div>
          <StatCard 
            height='h-[240px]' 
            bg="bg-[#FFF6E7]" 
            color='#14213D' 
            separatorColor='bg-[#14213D]'
            Icon={Archive}
            alignCenter={false}
            title="TOTAL DUE PAYMENT"
            content="$12.6 K"
            textStyle="text-[55px] font-bold my-auto ml-5"
            footer={(
              <div className='flex flex-row justify-between mt-auto h-[80px] items-center rounded-b-[20px] bg-[#FEE5BC] px-5'>
                <p className='text-[18px] font-extrabold'>$ 200 k</p>
                <p className='text-[15px] font-medium'>DUE THIS MONTH</p>
              </div>
            )} />
          
          <div className='mt-8 bg-[#FFF6E7] rounded-[15px] px-5 py-7  text-sm font-bold'>
              <LoanForm />
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}
