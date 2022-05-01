import React from "react";
import Input from "../../ui/Input";

const LoanForm: React.FC = () => {
    return (
        <div>
            <h3>REQUEST NEW LOAN</h3>
              <div className='h-[1px] bg-black w-[70px] mt-2'></div>
              <form className='mt-5'>
                <Input label='Amount' placeholder='' register={() => {}} name="amount" style='w-full' />
                <Input label='Amount' placeholder='' register={() => {}} name="amount" style='w-full' />
                <button className='bg-black rounded-[10px] text-[#FCA311] font-bold w-full px-5 py-3 mt-5'>SUBMIT</button>
              </form>
        </div>
    )
}

export default LoanForm;