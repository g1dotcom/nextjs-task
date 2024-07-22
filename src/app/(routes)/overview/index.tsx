import Header from "@/components/overview/header";
import TaskToday from "@/components/overview/taskToday";
import UpcomingTask from "@/components/overview/upcomingTask";

function OverviewComponent() {
  return (
    <div className="w-full h-screen flex flex-col bg-green-500">
      <Header />
      <div className=" flex justify-between bg-transparent">
        <UpcomingTask />
        <TaskToday />
      </div>
    </div>
  );
}

export default OverviewComponent;
