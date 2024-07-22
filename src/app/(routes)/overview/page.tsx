import OverviewComponent from ".";

const Overview = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-[#FAFAFA] ">
      <header className="bg-[#FFFFFF] h-[192px] flex justify-between p-8">
        <div className="">
          <h1 className="text-secondinary-500 text-[24px] font-semibold">
            Hi,Skylar Dias
          </h1>
          <p className="text-secondinary-400 text-[16px] font-medium">
            Lets finish your task today!
          </p>
        </div>
        <div className=""></div>
      </header>
    </div>
  );
};

export default Overview;
