'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button, Checkbox, Input, Label, Link, TextField } from 'react-aria-components';
import { ZodError } from 'zod';



import ClientForm from '@/components/ClientForm';



import { LoginScema } from './clientActions';
import { onSubmit } from './serverActions';


export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // <-- Added state for rememberMe

  const validate = (f: FormData) => {
    const formData = {
      username: f.get('username'),
      password: f.get('password'),
    };
    try {
      LoginScema.parse(formData);
      console.log('valid');
      setUsernameError('');
      setPasswordError('');
      return true;
    } catch (e) {
      console.log(e);
      if (e instanceof ZodError) {
        e.errors.forEach((err) => {
          if (err.path[0] === 'username') {
            setUsernameError(err.message);
          }
          if (err.path[0] === 'password') {
            setPasswordError(err.message);
          }
        });
      } else {
        console.error('Unknown error occurred:', e);
      }
      return false;
    }
  };
  return (
    <div className="flex justify-center container p-32">
      <div className="relative flex flex-col gap-8 w-[360px]">
        <Image
          className="size-10 w-14 h-14 mx-auto"
          src="/Images/Login/login.webp"
          width={300}
          height={300}
          alt="login"
        />
        <h1 className="text-3xl text-center font-semibold">
          Log into your Account
        </h1>
        <p className="text-center font-medium text-gray-500">
          Welcome back! Please enter your details.
        </p>

        <ClientForm
          className="flex flex-col gap-4"
          action={(err, formData) => {
            const valid = validate(formData);
            if (valid) {
              return onSubmit(err, formData); //  Pass rememberMe state to onSubmit
            }

            return { error: 'Validation Error.' };
          }}
          initialState={{ error: '' }}
        >
          <TextField className="flex flex-col gap-2" name="username">
            <Label className="font-medium">Email or Username</Label>
            <Input
              className="border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg focus:ring-2 focus:ring-offset-1 transition"
              placeholder="Enter your username"
            />
            {usernameError && (
              <span className="text-red-500">{usernameError}</span>
            )}
          </TextField>
          <TextField className="flex flex-col gap-2" name="password">
            <Label className="font-medium">Password</Label>
            <Input
              className="border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg focus:ring-2 focus:ring-offset-1 transition"
              type="password"
              placeholder="Enter your password"
            />
            {passwordError && (
              <span className="text-red-500">{passwordError}</span>
            )}
          </TextField>

          <div className="flex flex-col lg:inline-flex items-center mb-4">
            {/* Check box */}
            <div className="lg:absolute left-0 inline-flex">
              <Label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="check"
              >
                <Input
                  type="checkbox"
                  className="peer absolute left-0 h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-blue-gray-200 transition-all checked:border-gray-900 checked:bg-gray-900"
                  id="check"
                  name='rememberMe'
                />
                <span className="lg:pr-1 absolute text-white transition-opacity opacity-0 pointer-events-none left-0 translate-x-1/4 lg:top-2/4 lg:left-2/4 lg:-translate-y-2/4 lg:-translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </Label>
              <Label
                className="mt-px py-3 font-medium text-gray-500 cursor-pointer select-none text-sm"
                htmlFor="check"
              >
                Remember Me For 30 Days
              </Label>
            </div>
            {/* <Input type='checkbox'/>
            check box */}
            <Link
              className="pb-1 lg:absolute lg:right-0 lg:pt-3 text-slate-950 outline-none hover:border-b border-slate-900 font-medium text-sm"
              href="/forgot-password"
            >
              Forget Password
            </Link>
          </div>
          <Button
            className="lg:mt-10 text-white bg-slate-950 hover:bg-slate-800 active:bg-slate-900 rounded-lg p-2 outline-none focus:ring-2 focus:ring-offset-1 transition"
            type="submit"
          >
            Sign In
          </Button>
          <div className="inline-flex justify-center gap-2 my-5">
            <p className="text-gray-500 font-medium text-sm">
              Don’t have an account?
            </p>
            <Link
              className="text-sm font-medium text-blue-600 outline-none hover:border-b border-blue-600"
              href="/register"
            >
              Sign Up
            </Link>
          </div>
        </ClientForm>
      </div>
    </div>
  );
}