import Image from 'next/image';
import 'remixicon/fonts/remixicon.css';

interface CardProps {
  title: string;
  titleHandler: (value: string) => void;
  textLogic: boolean;
  extraStyle?:string
}

const LogOutButton: React.FC<CardProps> = ({
  title,
  titleHandler,
  textLogic,
}) => {



  return (
    <div className="flex items-center justify-between gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg"
      onClick={() => {
        titleHandler(title);
      }}
    >
                <Image
                    src="/Images/SideNavigationBar/avatar.png"
                    className="text-2xl text-gray-600 group-hover:text-white "
                    // onClick={}
                    alt="Button Image"
                    width={20}
                    height={20}
                    />
                <h3 className={`text-left text-base text-gray-800 group-hover:text-white font-semibold  transition-all ${!textLogic ? 'w-auto' : 'w-0 hidden'} `}>
                  Logout
                </h3>
                {!textLogic && (
                < i className="ri-logout-box-r-line"></i>
              )}
              </div>
  );
}

export default LogOutButton;