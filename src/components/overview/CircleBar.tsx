import { CircularProgressbar } from "react-circular-progressbar";

export default function CircleBar() {
  const value = 0.45;
  return (
    <div className="w-[194px] h-[214px] bg-secondinary-500 text-white rounded-[10px] p-4 flex flex-col space-y-5">
      <h1 className="font-semibold text-[16px] text-[#ffffff]">Running Task</h1>
      <p className="font-semibold text-[32px]">65</p>
      <div className="flex  ">
        <CircularProgressbar
          value={value}
          maxValue={1}
          text={`${value * 100}%`}
          className=" h-[68px]"
          strokeWidth={4}
          styles={{
            path: { stroke: "#546FFF" },
            trail: { stroke: "#1a1e38" },
            text: { fill: "white", fontSize: "18px", fontWeight: "normal" },
          }}
        />

        <h1 className="flex flex-col w-40 justify-center ">
          <span className="font-semibold text-[20px] ml-4">100</span>
          <span className="font-medium text-[14px] text-secondinary-300 ml-4">
            Task
          </span>
        </h1>
      </div>
    </div>
  );
}
