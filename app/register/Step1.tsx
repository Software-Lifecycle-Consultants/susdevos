// Step1.tsx
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Input, Label, Link, TextField } from 'react-aria-components';
import { type FieldValues, useForm } from 'react-hook-form';

import { RegisterDataStep1, RegisterSchemaStep1 } from './ZodValidation';
import { onSubmit } from './serverActions';
import FormData from './page'

interface Step1Props {
  onNext: () => void;
  // onChange: (data: { [key: string]: string }) => void;
  formData: FormData;
  setFormData: (data: FormData) => void;
 
}

const Step1: React.FC<Step1Props> = ({ onNext,formData, setFormData  }) => {
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  //   confirmPassword: ''

  // });

 
  const { register, handleSubmit ,formState:{errors,} } = useForm<RegisterDataStep1>({
    resolver: zodResolver(RegisterSchemaStep1),
  });

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    setFormData({ ...formData, ...data });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    onNext()
    
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // onChange({ [name]: value });
  }



  return (
    <div className="flex justify-center container p-32">
      <div className="relative flex flex-col gap-4 w-[360px]">
        <div className='flex flex-col gap-4 items-center'>
        <Image
            src="/Images/RegistrationForm/susdevosImage.png"
            alt="Register Image"
            width={50}
            height={50}
            className="mb-4"
          />

          <h1 className="text-3xl font-semibold">Create an Account</h1>
          <p className="text-base">something should write here</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
          method="POST"
        >
          <TextField className="flex flex-col gap-2" name="email">
            <Label>Email*</Label>
            <Input 
            { ...register('email')}
            className="bg-white focus:bg-white outline-none p-2 focus:ring-2 focus:ring-offset-1 transition border-2 rounded-lg" 
            type='email'  
            placeholder='Enter your Email'
            // value={formData.email} 
            // onChange={handleChange}
             />
            {
              errors?.email && <p className='text-red-500'>{errors.email.message}</p>
            }
          </TextField>
          <TextField className="flex flex-col gap-2" name="password">
            <Label>Password*</Label>
            <Input
              {...register('password')}
              className="bg-white focus:bg-white outline-none p-2 focus:ring-2 focus:ring-offset-1 transition border-2 border-slate-300 rounded-lg"
              type="password"
              placeholder="Create a password"
            />
            {errors?.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </TextField>
          <TextField className="flex flex-col gap-2" name="reEnterPassword">
            <Label>Re-enter Password*</Label>
            <Input
              {...register('confirmPassword')}
              className="bg-white focus:bg-white outline-none p-2 focus:ring-2 focus:ring-offset-1 transition border-2 border-slate-300 rounded-lg"
              type="password"
              placeholder="Re-enter your password"
            />
            {errors?.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </TextField>
          <Button
            className="bg-black hover:bg-gray-300 active:bg-blue-500 rounded p-2 outline-none focus:ring-2 focus:ring-offset-1 transition text-white hover:text-black hover:font-semibold"
            type="submit"
          >
            Get started
          </Button>
          <div className="flex justify-center flex-col flex-wrap items-center  sm:flex-row">
            <p className="pr-1 text-gray-400">Already have an account? </p>
            <Link
              className="text-black font-semibold outline-none hover:border-b border-blue-600 hover:text-blue-500"
              href="/login"
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1;
