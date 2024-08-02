'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Button,
  Form,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from 'react-aria-components';
import { FieldValues, useForm } from 'react-hook-form';


import TextEditor from './TextEditor';
import { profileSchema, profileSchemaData } from './clientActions';

const AdminAccount: React.FC= () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    img: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    role: '',
    organization: '',
    branch: '',
    department: '',
    website: '',
    bio: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const getErrorMessage = (error: any) => {
    if (error) {
      if (typeof error === 'string') return error;
      if (error.message) return error.message;
    }
    return null;
  };

  // profile photo upload
  const onUpload = async (e: any) => {
    const fd = new FormData();
    fd.append('myfile', formData.img);
    let res = await fetch(``, {
      method: 'POST',
      headers: {
        'Content-Type': 'image/jpeg',
      },
      body: fd,
    });
    let response = await res.json();
    console.log(response);
  };

  const TextEditor = dynamic(() => import('./TextEditor'), {
    ssr: false,
  });

  return (
    <div className="flex flex-col mx-auto lg:p-6 p-4 gap-2">
      <div className="flex flex-col">
        <h1 className="font-semibold lg:text-left text-center text-2xl lg:text-3xl">
          My Account
        </h1>
        <p className="lg:text-left text-center text-sm lg:text-base font-medium text-slate-800">
          Manage your personal profile details here.
        </p>
      </div>
      <div className="relative flex flex-col mx-auto bg-white mt-5">
        <h1 className="font-semibold text-md lg:text-xl">Personal Info</h1>
        <p className="w-40 lg:w-fit text-left text-xs lg:text-sm font-medium text-slate-800">
          Update your photo and personal details here.
        </p>
        <div className="flex flex-row mt-2 lg:mt-5 gap-2 absolute right-0 lg:right-3">
          {/* cancel button */}
          <Button className="w-16 h-10 lg:w-[79px] lg:h-[40px] bg-white hover:bg-slate-100 rounded-lg border-2 font-medium text-sm">
            Cancel
          </Button>

          {/* Save Button */}
          <Button className="w-14 h-10 lg:w-[65px] lg:h-[40px] bg-purple-900 hover:bg-purple-800 text-white rounded-lg font-medium text-sm">
            Save
          </Button>
        </div>

        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="relative flex flex-col mx-auto mt-2 mb-6 lg:mt-2 gap-6 w-80 lg:w-[1494px] lg:h-[1284px] divide-y-2 divide-slate-300"
        >
          <div></div>
          {/* divider */}
          <div className="flex flex-col gap-4">
            {/* name */}
            <div className="flex flex-col gap-2 mt-5 lg:gap-0 lg:flex-row">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Name
              </Label>
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
                <Input
                  className="lg:w-[244px] lg:h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                  name="firstName"
                />
                <Input
                  className="lg:w-[244px] lg:h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                  name="lastName"
                />
              </div>
            </div>

            {/* Username */}
            <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Username
              </Label>
              <Input
                className="lg:w-[512px] lg:h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                name="userName"
              />
            </div>
          </div>

          <div className="">
            {/* Email Address */}
            <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row mt-6">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Email Address
              </Label>
              <Input
                className="relative lg:w-[512px] lg:h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                name="email"
                type="email"
              >
                {/* <div>
                  <Image
                    className="absolute left-2 size-5 "
                    src="/Images/AdminSetting/mail-icon.webp"
                    width={2}
                    height={2}
                    alt="mail-icon"
                  />
                </div> */}
              </Input>
            </div>
          </div>

          <div className="">
            {/* Your photo */}
            <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row mt-6">
              <Label className="font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Your Photo
                <p className="text-xs font-medium text-slate-700">
                  This will be displayed on your profile.
                </p>
              </Label>

              {/* profile photo */}
              <Image
                className="size-14 mr-7"
                src="/Images/AdminSetting/profile-avatar.webp"
                width={200}
                height={200}
                alt="profile"
              />

              {/* Upload Button */}
              <Button
                onPress={onSubmit}
                className="lg:w-[428px] p-2 lg:h-[128px] rounded-normal border-2 border-slate-300 rounded-lg"
              >
                {/* upload Image */}
                <Image
                  className="size-10 mx-auto"
                  src="/Images/AdminSetting/upload-icon.webp"
                  width={200}
                  height={200}
                  alt="profile"
                />

                <p className="text-sm mx-auto font-medium text-slate-700">
                  <span className="text-purple-500">Click to upload</span> or
                  drag and drop
                </p>
                <p className="text-sm mx-auto font-medium text-slate-700">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </Button>
            </div>
          </div>

          {/* divider */}
          <div className="flex flex-col gap-4">
            {/*Current Password */}
            <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row mt-6">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Current Password
              </Label>
              <Input
                className="lg:w-[512px] lg:h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
               
                type="password"
                {...register('currentPassword')}
              />
              {errors?.currentPassword && (
                <span className="text-red-500 mt-1 lg:ml-4 my-auto">
                  {getErrorMessage(errors.currentPassword)}
                </span>
              )}
            </div>

            {/* new Password */}
            <div className="flex flex-col lg:flex-row">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                New Password
              </Label>
              <Input
                className="lg:w-[512px] lg:h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
              
                type="password"
                {...register('newPassword')}
              />
              {errors?.newPassword && (
                <span className="text-red-500 mt-1 lg:ml-4 my-auto">
                  {getErrorMessage(errors.newPassword)}
                </span>
              )}
            </div>

            {/* confirm password */}
            <div className="flex flex-col lg:flex-row">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Confirm Password
              </Label>
              <Input
                className="lg:w-[512px] lg:h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
  
                {...register('confirmPassword')}
                type="password"
              />
              {errors?.confirmPassword && (
                <span className="text-red-500 mt-1 lg:ml-4 my-auto">
                  {getErrorMessage(errors.confirmPassword)}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mb-10 lg:mb-6">
            <div className="absolute right-0 lg:right-3 mt-3 lg:mt-6">
              {/* cancel button */}
              <Button className="w-16 h-10 lg:w-[79px] lg:h-[40px] bg-white hover:bg-slate-100 rounded-lg border-2 font-medium text-sm">
                Cancel
              </Button>

              {/* update Button */}
              <Button type='submit' className="w-36 h-10 lg:w-[151px] lg:h-[40px] bg-purple-900 hover:bg-purple-800 text-white rounded-lg ml-2 font-medium text-sm">
                Update Password
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:mt-10">
            {/* Role */}
            <div className="flex flex-col gap-2 lg:flex-row mt-4">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Role
              </Label>
              <Input
                className="lg:w-[512px] lg:h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                name="role"
                type="text"
              />
            </div>

            {/* Organization */}
            <div className="flex flex-col gap-2 lg:flex-row">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Organization
              </Label>
              <Input
                className="lg:w-[512px] lg:h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                name="organization"
              />
            </div>

            {/* Branch */}
            <div className="flex flex-col gap-2 lg:flex-row">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Branch
              </Label>
              <Input
                className="lg:w-[512px] lg:h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                name="branch"
              />
            </div>

            {/* Department */}
            <div className="flex flex-col gap-2 lg:flex-row">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Department
              </Label>

              {/* <MySelect items={departments}>
                {(item: { name: any }) => item.name}
              </MySelect> */}

              <Select className="relative lg:w-[512px] lg:h-[44px]  text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none  rounded-lg">
                <Button className="text-left lg:w-[512px] lg:h-[44px] font-medium text-sm text-slate-800 border-none outline-none rounded-lg p-2">
                  <SelectValue />
                  <span className="absolute right-2" aria-hidden="true">
                    ▼
                  </span>
                </Button>
                <Popover className="">
                  <ListBox className="lg:w-[512px] text-sm font-medium text-slate-800 border-2 border-slate-300 bg-white  outline-none p-2 rounded-lg hover:cursor-pointer">
                    <ListBoxItem className="focus:bg-slate-400 focus:outline-none p-2 rounded-md">
                      IT Department
                    </ListBoxItem>
                    <ListBoxItem className="focus:bg-slate-400 focus:outline-none p-2 rounded-md">
                      HR Department
                    </ListBoxItem>
                    <ListBoxItem className="focus:bg-slate-400 focus:outline-none p-2 rounded-md">
                      Finance Department
                    </ListBoxItem>
                  </ListBox>
                </Popover>
              </Select>
            </div>

            {/* Website */}
            <div className="flex flex-col gap-2 lg:flex-row">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Website
              </Label>
              <Input
                className="lg:w-[512px] lg:h-[44px] text-sm font medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                name="website"
              />
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-2 lg:flex-row">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Bio
                <p className="text-xs font-medium text-slate-700">
                  Write a short introduction.
                </p>
              </Label>
              <TextEditor />
            </div>
          </div>

          <div className="flex flex-row">
            <div className="absolute right-0 lg:right-3 mb-4 mt-4">
              {/* cancel button */}
              <Button className="w-16 h-10 lg:w-[79px] lg:h-[40px] bg-white hover:bg-slate-100 rounded-lg border-2 font-medium text-sm">
                Cancel
              </Button>

              {/* Save Button */}
              <Button className="w-14 h-10 lg:w-[65px] lg:h-[40px] bg-purple-900 hover:bg-purple-800 text-white rounded-lg ml-2 font-medium text-sm">
                Save
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AdminAccount;
