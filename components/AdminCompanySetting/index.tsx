'use client';

import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Input, Label } from 'react-aria-components';

interface TaglineInputProps {
  maxCharacters?: number;
}

const AdminCompanySetting: React.FC<TaglineInputProps> = ({
  maxCharacters = 100,
}) => {
  const [tagline, setTagline] = useState<string>('');
  const [img, setImg] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTagline(e.target.value);

    // profile photo upload
    const onUpload = async (e: any) => {
      const fd = new FormData();
      fd.append('myfile', img);
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
  };
  return (
    <div className="flex flex-col mx-auto lg:p-6 p-4 gap-2">
      <div className="flex flex-col text-left">
        <h1 className="font-semibold xl:text-left text-center text-2xl lg:text-3xl">
          Company Setting
        </h1>
        <p className="xl:text-left text-center text-sm lg:text-base font-medium text-slate-800">
          Manage your company setting here.
        </p>
      </div>
      <div className="relative flex flex-col mx-auto mt-5">
        <p className="w-40 mt-2 lg:w-fit text-left text-xs lg:text-sm font-medium text-slate-800">
          Update your company photo and details here.
        </p>
        <div className="flex flex-row mt-2 lg:mt-0 gap-2 absolute right-0 lg:right-3">
          {/* cancel button */}
          <Button className="w-16 h-10 lg:w-[79px] lg:h-[40px] bg-white hover:bg-slate-100 rounded-lg border-2 font-medium text-sm">
            Cancel
          </Button>

          {/* Save Button */}
          <Button className="w-14 h-10 lg:w-[65px] lg:h-[40px] bg-purple-900 hover:bg-purple-800 text-white rounded-lg font-medium text-sm">
            Save
          </Button>
        </div>

        <Form className="relative flex flex-col mx-auto mt-2 mb-6 lg:mt-0 gap-6 w-80 lg:w-fit xl:w-[1494px] lg:h-[800px] divide-y-2 divide-slate-300">
          <div></div>
          {/* divider */}
          <div className="flex flex-col gap-4 lg:gap-4">
            {/* public profile */}
            <div className="flex flex-col gap-2 mt-5 lg:gap-0 lg:flex-row">
              <Label className="font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Public Profile
                <p className="text-xs font-medium text-slate-700">
                  This will be displayed on your profile.
                </p>
              </Label>
              <div className="flex flex-col gap-2 mt-5 lg:mt-0">
                <Input
                  className="lg:w-[512px] lg:h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                  name=""
                />
                <Input
                  className="lg:w-[512px] lg:h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                  name=""
                />
              </div>
            </div>
            {/* company location */}
            <div className="flex flex-col gap-2 mt-0 lg:gap-0 lg:flex-row">
              <Label className=" font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Company Location
              </Label>
              <div className="flex flex-col gap-2 ">
                <Input
                  className="lg:w-[512px] lg:h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                  name="adressLine1"
                />
                <Input
                  className="lg:w-[512px] lg:h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                  name="adressLine2"
                />
              </div>
            </div>
          </div>

          <div className="">
            {/* Tag line */}
            <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row mt-6">
              <Label className="font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Tag Line
                <p className="text-xs font-medium text-slate-700">
                  A quick snapshot of your company.
                </p>
              </Label>
              <Input
                className="text-left mt-5 lg:mt-0 lg:w-[512px] lg:h-32 h-24 text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none px-2 rounded-lg"
                name="tagline"
                type="tagline"
                maxLength={maxCharacters}
                value={tagline}
                onChange={handleInputChange}
              />
              <p className="text-xs font-medium ml-2 text-slate-600 mt-1">
                {maxCharacters - tagline.length} characters remaining
              </p>
            </div>
            {/* Company photo */}
            <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row mt-6">
              <Label className="font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Company Logo
                <p className="text-xs font-medium text-slate-700">
                  This will be displayed on your profile.
                </p>
              </Label>

              <Image
                className="size-14 mr-7"
                src="/Images/AdminSetting/profile-avatar.webp"
                width={200}
                height={200}
                alt="logo"
              />

              {/* Upload Button */}
              <Button className="lg:w-[428px] p-2 lg:h-[128px] rounded-normal border-2 border-slate-300 rounded-lg">
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

          {/* Social profiles */}
          <div>
            <div className="flex flex-col gap-2 mt-5 lg:gap-0 lg:flex-row">
              <Label className=" font-medium w-[280px] h-[20px] text-sm text-slate-800">
                Social Profiles
              </Label>
              <div className="flex flex-col gap-2 ">
                <Input
                  className="lg:w-[512px] lg:h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                  name=""
                />
                <Input
                  className="lg:w-[512px] lg:h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                  name=""
                />
                <Input
                  className="lg:w-[512px] lg:h-[44px] text-sm font-medium text-slate-800 border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg"
                  name=""
                />
              </div>
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

export default AdminCompanySetting;
