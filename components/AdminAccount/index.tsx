'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Form,
  HeadingContext,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from 'react-aria-components';
import Editor from './Editor';


const AdminAccount: React.FC = () => {
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

  

  const onSubmit = async (e: any) => {
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

  return (
    <div className="flex flex-col bg-yellow-100 p-2 gap-2">
      <div className="bg-white">
        <h1 className="font-semibold text-3xl">My Account</h1>
        <p className="text-base font-medium text-slate-800">
          Manage your personal profile details here.
        </p>
      </div>
      <div className="flex flex-col bg-white mt-5 px-10 ">
        <h1 className="font-semibold text-xl">Personal Info</h1>
        <p className="text-base font-medium text-slate-800">
          Update your photo and personal details here.
        </p>

        {/* lexical component */}
        <Editor />
        <div className="flex flex-row gap-2 absolute right-2 justify-center">
          {/* cancel button */}
          <Button className="w-[79px] h-[40px] bg-white hover:bg-slate-100 rounded-lg border-2 font-medium text-sm">
            Cancel
          </Button>

          {/* Save Button */}
          <Button className="w-[65px] h-[40px] bg-purple-900 hover:bg-purple-800 text-white rounded-lg font-medium text-sm">
            Save
          </Button>
        </div>

        <Form className="flex flex-col mt-5 gap-6 w-[1494px] h-[1284px] divide-y divide-slate-300">
          {/* divider */}
          <div className="flex flex-col gap-4">
            {/* name */}
            <div className="flex flex-row">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Name
              </Label>
              <div className="flex flex-row gap-6">
                <Input
                  className="w-[244px] h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                  name="firstName"
                />
                <Input
                  className="w-[244px] h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                  name="lastName"
                />
              </div>
            </div>

            {/* Username */}
            <div className="flex flex-row">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Username
              </Label>
              <Input
                className="w-[512px] h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                name="userName"
              />
            </div>
          </div>

          <div className="">
            {/* Email Address */}
            <div className="flex flex-row mt-6">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Email Address
              </Label>
              <Input
                className="relative w-[512px] h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                name="email"
                type="email"
              >
                {/* <div>
                  <Image
                    className="absolute left-2 size-5 "
                    src="/Images/AdminSetting/mail-icon.webp"
                    width={10}
                    height={10}
                    alt="mail-icon"
                  />
                </div> */}
              </Input>
            </div>
          </div>

          <div className="">
            {/* Your photo */}
            <div className="flex flex-row mt-6">
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
                className="w-[428px] h-[128px] rounded-normal border-2 border-slate-300 rounded-lg"
              >
                {/* upload Image */}
                <Image
                  className="size-10 mx-auto"
                  src="/Images/AdminSetting/upload-icon.webp"
                  width={200}
                  height={200}
                  alt="profile"
                />

                <p className="text-sm font-medium text-slate-700">
                  <span className="text-purple-500">Click to upload</span> or
                  drag and drop
                </p>
                <p className="text-sm font-medium text-slate-700">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </Button>
            </div>
          </div>

          {/* divider */}
          <div className="flex flex-col gap-4">
            {/*Current Password */}
            <div className="flex flex-row mt-6">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Current Password
              </Label>
              <Input
                className="w-[512px] h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                name="currentPassword"
                type="password"
              />
            </div>

            {/* new Password */}
            <div className="flex flex-row">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                New Password
              </Label>
              <Input
                className="w-[512px] h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                name="newPassword"
                type="password"
              />
            </div>

            {/* confirm password */}
            <div className="flex flex-row">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Confirm Password
              </Label>
              <Input
                className="w-[512px] h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                name="confirmPassword"
                type="password"
              />
            </div>
          </div>

          <div className="flex flex-row mb-6">
            <div className="absolute right-2 mt-6 ">
              {/* cancel button */}
              <Button className="w-[79px] h-[40px] bg-white hover:bg-slate-100 rounded-lg border-2 font-medium text-sm">
                Cancel
              </Button>

              {/* update Button */}
              <Button className="w-[151px] h-[40px] bg-purple-900 hover:bg-purple-800 text-white rounded-lg ml-2 font-medium text-sm">
                Update Password
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-10">
            {/* Role */}
            <div className="flex flex-row mt-4">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Role
              </Label>
              <Input
                className="w-[512px] h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                name="role"
                type="text"
              />
            </div>

            {/* Organization */}
            <div className="flex flex-row">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Organization
              </Label>
              <Input
                className="w-[512px] h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                name="organization"
              />
            </div>

            {/* Branch */}
            <div className="flex flex-row">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Branch
              </Label>
              <Input
                className="w-[512px] h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                name="branch"
              />
            </div>

            {/* Department */}
            <div className="flex flex-row">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Department
              </Label>

              {/* <MySelect items={departments}>
                {(item: { name: any }) => item.name}
              </MySelect> */}

              <Select className="relative w-[512px] h-[44px]  text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none  rounded-lg">
                <Button className="text-left w-[512px] h-[44px] font-medium text-sm text-slate-800 border-none outline-none rounded-lg p-2">
                  <SelectValue />
                  <span className="absolute right-2" aria-hidden="true">
                    ▼
                  </span>
                </Button>
                <Popover>
                  <ListBox className="w-[512px] text-sm font-medium text-slate-800 border-2 border-slate-300 bg-white  outline-none p-2 rounded-lg hover:cursor-pointer">
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
            <div className="flex flex-row">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Website
              </Label>
              <Input
                className="w-[512px] h-[44px] text-sm font medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                name="website"
              />
            </div>

            {/* Bio */}
            <div className="flex flex-row">
              <Label className="my-auto font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Bio
                <p className="text-xs font-medium text-slate-700">
                  Write a short introduction.
                </p>
              </Label>
              <Input
                className="w-[512px] h-[154px] text-sm font medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                name="bio"
              />
            </div>
          </div>

          <div className="flex flex-row">
            <div className="absolute right-2 mt-4">
              {/* cancel button */}
              <Button className="w-[79px] h-[40px] bg-white hover:bg-slate-100 rounded-lg border-2 font-medium text-sm">
                Cancel
              </Button>

              {/* Save Button */}
              <Button className="w-[65px] h-[40px] bg-purple-900 hover:bg-purple-800 text-white rounded-lg ml-2 font-medium text-sm">
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
