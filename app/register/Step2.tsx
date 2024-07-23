import React from 'react';
import { Button, Input, Label, Link, TextArea, Form } from 'react-aria-components';
import Image from 'next/image';
import { useForm, type FieldValues } from 'react-hook-form';
import PhoneNumberInput from './PhoneNumberInput';
import { RegisterSchemaStep2, RegisterDataStep2 } from './ZodValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegistrationFormData } from './type';  // Import your type here

interface Step2Props {
  onNext: () => void;
  onPrevious: () => void;
  formData: RegistrationFormData;
  setFormData: (data: RegistrationFormData) => void;
  onSubmit: () => void;  // This should be called when the form is successfully submitted
}

const Step2: React.FC<Step2Props> = ({ onNext, onPrevious, formData, setFormData, onSubmit }) => {

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterDataStep2>({
    resolver: zodResolver(RegisterSchemaStep2),
  });

  const onSubmitStep2 = async (data: FieldValues) => {
    try {
      // Combine data from Step1 and Step2
      const combinedData = { ...formData, ...data };

      // Call the onSubmit function to handle final form submission
      await onSubmit();  // Call onSubmit to handle the final submission
      onNext();  // Proceed to the next step
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="flex justify-center container p-32">
      <div className="flex flex-col gap-8">
        <div className='flex flex-col gap-4 items-center'>
          <Image
            src="/Images/RegistrationForm/susdevosImage.png"
            alt="Register Image"
            width={50}
            height={50}
            className='mb-4'
          />
          <h1 className="text-3xl font-semibold">One more step.</h1>
          <p className='text-base'>something should write here</p>
        </div>
        <Form onSubmit={handleSubmit(onSubmitStep2)}>
          <div className='flex flex-col gap-2'>
            <Label>Organization</Label>
            <input 
              {...register('organization')}
              type="text" name="organization" placeholder="Enter Your Name" className="bg-white focus:bg-white outline-none p-2 focus:ring-2 focus:ring-offset-1 transition border-2 border-slate-300 rounded-lg" style={{ color: 'black' }} />
            {errors.organization && <span className='text-red-500'>{errors.organization.message}</span>}
            <PhoneNumberInput 
              register={register('phoneNumber')}
              error={errors.phoneNumber}
            />
            <Label>Your Message</Label>
            <TextArea
              {...register('message')}
              name="message" placeholder="Write here if you have anything else to know." className="bg-white focus:bg-white outline-none p-2 focus:ring-2 focus:ring-offset-1 transition border-2 border-slate-300 rounded-lg" style={{ color: 'black' }}/>
            <Label>
              <Input
                type="checkbox"
                {...register('terms')}
                className='mr-2'
              />
              I agree to the 
              <Link
                className="mx-2 text-blue-600 font-semibold outline-none hover:border-b border-black hover:text-black"
                href="/login">
                terms
              </Link>
              and
              <Link
                className="mx-2 text-blue-600 font-semibold outline-none hover:border-b border-black hover:text-black"
                href="/login">
                conditions
              </Link>
            </Label>
            {errors.terms && <p className='text-red-500'>{errors.terms.message}</p>}
            <Button 
              className="bg-black hover:bg-gray-300 active:bg-blue-500 rounded p-2 outline-none focus:ring-2 focus:ring-offset-1 transition text-white hover:text-black hover:font-semibold"
              type='submit'>Create Account
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Step2;
