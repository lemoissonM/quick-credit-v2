import React from "react";
import Link from 'next/link';
import { Home as HomeIcon, CreditCard, User  } from 'react-feather'
import { useRouter } from "next/router";

const menus = [
    {link: '/', title: 'HOME', icon: <HomeIcon size={17} className="mr-5"/>, active: true},
    {link: '/loans', title: 'LOANS', icon: <CreditCard size={17} className="mr-5"/>},
    {link: '/profile', title: 'PROFILE', icon: <User size={17} className="mr-5"/>},
  ];

const Menu: React.FC = () => {
    const router = useRouter();
    return (
        <nav className='w-[20%] bg-[#14213D] bg-opacity-5 px-3 pt-5 h-screen'>
        <h1 className='text-lg font-bold mb-10'><CreditCard size={20} className='inline-block mr-2 -mt-1' />QUICK CREDIT</h1>
        <ul className="bg-[#14213D] h-fit bg-opacity-[0.06] w-full py-10 rounded-[10px] px-2">
          {menus.map((menu, index) => <Link href={menu.link} key={`${index}-menu` } >
              <a className={`flex flex-row text-sm w-[85%] mt-5 px-3 py-2 rounded-[15px] font-bold ${ router.route === menu.link ? 'bg-black bg-opacity-10' : ''}`}>{menu.icon} {menu.title}</a>
            </Link> )}
        </ul>
      </nav>
    )
}

export default Menu;