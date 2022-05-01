import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { LogOut, CreditCard, Archive, DollarSign  } from 'react-feather';
import LoanChart from '../../components/loan/loan-chart';
import Menu from '../../components/ui/Menu';
import StatCard from '../../components/ui/StatCard';
import Table from '../../components/ui/Table';
import { getUser, logout } from '../../utils/getUser';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const user = getUser();
    if(user?.role !== 'admin') router.push('/');
  })
  return (
    <div className='flex flex-row'>
      <Menu />
      <main className='flex flex-col justify-between w-[79.5%] ml-[1%] h-screen px-2 overflow-y-scroll'>
        <div className='w-full flex flex-row'>
            <div className='w-[60%] h-full py-5 px-10'>
                <h1 className='text-base font-bold mb-10'>DASHBOARD</h1>
                <div className='grid gap-16 grid-cols-2 w-full'>
                    <StatCard title='TOTAL LOAN' content='$50 k' Icon={CreditCard} />
                    <StatCard title='TOTAL RECOVERED' content='$10.5 k' Icon={CreditCard}/>
                </div>
                <div className='h-[300px] bg-[#FFF6E7] rounded-[10px] p-5 mt-10'>
                    <LoanChart />
                </div>
            </div>
            <div className='w-[37%] pr-10'>
            <div className='flex flex-row float-right mt-5 mb-10'>
                <LogOut className='cursor-pointer' onClick={() => { logout(router) }} size={20}  />
            </div>
            <div>
                <StatCard 
                    height='h-[240px]' 
                    bg="bg-[#FFF6E7]" 
                    color='#14213D' 
                    separatorColor='bg-[#14213D]'
                    alignCenter={false}
                    textStyle="text-[55px] font-bold my-auto ml-5"
                    title='PENDING PAYMENT'
                    Icon={Archive}
                    content='$100 k'
                    footer={(
                    <div className='flex flex-row justify-between mt-auto h-[80px] items-center rounded-b-[20px] bg-[#FEE5BC] px-5'>
                        <p className='text-[18px] font-extrabold'>$ 200 k</p>
                        <p className='text-[15px] font-medium'>DUE THIS MONTH</p>
                    </div>
                    )} />

                <StatCard 
                    height='h-[180px] mt-10' 
                    bg="bg-[#CCF5DA]" 
                    color='#14213D' 
                    title='TOTAL GAINED INTEREST'
                    Icon={DollarSign}
                    content='$50 k'
                    separatorColor='bg-[#14213D]'
                    alignCenter={false}
                    textStyle="text-[55px] font-bold my-auto ml-5"
                />
            </div>
            </div>
        </div>
        <div className='mt-10 w-full px-10 pr-20'>
            <Table columns={['TOTAL AMOUNT', 'DUE AMOUNT', 'DUE DATE', 'STATUS']} data={[
              {id: '1', ['TOTAL AMOUNT']: '2000', ['DUE AMOUNT']: <span className='bg-[#FAE9CC] py-2 px-4 rounded-full w-full'>$ 5000</span>,['DUE DATE']: '7-dec-2020', ['STATUS']: <span className='bg-[#CCF5DA] py-2 px-4 rounded-full w-full'>Pending</span>},
              {id: '1', ['TOTAL AMOUNT']: '2000', ['DUE AMOUNT']: <span className='bg-[#FAE9CC] py-2 px-4 rounded-full w-full'>$ 5000</span>,['DUE DATE']: '7-dec-2020', ['STATUS']: <span className='bg-[#EBC7BF] py-2 px-4 rounded-full w-full'>Rejected</span>},
            ]} />
        </div>
      </main>

    </div>
  )
}
