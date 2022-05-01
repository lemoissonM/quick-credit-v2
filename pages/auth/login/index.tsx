/* eslint-disable react/no-unescaped-entities */
import React, { FormEventHandler, useEffect, useState } from "react";
import Input from "../../../components/ui/Input";
import { CreditCard, Mail, Lock } from "react-feather";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from 'react-hook-form';
import makeToast, { defaultOptions } from "../../../utils/toast";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getUser } from "../../../utils/getUser";

interface IFormInput  {
    email:string;
    password: string;
}

const Login: React.FC = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        event.preventDefault();
        const userData = await fetch('/api/login',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if(userData.status === 200) {
            makeToast('Logged in sucessfully', defaultOptions)
            localStorage.setItem('user', JSON.stringify(await userData.json()));
            router.push('/')
        }
        if(userData.status === 401) makeToast((await userData.json())?.message, defaultOptions)
    }

    useEffect(() => {
        if(getUser()) router.push('/');
    })

    return (
        <div className="flex flex-col justify-center items-center content-center h-screen" style={{backgroundImage: 'url(bg-linear.svg'}}>
            <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
            <div className="mx-auto my-auto">
                <div className=" items-center flex flex-row justify-center"> 
                    <span className="font-bold text-lg"> <CreditCard color="#000" size={20} className=" inline-block mr-2" /> QUICK CREDIT</span>
                </div>
                <div className="item-center flex flex-row justify-center text-sm font-light content-center mt-2">
                Unlock your dreams with <span className="bg-[#FCA311] py-[2px] px-3 rounded-full ml-2 font-semibold">low interest credits</span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-[450px] px-7 py-[65px] bg-[#FFF6E7] my-8 rounded-[20px] shadow-md shadow-[#ffe2b3]">
                    <Input icon={<Mail size={17} color="#000" className="mr-3 mt-0" />} label="Email" register={register} name="email" placeholder="" />
                    <Input type='password' icon={<Lock size={17} color="#000" className="mr-3 mt-0" />} label="Password" register={register} name="password" placeholder="" style="mt-8" />
                    <Link href={'/dashboard'} passHref >
                        <span className=" float-right mr-2 font-semibold">Forgot password ?</span>
                    </Link>
                    <button className='bg-black rounded-[10px] text-[#FCA311] font-bold w-[96%] px-5 py-3 mt-5 mx-2'>LOGIN</button>
                    <Link href={'/signup'} passHref>
                        <div className="flex flex-row justify-center items-center mt-5 cursor-pointer">
                            <span className="mr-2 font-semibold text-base">Don't have an account ?</span>
                            <span className="text-[#FCA311] font-bold text-base">Signup</span>
                        </div>
                    </Link>
                </form>
            </div>

        </div>
    )
}

export default Login;