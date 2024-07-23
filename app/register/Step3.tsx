import React from 'react';
import { Button } from 'react-aria-components';

interface Step3Props {
  onPrevious: () => void;
  onSubmit: () => void;
  email: string;
}

const Step3: React.FC<Step3Props> = ({ onPrevious, onSubmit, email }) => {
  return (
    <div className="flex justify-center container p-32">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-semibold">Confirmation</h1>
        <p className="text-base">Please confirm your email: {email}</p>
        <div className="flex gap-4">
          {/* Use Button with proper props */}
          <Button
            className="bg-black hover:bg-gray-300 active:bg-blue-500 rounded p-2 outline-none focus:ring-2 focus:ring-offset-1 transition text-white hover:text-black hover:font-semibold"
            onPress={onPrevious} // Use `onPress` instead of `onClick`
          >
            Back
          </Button>
          <Button
            className="bg-black hover:bg-gray-300 active:bg-blue-500 rounded p-2 outline-none focus:ring-2 focus:ring-offset-1 transition text-white hover:text-black hover:font-semibold"
            onPress={onSubmit}  // Use `onPress` instead of `onClick`
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
