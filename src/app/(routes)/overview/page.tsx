import TaskToday from "@/components/overview/TaskToday";
import UpcomingTask from "@/components/overview/UpcomingTask";

const DashboardPage = () => {
  return (
    <div className="">
      <UpcomingTask />
      <TaskToday />
    </div>
  );
};

export default DashboardPage;
