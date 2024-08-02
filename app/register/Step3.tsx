// Step3.tsx
import Image from 'next/image';
import { Button, Link,} from 'react-aria-components';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

interface Step3Props {
  onPrevious: () => void;
  email : string;

}

const Step3: React.FC<Step3Props> = ({ onPrevious , email }) => {
  return (
    <div className="flex justify-center container p-32">
      <div className="flex flex-col gap-8">
        <div className='flex flex-col gap-4 items-center'>
          <Image
              src="/Images/RegistrationForm/Featuredicon.png"
              alt="Register Image"
              width={80}
              height={80}
              className='mb-4'
            />
        </div>
      
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl font-semibold">Check Your Email</h1>
          <div className='flex flex-col items-center'>
            <p className="text-lg font-semibold ">We sent a verification link to </p>
            <p className='text-gray-500 font-semibold'>{email}</p>
          </div>

          <Button className="bg-black hover:bg-gray-300 active:bg-blue-500 rounded p-2 px-32 outline-none focus:ring-2 focus:ring-offset-1 transition text-white hover:text-black hover:font-semibold my-6">Open Email App</Button>
          <Link
           className="text-gray-500 font-semibold outline-none hover:text-blue-500 flex flex-row"
           href="/login"
          >
            <Image
              src="/Images/RegistrationForm/Icon.png"
              alt="Register Image"
              width={19}
              height={8}
              className='mx-2 hover:to-blue-600 '
            />
           Back to log in
          </Link>
        </div>

      </div>
    </div>
    
  );
};

export default Step3;