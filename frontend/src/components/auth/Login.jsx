import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup} from "@/components/ui/radio-group"
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex items-center justify-center max-w-7xl mx-auto'>
            <form action="" className='w-1/2 border border-grey-200 rounded-md p-4 my-5'>
                <h1 className='font-bold text-xl mb-5'>Login</h1>
                  <div className='my-5'>
                <Label className='my-2'>Email</Label>
                <Input
                 type='email'
                placeholder='your email here'>
                </Input>
                </div>
                <div className='my-5'>
                <Label className='my-2'>Password</Label>
                <Input type='Password'
                placeholder=''>
                </Input>
                </div>
                <div className='flex items-center justify-between'>
                 <RadioGroup className ='flex items-center gap-5 my-1'>
  <div className="flex items-center space-x-2">
    <div className='flex items-center space x-2'>
      <Input 
      type= "radio"
      name = "role"
      value = "student"
      className = "cursor-pointer"></Input>
    </div>
    <Label htmlFor="option-one">Student</Label>
  </div>
  <div className="flex items-center space-x-2">
     <div className='flex items-center space x-2'>
      <Input 
      type= "radio"
      name = "role"
      value = "recruiter"
      className = "cursor-pointer"></Input>
    </div>
    <Label htmlFor="option-two">Recruiter</Label>
  </div>
</RadioGroup>
</div>
<button
  type="submit"
  className="w-full my-4 py-3 rounded-xl bg-white text-orange-500 font-bold shadow-[4px_4px_8px_#ccc,-4px_-4px_8px_#fff] hover:shadow-[2px_2px_4px_#ccc,-2px_-2px_4px_#fff] transition-all duration-200"
>
  Signup
</button>
<span className='text-bold'>Don't have an account<Link to ="/signup" className='text-blue-600'>Login</Link></span>

</form>
        </div>
    </div>
  )
}

export default Login