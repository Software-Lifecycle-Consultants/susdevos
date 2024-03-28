import Card from "../ButtonCard/BCard";

const NonButton: React.FC = () => {
  const cardDataNew = [
    {
      title: "Seamless Reporting and Data Integration",
      content: "Effortlessly streamline your reporting process with integrated climate data, ensuring compliance with global standards. Connect with your ERPs and IS platforms using APIs.",
      image: "/Images/NonButtonCard/image_01.png",
      button: false
      
    },
    {
        title: "Instant Access to Critical Insights",
        content: "Unlock instant access to mission-critical information, empowering decision-makers with data-driven insights for a brighter, climate-aware future.",
        image: "/Images/NonButtonCard/image_02.png",
        button: false
        
      },
      {
        title: "Accountability and Transparency",
        content: "Foster a culture of accountability and transparency, facilitating effective policy development and demonstrating your commitment to a sustainable world.",
        image: "/Images/NonButtonCard/image_03.png",
        button: false
        
      },
      {
        title: "AI-Driven Emissions Intelligence",
        content: "Harness the power of AI for precise emissions calculations and recommendations, optimizing your climate mitigation strategies.",
        image: "/Images/NonButtonCard/image_04.png",
        button: false
        
      },
      {
        title: "User-Friendly Innovation",
        content: "Whether a starting out IT user or an experienced user, our system is easy to use and understand. And we will support multiple languages soon.",
        image: "/Images/NonButtonCard/image_05.png",
        button: false
        
      },
      {
        title: "UNFCCC NDC, UN-SDG, SBTi & Sendai reporting",
        content: "Unlock a treasure trove of insights by generating UNFCCC, UN-SDG, and Sendai reports from real-world data.",
        image: "/Images/NonButtonCard/image_06.png",
        button: false
       
      },
    // Add more card data objects as needed
  ];

  

    return (
      <div>
        {/* Benifits of using susdevOs content */}
        <div className="pt-10">
          <h1 className=" lg:h-[60px] lg:w-[698px] text-center font-semibold lg:font-medium text-[48px] lg:text-5xl text-slate-900 mx-auto sm:pb-20 pb-10 px-2">Benefits of using SusDev-OS</h1>
          <p className=" mt-1 lg:h-[108px] lg:w-[729px] font-medium text-lg lg:text-[24px] text-[21px] leading-6 lg:leading-9 text-center text-slate-900 mx-10 lg:mx-auto pb-8">SusDev-OS revolutionizes climate-conscious development projects through advanced technology.</p>
        </div>
        {/* Non Button Card Div tag */}
        <div className="bg-white w-full flex justify-center items-center mx-auto px-8 py-8 sm:px-40 sm:py-20">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardDataNew.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} image={card.image} buttonLogic={card.button} />
          ))}
          </div>
        </div>
      </div>
      
    );

  };

  export default NonButton;
