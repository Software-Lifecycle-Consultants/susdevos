interface CardProps {
  title: string;
  image: any;
  alt: string;
  button: boolean;
  titleHandler: (value: string) => void;
  textLogic: boolean;
  link: string;
  extraStyle?:string
}

const SideNavigationBar: React.FC<CardProps> = ({
  title,
  image,
  titleHandler,
  textLogic,
  link,
  extraStyle
}) => {
  return (
    <div
      className={`flex items-center justify-between hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg ${!textLogic ? '' : 'pl-0'}`}
      onClick={() => {
        titleHandler(title);
      }}
    >
      <div className={`flex gap-5 ${!textLogic ? '' : 'pl-[22px]'}`}>
        <div className={`text-lg text-gray-600 group-hover:text-white ${extraStyle}`}>
              {image}
        </div>
        <a href={link} style={{}}>
          <h3
            className={`text-left text-base text-gray-800 group-hover:text-white font-semibold  transition-all ${!textLogic ? 'w-auto' : 'w-0 hidden'} `}
          >
            {title}
            
          </h3>
        </a>
      </div>
      <div className={`text-right hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg ${!textLogic ? '' : 'hidden'}`}>
        {!textLogic && (
          <i className="ri-arrow-down-s-line"></i>
        )}
        
      </div>
    </div>
  );
};

export default SideNavigationBar;
