'use client';

import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import {RegistrationFormData } from './type';

const RegistrationFlow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    organization: '',
    phoneNumber: '',
    message: '',
    terms: false,
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleFormDataChange = (data: Partial<RegistrationFormData>) => {
    setFormData(prevData => ({ ...prevData, ...data }));
  };

  const handleSubmit = async () => {
    try {
      // Convert formData to FormData object
      const formDataEntries = new FormData();
      for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
          formDataEntries.append(key, formData[key as keyof RegistrationFormData].toString());
        }
      }

      const response = await fetch('/register/api', {
        method: 'POST',
        body: formDataEntries,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("Aaa",response);

      const result = await response.json();

      if (result.error) {
        throw new Error(result.error);
      }

      console.log('Registration Successful!');
      // You might need to redirect or perform additional actions here
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {step === 1 && (
        <Step1
          onNext={handleNextStep}
          formData={formData as any}
          setFormData={handleFormDataChange as any}
        />
      )}
      {step === 2 && (
        <Step2
          onNext={handleNextStep}
          onPrevious={handlePreviousStep}
          formData={formData as any}
          setFormData={handleFormDataChange as any}
          onSubmit={handleSubmit}  // Pass handleSubmit to be called when the form is submitted
        />
      )}
      {step === 3 && (
        <Step3
          onPrevious={handlePreviousStep}
          onSubmit={handleSubmit}  // Pass handleSubmit to be called when the form is submitted
          email={formData.email}
        />
      )}
    </div>
  );
};

export default RegistrationFlow;
