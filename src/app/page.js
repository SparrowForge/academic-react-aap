import DashboardNavbar from "./component/Dashboard/DashboardNavbar";
import DashboardSidebar from "./component/Dashboard/DashboardSidebar";


export default function Home() {
  return (
    <div className="flex" >
      <DashboardSidebar />
      <DashboardNavbar />
    </div>
  );
}
