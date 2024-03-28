import Card from "./BCard";

const Button: React.FC = () => {
// Adding all componet data in to array
const cardData = [
    {
      title: "We grasp the climate change issues at the root causes",
      content: "A fundamental lack of visibility into the impact of climate change due to development exists. SusDev OS helps bridge the gap.",
      image: "/Images/ButtonCard/DewPoint.png",
      button: true
    },
    {
        title: "The power of open-source",
        content: "Giving you complete visibility into the security and technologies at work. We let you customize and use SusDev OS free.",
        image: "/Images/ButtonCard/LaptopSettings.png",
        button: true
      },
      {
        title: "A decentralized OS network that feeds global dashboards",
        content: "With your consent, SusDev OS updates global climate dashboards with real-time progress data.",
        image: "/Images/ButtonCard/Barchart.png",
        button: true
      },
      {
        title: "Why are we addressing the full spectrum of climate frameworks",
        content: "Information silos cloud climate data, slowing MRV emissions processes. With experts, we chose the tougher, correct path.",
        image: "/Images/ButtonCard/Datausage.png",
        button: true
      },
      {
        title: "UNFCCC NDC data from energy, transport, deforestation sectors",
        content: "High emissions in energy, transport, and deforestation impact scope 1-3 calculations. Our AI streamlines tracking and reduces GHGs.",
        image: "/Images/ButtonCard/EarthElement.png",
        button: true
      },
      {
        title: "How is a project managed with a focus on emissions & foot print",
        content: "Our platform offers a modular design, letting organizations select features for their project management.",
        image: "/Images/ButtonCard/Eco.png",
        button: true
      },
    // Add more card data objects as needed
  ];
    return (
      //call the Card.tsx as a grid
      <div className="bg-white w-full flex justify-center items-center px-8 py-8 sm:px-40 sm:py-20">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
          {cardData.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} image={card.image} buttonLogic={card.button} />
          ))}
        </div>
      </div>
        
    );
};

export default Button;
