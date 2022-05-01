import React from "react";
import Input from "../../../components/ui/Input";
import { CreditCard, Mail, Lock, User } from "react-feather";
import Link from "next/link";

const SignUp: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center content-center h-screen" style={{backgroundImage: 'url(bg-linear.svg'}}>
            <div className="mx-auto my-auto">
                <div className=" items-center flex flex-row justify-center"> 
                    <span className="font-bold text-lg"> <CreditCard color="#000" size={20} className=" inline-block mr-2" /> QUICK CREDIT</span>
                </div>
                <div className="item-center flex flex-row justify-center text-sm font-light content-center mt-2">
                Unlock your dreams with <span className="bg-[#FCA311] py-[2px] px-3 rounded-full ml-2 font-semibold">low interest credits</span>
                </div>
                <form className="w-[450px] px-7 py-[60px] bg-[#FFF6E7] my-8 rounded-[20px] shadow-md shadow-[#ffe2b3]">
                    <div className="flex flex-row">
                        <Input icon={<User size={17} color="#000" className="mr-3 mt-0" />} label="First name" register={() => {}} name="firstName" placeholder="" />
                        <Input label="Last name" register={() => {}} name="lastName" placeholder="" style="mt-0" />
                    </div>
                    <Input icon={<Mail size={17} color="#000" className="mr-3 mt-0" />} label="Email" register={() => {}} name="email" placeholder="" />
                    <Input icon={<Lock size={17} color="#000" className="mr-3 mt-0" />} label="Password" register={() => {}} name="password" placeholder="" />
                    <button className='bg-black rounded-[10px] text-[#FCA311] font-bold w-[96%] px-5 py-3 mt-5 mx-2'>SIGN UP</button>
                    <Link href={'/login'} passHref>
                        <div className="flex flex-row justify-center items-center mt-5 cursor-pointer">
                            <span className="mr-2 font-semibold text-base">Have an account ?</span>
                            <span className="text-[#FCA311] font-bold text-base">Login</span>
                        </div>
                    </Link>
                </form>
            </div>

        </div>
    )
}

export default SignUp;